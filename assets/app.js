import React, { Fragment } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./HomePage";
import PartnersPage from "./PartnersPage";
import PerformancesPage from "./PerformancesPage";
import ContactsPage from "./ContactsPage";
import PricesPage from "./PricesPage";
import Footer from "./components/Footer";
import NavbarTest from "./components/Navbar";

console.log("Hello");

const App = () => {
  return (
    <HashRouter>
      <NavbarTest></NavbarTest>
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

//to conncet my front-end React to my back-end symfony (app, div insert in my file twig
const contain = document.getElementById("app");
const root = createRoot(contain);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
