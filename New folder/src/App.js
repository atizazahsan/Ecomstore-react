import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import {HomePage} from './pages/homepage'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;