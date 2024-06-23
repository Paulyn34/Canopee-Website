import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CardPartner from "./CardPartner";

export default function PartnersPage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/2")
      .then((response) => response.data.text)
      .then((text) => setPresentation(text));
  }, []);

  return (
    <Fragment>
      <div className="card text-center ">
        <h4 className="card-header text-success">Qui sommes-nous ?</h4>
        <div className="card-body">
          <h5 className="card-title"> {presentation}</h5>
        </div>
        <h4 className="card-footer text-success text-success">CANOPEES</h4>
      </div>
      <br></br>
      <CardPartner></CardPartner>
    </Fragment>
  );
}
