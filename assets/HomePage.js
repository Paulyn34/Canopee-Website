import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CarouselHomePage from "./CarouselHomePage";
import SlideHomePage from "./SlideHomePage";

export default function HomePage() {
  const [presentation, setPresentation] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/presentations/1")
      .then((response) => response.data.text)
      .then((text) => setPresentation(text))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="container-fluid g-0">
        <SlideHomePage></SlideHomePage>
      </div>
      <br></br>
      <div className="card text-center ">
        <div className="card-body">
          <h5 className="card-title"> {presentation}</h5>
        </div>
      </div>
      <br></br>
      <CarouselHomePage></CarouselHomePage>
      <br></br>
    </Fragment>
  );
}
