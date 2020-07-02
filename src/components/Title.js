import React from "react";

export default ({ name, title }) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-uppercase">
            {name}
            <hr></hr>
            <strong className="text-orange">{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};
