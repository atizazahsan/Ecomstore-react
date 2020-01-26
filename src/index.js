import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; //insering router library
import './index.css';
import App from './App';



ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter> ,
     document.getElementById('root'));
