import React, { Fragment, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { useState } from "react";

export default function PriceAccordion1() {
  const [prices, setPrices] = useState();
  useEffect(() => {
    axios
      .get("/api/prices/")
      .then((response) => response.data["hydra:member"])
      .then((data) => {
        console.log("json:", data);
        setPrices(data);
      });
  }, []);
  return (
    <Fragment>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Taille des haies :</h3>
          </Accordion.Header>
          {prices
            ? prices.map((price) => (
                <Accordion.Body key={price.id}>
                  <p>
                    {price.nameActivity}, {price.priceActivity} en €,(
                    {price.category})
                  </p>
                </Accordion.Body>
              ))
            : "En cours de chargement"}
        </Accordion.Item>
      </Accordion>
    </Fragment>
  );
}
