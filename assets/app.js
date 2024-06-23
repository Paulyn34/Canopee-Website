import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Navbar from "./components/Navbar";

/*import "./bootstrap.js";

 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.*/

import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PartnersPage from "./PartnersPage";
import PerformancesPage from "./PerformancesPage";
import ContactsPage from "./ContactsPage";
import PricesPage from "./PricesPage";
import Footer from "./components/Footer";

console.log("Hello ");

const App = () => {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <main className="container pt-5">
        <Routes>
          <Route path="/partners" Component={PartnersPage}></Route>
          <Route path="/performances" Component={PerformancesPage}></Route>
          <Route path="/contacts" Component={ContactsPage}></Route>
          <Route path="/prices" Component={PricesPage}></Route>
          <Route path="/" Component={HomePage}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </HashRouter>
  );
};

//pour relier mon front-end React à mon back-end symfony, app, c'est la div insérée dans mon fichier twig
const contain = document.getElementById("app");
const root = createRoot(contain);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
