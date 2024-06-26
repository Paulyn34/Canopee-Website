import React, { Fragment } from "react";
//import logo Canopees
import logo from "../ressources/images/logo-canopees.png";
//import react-bootstrap's elements
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
//import icons
import icon1 from "../ressources/icons/icons8-adress-50.png";
import icon2 from "../ressources/icons/icons8-phone-50.png";

export default function Footer() {
  return (
    <Fragment>
      <Navbar className="bg-body-green">
        <Container>
          <img style={{ width: "18rem" }} src={logo} alt="Logo" />
        </Container>
      </Navbar>
      <Nav className="justify-content-end bg-body-green" activeKey="/home">
        <Nav.Item>
          <Link to="/#" className="nav-link">
            CGU
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#" className="nav-link">
            CGV
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#" className="nav-link">
            Mentions légales
          </Link>
        </Nav.Item>
      </Nav>
      <Navbar className="bg-body-green">
        <Container>
          <div className="d-flex flex-start">
            <Navbar.Brand>
              <img
                src={icon1}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="icon adress"
              />
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
              <p>06 85 89 64 57</p>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
      <Nav className="justify-content-center bg-body-green">
        <Nav.Item>
          <p className="text-center mt-4 mb-4 bg-body-green">
            copyright © canopées2024.
          </p>
        </Nav.Item>
      </Nav>
    </Fragment>
  );
}
