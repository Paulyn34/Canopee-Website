import React, { Fragment } from "react";
import PriceTable from "./PriceTable";

export default function PricesPage() {
  return (
    <Fragment>
      <div className="card text-center ">
        <div className="card-body">
          <h5 className="card-title"> Tarifs des différentes prestations</h5>
        </div>
      </div>
      <PriceTable></PriceTable>
      <br></br>
    </Fragment>
  );
}
