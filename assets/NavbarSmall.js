import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function NavbarSmall() {
  return (
    <div className="d-block d-sm-block d-md-none">
      <Dropdown variant="warning">
        <Dropdown.Toggle>Menu</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/#" className="nav-link">
              Accueil
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/partners" className="nav-link">
              Qui sommes-nous?
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/performances" className="nav-link">
              Prestations
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/prices" className="nav-link">
              Tarifs
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/contacts" className="nav-link">
              Contact
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
