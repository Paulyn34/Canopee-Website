import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./ressources/images/logo-canopees.png";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavbarTest() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand>
              <img style={{ width: "18rem" }} src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fermer
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/#" className="nav-link">
                      Accueil
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/partners" className="nav-link">
                      Qui sommes-nous?
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/performances" className="nav-link">
                      Prestations
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/prices" className="nav-link">
                      Tarifs
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contacts" className="nav-link">
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
