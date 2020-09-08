import React,{useEffect} from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.componenets'
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './componenets/Header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'
import { checkUserSession } from './redux/user/user.actions'
const App=({checkUserSession,currentUser})=> {
  

  

  useEffect(()=>{
   checkUserSession();
  },[checkUserSession])

  
  
  
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/' />):(<SignInAndSignUpPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />

  
        </Switch>
      </div>
    );
  

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
  checkUserSession:() =>dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
