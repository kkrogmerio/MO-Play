import React,{useEffect,useState} from "react";
import Proptypes from "prop-types";
import {useDispatch} from "react-redux";
import {LowGrid} from "./LowGrid";
import {Square} from "./Square";


const Keyboard=props=>{

    const numAreas=7;
    const numNumbers=10;
    const lowGridIndex=3;
    useEffect(()=> {

        document.getElementById('action-0').innerHTML='AC';

        document.getElementById('action-1').innerHTML='/';

        document.getElementById('action-2').innerHTML='*';

        document.getElementById('action-4').innerHTML='-';

        document.getElementById('action-5').innerHTML='+';

        document.getElementById('action-6').innerHTML='=';





    },[]);
    function trigger(i){

        switch(i){
            case 0:

                doClean();

                break;
            case 1:

                doDivide();

                break;
            case 2:

                doMultiply();

                break;
            case 4:

                doSubtract();
                break;
            case 5:

                doAdd();

                break;
            case 6:

                doEqual();

                break;

        }

    }
    function doClean(){
        props.dispatch(props.clean());
    }
    function addToNum(value){
        props.dispatch(props.formNum(value));
    }
    function doDivide(){
        

        props.dispatch(props.divide());
    }
    function doMultiply(){

        props.dispatch(props.multiply());
    }
    function doSubtract(){

        props.dispatch(props.subtract());
    }
    function doEqual(){

        props.dispatch(props.equal());


    }
    function doAdd(){

        props.dispatch(props.add());
    }

    function displayAreas(){
        let divs=[];

        for (let i=0;i<numAreas;++i)
        {
            if(i!==lowGridIndex)
                divs.push(<Square id={"action-"+i} content={i} onClick={()=>trigger(i)}/> );
            else{
                divs.push(<LowGrid id={"action-"+i} numSquares={numNumbers} addToNum={addToNum}/> )
            }
        }

        return divs;
    }
        return (
            <div id="keyboard">
                {displayAreas()}
            </div>
        )

};
export default Keyboard;
Keyboard.propTypes={
    dispatch:Proptypes.func.isRequired,
    add:Proptypes.func.isRequired,
    subtract:Proptypes.func.isRequired,
    multiply:Proptypes.func.isRequired,
    divide:Proptypes.func.isRequired,
    setAction:Proptypes.func.isRequired,
    clean:Proptypes.func.isRequired,
    equal:Proptypes.func.isRequired,
    value:Proptypes.number.isRequired,
    formNum:Proptypes.func.isRequired,
    setValue:Proptypes.func.isRequired,
};