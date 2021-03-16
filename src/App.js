import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";
import About from "./components/About";
import Thanks from "./components/Thanks";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/thanks" component={Thanks}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/details" component={Details}></Route>
        <Route exact path="/" component={ProductList}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
