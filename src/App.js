import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import {Route, Redirect, Switch} from "react-router-dom"
import ProductForm from './components/ProductForm';


class App extends Component {

  

 
  render() { 

    return ( 

      <main className="container">
        <Switch>
       
       
     <Route path="/products/:id" component={ProductForm}></Route>
        
       <Route path="/products" component={Products}></Route>
        

       
        {/* <Route path="/notfound" component={NotFound}></Route> */}
        <Redirect from="/" exact to="/products"></Redirect>
        <Redirect to="/notfound" ></Redirect>
        </Switch>
       
      </main>
      
     );
  }
}

export default App;
