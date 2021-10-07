import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {isAuth} from "../../Helpers/auth";
import {Redirect} from 'react-router-dom';
import './Calculator.scss'
import Toolbar from './Toolbar';
import Keyboard from "./Keyboard";
import{add,subtract,multiply,divide,clean,actioning,selectNumber,selectAction,equal,formNum} from "./CalculatorSlice";

export function MyCalculator(){
    const number=useSelector(selectNumber);
    const action=useSelector(selectAction);

    const [value,setValue]=useState(0);
    const dispatch=useDispatch();
    return(
        <div className="body">
            {!isAuth() ? <Redirect to='/' /> : null}
            <Toolbar number={number} action={action}/>
            <Keyboard dispatch={dispatch} value={value} action={action} setValue={setValue} formNum={formNum} equal={equal} add={add} subtract={subtract} multiply={multiply} divide={divide} clean={clean} setAction={actioning}/>
        </div>
    )
}
