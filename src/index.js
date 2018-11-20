import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./script";
import img1 from "../src/imges/shoe1.jpg";
import img2 from "../src/imges/shoe2.jpg";
import img3 from "../src/imges/shoe3.jpg";
import img4 from "../src/imges/shoe4.jpg";
import img5 from "../src/imges/shoe5.jpeg";
import img6 from "../src/imges/shoe6.jpg";
import Cart from "./cart.jsx";

class Shoppinglist extends React.Component {
  render() {
    return (
      <section id="main">
        <section className="shoes-contaner">
          <ShoppingItem source={img1} what="Shoe #1" price="10$" />
          <ShoppingItem source={img2} what="shoe #2" price="15$" />
          <ShoppingItem source={img3} what="shoe #3" price="12$" />
          <ShoppingItem source={img4} what="shoe #4" price="18$" />
          <ShoppingItem source={img5} what="shoe #5" price="10$" />
          <ShoppingItem source={img6} what="shoe #6" price="20$" />
        </section>
        <Cart />
      </section>
    );
  }
}

function ShoppingItem(props) {
  return (
    <section className="single-shoe">
      <img src={props.source} />
      <h3 className="shop-item-title">{props.what}</h3>
      <Details price={props.price} />
    </section>
  );
}
function Details(props) {
  return (
    <div className="details">
      <h4 className="shop-item-price">{props.price}</h4>
      <button className="add">Add to cart</button>
    </div>
  );
}

ReactDOM.render(<Shoppinglist />, document.getElementById("root"));
