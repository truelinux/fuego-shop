import React, { Component } from "react";
import Title from "./Title";
import emailjs from "emailjs-com";
import { ProductConsumer } from "../context";
import ProductList from "./ProductList";
import Product from "./Product";
import Order from "./Order";

export default function Thanks() {
  function sendEmail(params) {
    emailjs
      .send(
        "service_wwrsd57",
        "template_5sycj9k",
        params,
        "user_d8xvrxR83bEahaWjgmrMW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="THANK YOU!" title="fuego" />
          <div className="row">
            <div className="p-5 m-auto col-10 ">
              <div className="text-center">
                <strong>
                  Your purchase details will be emailed to you shortly. Thankyou
                  once again for helping me achieve my dreams and being apart of
                  the Fuego family.
                </strong>
              </div>
              <div className="p-5 text-center">
                <ProductConsumer>
                  {(value) => {
                    const {
                      paid,
                      cancelled,
                      payerID,
                      paymentID,
                      paymentToken,
                      returnUrl,
                      address,
                      email,
                    } = value.payment;
                    const total = value.total;
                    const order = value.order;
                    var price = 0;
                    var items = "";

                    let list = order.map((product) => {
                      items =
                        items +
                        product.title +
                        " - (" +
                        product.color +
                        ") $" +
                        product.total +
                        " x " +
                        product.count +
                        " - " +
                        product.size +
                        " <br>";
                      return <Order key={product.id} product={product} />;
                    });
                    var params = {
                      to_name: address.recipient_name,
                      items: items,
                      total_price: total,
                      address:
                        address.line1 +
                        ", " +
                        address.city +
                        " " +
                        address.state +
                        " " +
                        address.postal_code,
                      email_to: email,
                      paymentID: paymentID,
                    };
                    sendEmail(params);
                    return (
                      <div>
                        <strong>
                          Order Number: <br></br>
                          {paymentID}
                          <br></br>
                          Order:
                          <br></br>
                          {list}
                        </strong>
                      </div>
                    );
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
