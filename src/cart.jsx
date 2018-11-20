import React from "react";
// import "./script.js";
export default class Cart extends React.Component {
  render() {
    return (
      <section className="container1">
        <h2 className="section-header">CART</h2>
        <p id="text">
          is empty now
          <br />
          lets add some awsome stuff!
        </p>
        <div className="cart-row" />
        <div className="cart-items" />
        <div className="cart-total hidden">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">$0</span>
        </div>
        <button className=" btn-purchase hidden" type="button">
          PURCHASE
        </button>
      </section>
    );
  }
}
