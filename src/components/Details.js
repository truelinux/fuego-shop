import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Product from "./Product";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ImageGallery from "react-image-gallery";
import Select from "react-select";

export default class Details extends Component {
  render() {
    return (
      <ProductWrapper>
        <ProductConsumer>
          {(value) => {
            const { setColor } = value;
            const {
              id,
              company,
              img1,
              img2,
              info,
              price,
              title,
              out,
              color,
              colors,
              inCart,
            } = value.detailProduct;

            const images = [
              {
                original: "img/" + img1 + "-" + color + ".png",
              },
              {
                original: img2,
              },
            ];
            let options = [];
            if (colors) {
              colors.map(
                (element) =>
                  (options = [...options, { value: element, label: element }])
              );
            }

            return (
              <div>
                <div className="col-10 mx-auto text-center text-slanter my-5">
                  <h1>{title}</h1>
                </div>
                <div>
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
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        PRICE: <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>

                    <div className="col-sm-10 pt-3 text-center m-auto">
                      <h5>COLOR</h5>
                      <Select
                        className="pb-5 col-5 m-auto"
                        options={options}
                        onChange={(value) => {
                          setColor(id, value.value);
                        }}
                        defaultValue={{ label: color, value: color }}
                      />
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
                            <p className="text-click">PURCHASE</p>
                          </div>
                        )}
                      </button>
                      <Link to="/">
                        <div className="text-click">STORE</div>
                      </Link>
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
