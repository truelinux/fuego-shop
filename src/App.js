import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/details" component={Details}></Route>
        <Route exact path="/" component={ProductList}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
