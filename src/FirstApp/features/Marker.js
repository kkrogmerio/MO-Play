import React,{useState,Component} from 'react'
import {connect} from 'react-redux'
import {authenticate,isAuth,signout} from "../../Helpers/auth";
import {Link,Redirect} from 'react-router-dom';

import $ from 'jquery';


import{
    updateOutput,

} from "./markerSlice";
import './Marker.css'

let marked=require("marked");
export class Marker extends React.Component{



    constructor(props) {
        super(props);


        this.state = {
            input: "",
            heightBorder2:111,

        };
        this.setInput=this.setInput.bind(this);
        this.setOutput=this.setOutput.bind(this);
        this.setHeight=this.setHeight.bind(this);

    }
    async setHeight(value){
        await this.setState({ heightBorder2: value });
        console.log(this.state.heightBorder2);
    }
    setOutput(value){
        this.props.submitNewText(value);
    }
    setInput(value){
        this.setState({input:value});
    }
    componentDidMount() {

        $('.toolbar2').css('width',$('.output').width()).css('top',$('.output').position().top-$('.toolbar2').height()+'px').css('left',$('.output').position().left+'px');
        $('.border2').css('top',$('.output').position().top-$('.toolbar2').height()-2+'px');//.css('height',this.state.heightBorder2+$('.toolbar2').height()+'px');
        this.setState({heightBorder2:$('.output').height()+$('.toolbar2').height()})
        $('.chg1').click(function(){
            $('.border').toggleClass('frameChanged');
            if($('.fa').hasClass('fa-arrows-alt'))
                {$('.fa-arrows-alt').removeClass('fa-arrows-alt').addClass('fa-compress');
                }
            else
                $('.fa-compress').removeClass('fa-compress').addClass('fa-arrows-alt');
        })
        $('.previewArea').css('height','calc(97% - '+$('.toolbar').height()+'px)');


    }

    render() {


        return (    <div>
                {!isAuth() ? <Redirect to='/' /> : null}
            <div style={{position:"absolute",width:"100vw",height:"100vh",backgroundColor:"DarkOliveGreen",opacity:"0.7"}}>
            </div>

            <div className="border" style={{opacity:"1"}}>

                    <div className="toolbar" style={{display:'flex',padding:"5px"}}>
                        <i className="fa fa-edit" style={{marginLeft:5}}/>
                        <strong style={{marginLeft:2,}}><label htmlFor="preview"><span style={{fontSize:"20px"}}>Editor</span></label></strong>
                        <i className="fa fa-arrows-alt fa-1x" style={{position:"absolute",top:"6px",right:"5px"}}/>
                    </div>

                    <script>
                        window.onload=function(){

                    }
                    </script>


                        <textarea placeholder="Enter markdown"     value={this.state.input}
                                  onChange={(event) => {
                                      {this.setInput(event.target.value);this.setOutput(event.target.value)}
                                      {this.setHeight($('.output').height() + $('.toolbar2').height())}
                                  }} id="preview" className="previewArea"/>











            </div>
            <Border2 height={this.state.heightBorder2} text={this.props.change}/>





            </div>


        )
    }
}
class Border2 extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {


        return (
            <div style={{opacity:"1"}}>

                    <div className="border2">
                            <div className="toolbar2" style={{padding:"5px",display:"flex"}}>

                            <i className="fa fa-eye"/>
                                <strong style={{marginLeft:2}}><label htmlFor="preview"><span style={{fontSize:"20px"}}>Preview</span></label></strong>

                            </div>
                        <div className="output" dangerouslySetInnerHTML={{__html: this.props.text}}/>
                    </div>


            </div>)
    }
}
const mapStateToProps=(state)=>{
    console.log(state.marker.output);
    return{change:state.marker.output}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        submitNewText:(value)=>{
            dispatch(updateOutput(value))
        }
    }
}
const visibleModifiedText=connect(mapStateToProps,mapDispatchToProps)(Marker)
export default visibleModifiedText;
