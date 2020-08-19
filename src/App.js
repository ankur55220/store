import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.componenets'
import './App.css';
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'

function dummy(){
  return <h1>test</h1>
}
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />

    </div>
  );
}

export default App;
