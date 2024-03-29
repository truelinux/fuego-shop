import React, { Component } from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      setOrder,
      cart,
      clearCart,
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container-fluid col-8">
            <div className="row">
              <div className="m-auto ml-lg-auto mr-lg-0 text-capitalize text-center text-lg-left">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title blue text-muted">
                    {" "}
                    NO REFUNDS
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-10 text-center p-5 m-auto">
              <PayPalButton
                totalAmount={cartTotal}
                clearCart={clearCart}
                history={history}
                setOrder={setOrder}
              />
            </div>
            <div className="text-center">
              <Link to="/">
                <div className="text-click">back to products</div>
              </Link>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
