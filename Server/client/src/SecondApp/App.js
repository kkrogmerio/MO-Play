

import React from 'react'
import {Randomize} from './randomized-quotes/Randomized'

import './App2.css'
export default function App(){

    return (
        <div style={{margin:"0"}}>


            {/*<video autoPlay loop muted  style={{zIndex:-1,objectFit:"cover",margin:"0",position:"absolute",width:"100%",height:"100%",overflow:"hidden"}}>*/}
            {/*    <source src={Video} type="video/mp4"/>*/}
            {/*            Your browser does not support the video tag.*/}
            {/*</video>*/}


            <Randomize/>


        </div>

    )
}
