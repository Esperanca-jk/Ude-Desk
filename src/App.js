import './App.css';
import './css/style.css';
import React, { Component } from 'react';
import Products from "./pages/Products";
import Product from "./pages/Product";
import verusadmin from "./components/verusadmin";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
   
  return (
    <div>
      <div>
        <Slider></Slider></div>
        <div><Router>
      <Products/></Router>
      </div>
      

      
    
      

    
    
    {/* <Register
    />
    <Login
    /> */}
    </div>
    
    
    
  );
}
// React.Dom.render(<header/>, document.getElementById('root'));

export default App;
