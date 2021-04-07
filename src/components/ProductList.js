import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import CountUp from "react-countup";

export class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="shop" title="fuego" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
            <Title
              name="SALES"
              title={
                <CountUp end={12} duration={5} className="col-10 text-center" />
              }
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
