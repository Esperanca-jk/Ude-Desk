import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./About/About";
// import Contact from "./Contact/Contact";
import Products from "../pages/Products";
import Product from "../pages/Product";
import ProductItem from "./ProductItem";
import Home from "./home";
import history from './history';
import Verusadmin from "./verusadmin";
import Novoadmin from "./novoadmin";
import Dashboard from "./dashboard";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/verusadmin" exact component={Verusadmin} />
                    <Route path="/novoadmin" exact component={Novoadmin} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    {/* <Route path="/About" component={About} /> */}
                    {/* <Route path="/Contact" component={Contact} /> */}
                    <Route path="/products" component={Products} exact/>
      <Route path="/products/:id" component={Product} />
                </Switch>
            </Router>
        )
    }
}