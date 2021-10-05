import React from 'react';
import Register from './Screens/Register'
import {isAuth} from "./Helpers/auth";
import {Redirect,Link} from 'react-router-dom'
import video from "./assets/MoPlay.mp4";

/**
 * @return {boolean}
 */
function App() {
  return (
    <div>
        {isAuth() ? <Redirect to='/welcome' /> : null}
        <video autoPlay loop muted  style={{position:'fixed',margin:'0px',width:'100%',opacity:0.5}}>*/
           <source src={video} type="video/mp4"/>
           Your browser does not support the video tag.
           @Html
        </video>
        <nav className="navbar navbar-light bg-light flex-container" style={{opacity:"0.8"}}>

                <h1 style={{position:"absolute",left:"83.7%",fontSize:"33px",color:"CornflowerBlue"}}>
                    <Link
                        to='/login'>
                        <strong>
                    LOGIN
                        </strong>
                </Link>
                </h1>



                <h1 style={{position:"absolute",left:"90.7%",fontSize:"33px",color:"CornflowerBlue"}}>
                    <Link
                        to='/register'>
                        <strong>
                            REGISTER
                        </strong>
                    </Link>
                </h1>


            <div style={{position:"absolute",left:"81%"}}>
                <a href="https://twitter.com/intent/tweet" title="See us on twitter!" target="_blank">
                    <button className="btn btn-block btn-danger" style={{width: "33px"}}>
                        <i className="fa fa-twitter fa-2x"/>
                    </button>
                </a>
            </div>
            <div style={{position:"absolute",left:"78%"}}>
                <a href="https://tumblr.com/widgets/share" title="See us on tumblr!" target="_blank">
                    <button className="btn btn-block btn-info" style={{width: "33px"}}>
                        <i className="fa fa-tumblr fa-2x"/>
                    </button>
                </a>
            </div>
            <div style={{position:"absolute",left:"75%"}}>
                <a href="https://facebook.com/moPlay" title="See us on facebook!" target="_blank">
                    <button className="btn btn-block btn-info" style={{width: "33px"}}>
                        <i className="fa fa-facebook fa-2x"/>
                    </button>
                </a>
            </div>


            <span className="navbar-brand mb-0 h1"><h1 style={{position:"relative",marginBottom:"0px",color:"hsl(240, 50%, 75%)",fontSize:"50px",fontWeight:"900",fontFamily:"Verdana"}}><strong>MoPlay</strong></h1></span>

        </nav>

        <div className="HomePage Transition1" style={{padding:"20px"}}>


                <strong>
                    <h1>Why would you use our app store?</h1></strong>
               <ul style={{fontSize:"23px"}}>
                   <li>
                       &emsp;MoPlay, formerly Android Market, is a digital distribution service operated and developed by Google. It serves as the official app store for certified devices running on the Android operating system, allowing users to browse and download applications developed with the Android software development kit (SDK) and published through Google. MoPlay also serves as a digital media store, offering music, books, movies, and television programs. It previously offered Google hardware devices for purchase until the introduction of a separate online hardware retailer, Google Store, on March 11, 2015, and it also offered news publications and magazines before the revamp of Google News on May 15, 2018, and it offered music and podcasts as part of MoPlay Music until December 2020 when the service was replaced with YouTube Music and Google Podcasts.[1]
                   </li>
                   <li>
                       &emsp;Applications are available through MoPlay either free of charge or at a cost. They can be downloaded directly on an Android device through the proprietary Play Store mobile app or by deploying the application to a device from the MoPlay website. Applications utilizing hardware capabilities of a device can be targeted to users of devices with specific hardware components, such as a motion sensor (for motion-dependent games) or a front-facing camera (for online video calling). The MoPlay store had over 82 billion app downloads in 2016 and reached over 3.5 million apps published in 2017,[2] while after a purge of apps is back to over 3 million.[3] It has been the subject of multiple issues concerning security, in which malicious software has been approved and uploaded to the store and downloaded by users, with varying degrees of severity.
                   </li>
                   <li>
                       &emsp;MoPlay was launched on March 6, 2012, bringing together Android Market, Google Music, and the Google eBookstore under one brand, marking a shift in Google's digital distribution strategy. The services included in MoPlay are MoPlay Books, MoPlay Games, and formerly included MoPlay Music before being discontinued in favor of YouTube Music and Google Podcasts in December 2020, MoPlay Newsstand before it was phased out in November 2018, and MoPlay Movies & TV before being renamed to Google TV in September 2020. Following their re-branding, Google has gradually expanded the geographical support for each of the services.
                   </li>
                   </ul>

        {/*<img src="~/heart.png" alt="loading..." style="height:60px;width:60px;position:relative;top:calc(50%);left:50%" className="transition2"/>*/}

        </div>
    </div>


  );
}

export default App;
