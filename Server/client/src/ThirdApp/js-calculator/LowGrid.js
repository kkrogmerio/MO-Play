import React,{useEffect,useState} from "react";
import Proptypes from "prop-types";
import {useDispatch} from "react-redux";

import {Square} from "./Square";
export function LowGrid(props){
    function displayNumbers(){
        let divs=[];
        for (let i=0;i<props.numSquares;++i)
            divs.push(<Square id={"key-"+i} onClick={()=>props.addToNum(i)} content={i}/>);
        divs.push(<Square id={"key-dot"} content={'.'} onClick={()=>props.addToNum('.')}/>);
        return divs;
    }
    return(<div id={props.id}>
        {displayNumbers()}
        </div>
    )

}