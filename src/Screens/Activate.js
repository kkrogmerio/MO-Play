import React,{useState,useEffect} from 'react';
import authPng from '../assets/welcome.png';
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios';
import jwt from 'jsonwebtoken'
import {authenticate,isAuth} from "../Helpers/auth";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Activate=({match})=>{
    const[formData,setFormData]=useState({
        name:"",
        token:"",
        show:true
    });
     const history = useHistory();
    useEffect(()=>{
        let token=match.params.token;
        console.log(token);
        let name=jwt.decode(token).name;
        console.log(name);
        if(token){
            setFormData({...formData,name,show,token});
        }
    },[]);
    const {name,show,token}=formData;

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(token);
        axios.post(`${process.env.REACT_APP_API_URL}/activation`,{
            token
        }).then(res=>{
        
            setFormData({...formData,show:false});
            toast.success(res.data.message);
            setTimeout(() => {history.push("/login");},5300)
        }).catch(err=>{
            toast.error(err.response.data.errors);
        });
    };
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        {isAuth() ? <Redirect to="/" /> : null}
        <ToastContainer />
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-24 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Welcome,</h1>
              <h1 className="text-2xl xl:text-3xl font-extrabold"> {name}</h1>
              <form
                className="w-full flex-1 mt-8 text-indigo-500"
                onSubmit={handleSubmit}
              >
                <div className="mx-auto max-w-xs relative ">
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                    <span className="ml-3">Activate your Account</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex"></div>
        </div>
        ;
      </div>
    );
};
export default Activate;
