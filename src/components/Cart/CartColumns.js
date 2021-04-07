import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block col-8">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="text-uppercase">size</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">color</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-3">
          <p className="text-uppercase">amount</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="text-uppercase">remove</p>
        </div>
      </div>
    </div>
  );
}
