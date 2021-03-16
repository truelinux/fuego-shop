import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Empty Cart</h1>
          <Link to="/">
            <div className="text-click">STORE</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
