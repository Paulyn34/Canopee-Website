import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CardPartner from "./CardPartner";

export default function PartnersPage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/2")
      .then((response) => response.data.text)
      .then((text) => setPresentation(text))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="card text-center ">
        <div className="card-body">
          <h5 className="card-title"> {presentation}</h5>
        </div>
      </div>
      <br></br>
      <CardPartner></CardPartner>
      <br></br>
    </Fragment>
  );
}
