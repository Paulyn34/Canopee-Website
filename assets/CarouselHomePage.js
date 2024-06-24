import React from "react";
//import react-bootsratp's elements
import Carousel from "react-bootstrap/Carousel";
//import images
import CarouselImage1 from "../assets/ressources/images/flowers-3571119_640.jpg";
import CarouselImage2 from "../assets/ressources/images/garden-207164_640.jpg";
import CarouselImage3 from "../assets/ressources/images/garden-1680802_640.jpg";
import CarouselImage4 from "../assets/ressources/images/pathway-2289978_640 (1).jpg";
import CarouselImage5 from "../assets/ressources/images/tree-4815963_640.jpg";

export default function CarouselHomePage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={CarouselImage1} className="d-block w-100" alt="flowers" />
          <Carousel.Caption>
            <h3>Nos dernières réalisations</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage2} className="d-block w-100" alt="pathway" />
          <Carousel.Caption>
            <h3>Aménagement d'un chemin paysager</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage3} className="d-block w-100" alt="deck" />
          <Carousel.Caption>
            <h3>Aménagement d'une terrasse</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage4} className="d-block w-100" alt="pathway" />
          <Carousel.Caption>
            <h3>Aménagement d'un cheminement</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CarouselImage5} className="d-block w-100" alt="tree" />
          <Carousel.Caption>
            <h3>Coupe d'arbres</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
