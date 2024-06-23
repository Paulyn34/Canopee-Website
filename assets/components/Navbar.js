import React from "react";
import { Link } from "react-router-dom";

//import logo Canopees
import logo from "../ressources/images/logo-canopees.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <img style={{ width: "18rem" }} src={logo} alt="Logo" />

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/partners">
                  Qui sommes-nous?
                </a>
              </li>
              <li className="nav-item">
                <Link to="/performances" className="nav-link">
                  Prestations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/prices" className="nav-link">
                  Tarifs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
