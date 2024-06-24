import React from "react";
import { Link } from "react-router-dom";

//import logo Canopees
import logo from "../ressources/images/logo-canopees.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="d-flex flex start">
            <img style={{ width: "18rem" }} src={logo} alt="Logo" />
          </div>
          <div className="d-flex flex-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ">
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
        </div>
      </nav>
    </div>
  );
}
