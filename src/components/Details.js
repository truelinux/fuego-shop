import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Product from "./Product";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ImageGallery from "react-image-gallery";

export default class Details extends Component {
  render() {
    return (
      <ProductWrapper>
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img1,
              img2,
              info,
              price,
              title,
              out,
              inCart,
            } = value.detailProduct;

            const images = [
              {
                original: img1,
              },
              {
                original: img2,
              },
            ];

            return (
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                  <h1>{title}</h1>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <ImageGallery
                      className="img-fluid"
                      alt="product"
                      items={images}
                      showNav={false}
                      showThumbnails={false}
                      showBullets={true}
                      showPlayButton={false}
                      showFullscreenButton={false}
                    />
                    ;
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <div className="text-click">back to products</div>
                      </Link>
                      <button
                        className="cart-btn"
                        disabled={out ? true : false}
                        onClick={() => {
                          value.openModal(id);
                        }}
                      >
                        {out ? (
                          <div className="text-red">SOLD OUT</div>
                        ) : (
                          <div>
                            <i className="fas fa-cart-arrow-down " />
                            <div className="text-click">Add to cart</div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .cart-btn {
    padding: 0.2 rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--purpleDark);
    font-size: 2.5rem;
    border-radius: 0.5rem 0 0 0;
  }
`;
