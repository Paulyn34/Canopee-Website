import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function SlideHomePage() {
  const [slides, setSlides] = useState();
  useEffect(() => {
    axios
      .get("/api/slides/")
      .then((response) => response.data["hydra:member"])
      .then((data) => {
        console.log("json:", data);
        setSlides(data);
      });
  }, []);

  return (
    <Fragment>
      <div className="row  row-cols-sm-2 row-cols-lg-2 d-none d-lg-flex justify-content-center">
        {slides
          ? slides.map((slide) => (
              <Col key={slide.id} xs={6} md={4}>
                <Image
                  style={{ width: "40rem" }}
                  src={slide ? "/uploads/" + slide.photo : ""}
                  rounded
                />
              </Col>
            ))
          : "En cours de chargement"}
      </div>
    </Fragment>
  );
}
