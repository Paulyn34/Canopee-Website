import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import FormContact from "./FormContact";
import MapContact from "./MapContact";

export default function ContactsPage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/5")
      .then((response) => response.data.text)
      .then((text) => setPresentation(text))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title"> {presentation}</h5>
        </div>
      </div>
      <br></br>
      <MapContact></MapContact>
      <br></br>
      <FormContact></FormContact>
      <br></br>
    </Fragment>
  );
}
