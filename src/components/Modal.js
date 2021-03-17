import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Select from "react-select";
const options = [
  { value: "SMALL", label: "SMALL" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "LARGE", label: "LARGE" },
];

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price, id } = value.modalProduct;
          var size = "SMALL";

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Choose A Size</h5>
                      <div className="col-8 m-auto">
                        <Select
                          options={options}
                          onChange={(value) => (size = value.value)}
                          defaultValue={{ label: "SMALL", value: "SMALL" }}
                        />
                      </div>

                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to="/">
                        <div
                          className="text-click"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          store
                        </div>
                      </Link>
                      <Link to="/cart">
                        <div
                          className="text-click"
                          onClick={() => {
                            value.addToCart(id, size);
                            closeModal();
                          }}
                        >
                          ADD
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainLight);
  }
`;
