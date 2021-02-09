import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from '../Redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import Reset from "../Screens/Reset";
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>


    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
