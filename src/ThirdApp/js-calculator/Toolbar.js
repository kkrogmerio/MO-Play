import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";

import './Calculator.scss'
export default function Toolbar(props){
    const [text,setText]=useState('');
    const [presentValue,setPresentValue]=useState('');
    useEffect(()=>{
        if(props.action.charAt(props.action.length-1)==='')
            {
                setPresentValue('');
            setText('');
            }
        else if(props.action.charAt(props.action.length-1)==='=')
        {   console.log(text);
            if(text!=='')
             {let num=eval(text).toFixed(2);
             
            setPresentValue(num);
            setText(text+"="+num);}
        }
        else
        {  if(text===''&&isNaN(props.action))
                {}
          else  if (isNaN(text.charAt(text.length - 1))&&isNaN(props.action.charAt(props.action.length-1)))
            {
                setText(text=>text.slice(0,-1)+props.action.charAt(props.action.length-1))}
            else
            setText(text + props.action.charAt(props.action.length - 1));
        if(/^-{0,1}[0-9]+$/gm.test(props.action.charAt(props.action.length-1)))
            {   
                setPresentValue(presentValue+props.action.charAt(props.action.length-1));
            }
        else
            {
                let containEqual=text.indexOf('=');
                if (containEqual>-1) {
                    setText(text.substr(containEqual+1)+props.action.charAt(props.action.length-1));

                }
                setPresentValue(props.action.charAt(props.action.length-1));

                
            }
        }
    },[props.action]);
    return(<div id="display">
            <div id="calculation">
                {text}

            </div>

        <div id="result">
            {presentValue}
        </div>
    </div>)
}
