/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {authenticate,isAuth,signout} from "../../Helpers/auth";
import {Link,Redirect} from 'react-router-dom';

import image from "../left-quote.png"
import{
    change,
    selectClass,
    selectQuote
} from './randomizedSlice';
import './Randomized.scss';

export function Randomize(){
    const clasS=useSelector(selectClass);
    const quote=useSelector(selectQuote);
    const dispatch=useDispatch();
    return(
        <div style={{margin:"0"}}>
            {!isAuth() ? <Redirect to='/' /> : null}
            <div className={'style'+clasS.valueOf()+'-randomized transition1'}>
            <img src={image} alt="loading..." id={"transitionQuote"} className={"transition2"}/>
            <div style={{display:"inline-block",position:"relative",top:"50%"}}>
            <p style={{}}>

                <h1 style={{position:"relative",fontSize:"20px",fontWeight:"bold",textAlign:"right"}}>
                    <i className="fa fa-quote-left"/>
                {quote[0]}
                </h1>
                <h1 style={{position:"relative",fontSize:"20px",fontWeight:"bold",textAlign:"right"}}>
                    -{quote[1]}
                </h1>
            </p>
            </div>
            <div className="row" style={{position:"absolute",bottom:"0px",width:"100%",margin:"auto"}}>
                <div className="col-sm-4">
                 <a href="https://twitter.com/intent/tweet" title="Tweet this quote!" target="_blank">
               <button className="btn btn-block btn-danger" style={{height:'40px'}}>
                   <i className="fa fa-twitter"/>
               </button>
                 </a>
                </div>
                    <div className="col-sm-4">
                        <a href="https://tumblr.com/widgets/share" title="Share this quote on tumblr!" target="_blank">
                <button className="btn btn-block btn-info" style={{height:'40px'}}>
                    <i className="fa fa-tumblr"/>
                </button>
                        </a>
                    </div>
                        <div className="col-sm-4">
                <button className="btn btn-block btn-dark" style={{height:'40px'}} onClick={()=>dispatch(change())}>
                    <i className="fa fa-quote-right"/>

                    New Quote
                </button>
                        </div>
            </div>
            
            </div>
            {/* <div className={'style'+clasS.valueOf()+'-randomized'+" transition1"} > */}
                

            {/* </div> */}

        </div>
    )

}
