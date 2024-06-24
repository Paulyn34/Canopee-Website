import React, { Fragment } from "react";
import ModalPerformancePage1 from "./ModalPerformancePage1";
import ModalPerformancePage2 from "./ModalPerformancePage2";
import ModalPerformancePage3 from "./ModalPerformancePage3";
import ModalPerformancePage4 from "./ModalPerformancePage4";
import ModalPerformancePage5 from "./ModalPerformancePage5";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PerformancesPage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/3")
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
      <ModalPerformancePage1></ModalPerformancePage1>
      <ModalPerformancePage2></ModalPerformancePage2>
      <ModalPerformancePage3></ModalPerformancePage3>
      <ModalPerformancePage4></ModalPerformancePage4>
      <ModalPerformancePage5></ModalPerformancePage5>
    </Fragment>
  );
}
