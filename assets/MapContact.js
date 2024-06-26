import React from "react";
//import icons and map
import icon1 from "../assets/ressources/icons/icons8-adress-50.png";
import icon2 from "../assets/ressources/icons/icons8-phone-50.png";
import icon3 from "../assets/ressources/icons/icons8-new-message-50.png";
import imageMap from "../assets/ressources/images/thumbnail.jpeg";
//import bootstrap's elements
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function MapContact() {
  return (
    /*section Contact details*/
    <div className="d-flex justify-content-center">
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={imageMap}
          alt="map leguevin"
          class="w-100"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Nos coordonnées
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div className="adress d-flex flex-raw justify-content-center">
              <span className="icon">
                <img src={icon1} alt="icon-adress"></img>
              </span>
              <div className="d-flex flex-column p-2">
                <p className="m-0">9 rue des hirondelles</p>
                <p className="m-0">31700 Léguevin</p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="phone d-flex flex-raw justify-content-center">
              <span className="icon ps-2 pt-1">
                <img src={icon2} alt="icon-phone"></img>
              </span>
              <div className="d-flex flex-column p-2">
                <p className="m-0 pt-3 ">06 35 62 89 54</p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="adressEmail d-flex flex-raw justify-content-center">
              <span className="icon ps-2 pt-1">
                <img src={icon3}></img>
              </span>
              <div className="d-flex flex-column p-2">
                <p className="m-0 pt-3 ">Canopées-Léguevin@example.com</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
