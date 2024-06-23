import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function CardPartner() {
  const [partners, setPartners] = useState();
  useEffect(() => {
    axios
      .get("/api/partners/")
      .then((response) => response.data["hydra:member"])
      .then((data) => {
        console.log("json:", data);
        setPartners(data);
      });
  }, []);

  return (
    <Fragment>
      {partners
        ? partners.map((partner) => (
            <Card key={partner.id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={partner ? "/uploads/" + partner.photo : ""}
                alt="photo-partner"
                style={{ width: "18rem" }}
              />
              <Card.Body>
                <Card.Title>{partner ? partner.name : ""}</Card.Title>
                <Card.Text>{partner ? partner.description : ""}</Card.Text>
              </Card.Body>
            </Card>
          ))
        : "En cours de chargement"}
    </Fragment>
  );
}
