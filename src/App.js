import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.componenets'
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './componenets/Header/header.component'
function dummy(){
  return <h1>test</h1>
}
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
