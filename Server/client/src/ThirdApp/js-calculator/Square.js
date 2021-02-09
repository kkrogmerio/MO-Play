import React,{useEffect,useState} from "react";
import Proptypes from "prop-types";
import {useDispatch} from "react-redux";
import './Calculator.scss';
export function Square(props) {
    return (<button id={props.id} onClick={props.onClick}>
            {props.content}
        </button>
    )
}