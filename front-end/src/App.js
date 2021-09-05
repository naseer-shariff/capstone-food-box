import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMenuItemComponent from './components/ListMenuItemComponent';
import Header from './components/Header';
import FooterComponent from './components/FooterComponent';
import CreateMenuItemComponent from './components/CreateMenuItemComponent';
import ViewMenuItemComponent from './components/ViewMenuItemComponent';
import MenuComponent from './components/MenuComponent';
import RegisterCustomerComponent from './components/RegisterCustomerComponent';
function App() {

  return (
    <div>
      <Header />
        <Router>
        
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {MenuComponent}></Route>
                          <Route path = "/admin" component = {ListMenuItemComponent}></Route>
                          <Route path = "/add-menuitem/:id" component = {CreateMenuItemComponent}></Route>
                          <Route path = "/view-menuitem/:id" component = {ViewMenuItemComponent}></Route>
                          <Route path = "/menu" component = {MenuComponent}></Route>
                          <Route path = "/register" component = {RegisterCustomerComponent}></Route>
                    </Switch>
                   
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
