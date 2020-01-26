import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import {HomePage} from './pages/homepage'


const Hatspage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={Hatspage}/>
    </div>
  );
}

export default App;
