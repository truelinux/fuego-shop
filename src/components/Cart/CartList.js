import React from "react";
import CartItem from "./CartItem";
export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid col-8">
      {cart.map((item) => {
        return <CartItem key={item.id + item.size} item={item} value={value} />;
      })}
    </div>
  );
}
