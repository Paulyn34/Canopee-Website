import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CarouselHomePage from "./CarouselHomePage";
import SlideHomePage from "./SlideHomePage";
import TargetPublic from "./TargetPublic";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import image1 from "./ressources/images/bench-6919896_640.jpg";
import image2 from "./ressources/images/hotel-swimming-pool-1065275_640.jpg";
import image3 from "./ressources/images/fountain-7913178_640.jpg";
import image from "./ressources/images/prune-5319780_640.jpg";

export default function HomePage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/1")
      .then((response) => response.data.text)
      .then((text) => setPresentation(text))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="container-fluid g-0">
        <Col xs={6} className="d-block d-sm-none">
          <Image style={{ width: "40rem" }} src={image} rounded />
        </Col>
        <SlideHomePage></SlideHomePage>
      </div>
      <br></br>
      <div className="card text-center ">
        <div className="card-body">
          <h5 className="card-title"> {presentation}</h5>
        </div>
      </div>
      <br></br>
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
        <TargetPublic
          image={image1}
          title="pour les particuliers"
          description="aménagement paysager de
        jardins, terrasses, balcons..."
        ></TargetPublic>
        <TargetPublic
          image={image2}
          title="pour les professionnels"
          description="créations et entretiens de jardin et piscine d'hotels, installation de plantes d'intérieur dans les entreprises, restaurants..."
        ></TargetPublic>
        <TargetPublic
          image={image3}
          title="pour les collectivités"
          description="parcs, jardins partagés..."
        ></TargetPublic>
      </div>
      <br></br>
      <CarouselHomePage></CarouselHomePage>
      <br></br>
    </Fragment>
  );
}
