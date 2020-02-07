import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUPComponent from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import {auth} from './components/firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null ; // to close subscribtion on remount

  componentDidMount(){
    // default code of firebase auth to set user sign in state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user )
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      {/* passing current user state to header Component to descide should is show signin or signout  */}
      <Header currentUser={this.state.currentUser}/> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUPComponent} />
  
        </Switch>
      </div>
    );
  }
}

export default App;
