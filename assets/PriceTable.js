import React, { Fragment, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";

export default function PriceTable() {
  const [prices, setPrices] = useState();
  useEffect(() => {
    axios
      .get("/api/prices/")
      .then((response) => response.data["hydra:member"])
      .then((data) => {
        console.log("json:", data);
        setPrices(data);
      });
  }, []);

  return (
    <Fragment>
      {prices
        ? prices.map((price) => (
            <Table key={price.id} striped bordered hover>
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th>Prix, en euros</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{price.nameActivity}</td>
                  <td>{price.priceActivity} €</td>
                </tr>
              </tbody>
            </Table>
          ))
        : "En cours de chargement"}
    </Fragment>
  );
}
