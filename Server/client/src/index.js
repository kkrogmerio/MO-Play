import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Register from './Screens/Register'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import Activate from './Screens/Activate';
import Login from './Screens/Login';
import Forget from "./Screens/Forget";
import Reset from "./Screens/Reset";
import Welcome from "./Screens/Welcome";
import VisibleModifiedText from "./FirstApp/features/Marker";
import RandomQuote from "./SecondApp/App";
import store from "./Redux/store";
import {Provider} from "react-redux";
import Calculator from "./ThirdApp/App";

ReactDOM.render(
    <Provider store={store}>


    <BrowserRouter>
        <Switch>
            <Route path='/calculator' exact render={props=><Calculator{...props}/>}/>
            <Route path='/randomQuote' exact render={props=><RandomQuote{...props}/>}/>
            <Route path='/markdownPreview' exact render={props=><VisibleModifiedText{...props}/>}/>
            <Route path='/' exact render={props=><App{...props}/>}/>
            <Route path='/register' exact render={props=><Register{...props}/>}/>
            <Route path='/login' exact render={props=><Login{...props}/>}/>
            <Route path='/welcome' exact render={props=><Welcome{...props}/>}/>
            <Route path='/users/password/forget' exact render={props=><Forget{...props}/>}/>
            <Route path='/users/activate/:token' exact render={props=><Activate{...props}/>}/>
            <Route path='/users/password/reset/:token' exact render={props=><Reset{...props}/>}/>
            {/*<Route path='/user/password/reset/' exact render={props=><Reset{...props}/>}/>*/}
        </Switch>

    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


