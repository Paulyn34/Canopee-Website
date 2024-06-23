import React, { Fragment } from "react";
//import logo Canopees
import logo from "../ressources/images/logo-canopees.png";
//import react-bootstrap's elements
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//import icons
import icon1 from "../ressources/icons/icons8-adress-50.png";
import icon2 from "../ressources/icons/icons8-phone-50.png";

export default function Footer() {
  return (
    <Fragment>
      <Navbar className="bg-body-tertiary">
        <Container>
          <img style={{ width: "18rem" }} src={logo} alt="Logo" />
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container className="d-flex flex-end">
          <Navbar.Brand href="#">GGU</Navbar.Brand>
          <Navbar.Brand href="#">CVG</Navbar.Brand>
          <Navbar.Brand href="#">Mentions légales</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src={icon1}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="icon adress"
            />
            <br></br>
            <p>9 rue des hirondelles</p>
            <p>31700 Léguevin</p>
          </Navbar.Brand>

          <Navbar.Brand>
            <img
              src={icon2}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="icon adress"
            />
            <br></br>
            <p>06 85 89 64 57</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
