

import React from 'react'
import {Randomize} from './randomized-quotes/Randomized'
import video from '../assets/Relaxing.mp4'
import './App2.css'
export default function App(){

    return (
        <div style={{margin:"0"}}>


           <video autoPlay loop muted  style={{position:'fixed',margin:'0px',width:'100%',opacity:0.5}}>*/
           <source src={video} type="video/mp4"/>
           Your browser does not support the video tag.
           @Html
        </video>

            <Randomize/>


        </div>

    )
}
