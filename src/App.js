import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.componenets'
import './App.css';
import {Route} from 'react-router-dom'


function dummy(){
  return <h1>test</h1>
}
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={dummy} />

    </div>
  );
}

export default App;
