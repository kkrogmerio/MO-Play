import React,{useState,useEffect} from 'react';

import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios';
import {resetInputStyle} from "../styles";
import {authenticate,isAuth} from "../Helpers/auth";
import {Link,Redirect,useHistory} from 'react-router-dom';
import resetPng from "../assets/reset.png";

const Activate=({match})=>{
    const[formData,setFormData]=useState({
        password1:"",
        password2:"",
        token:"",
    });
    const {password1,password2,token} =formData;
    const history=useHistory();
    useEffect(()=>{
        let token=match.params.token;
        if(token){
            setFormData({...formData,token});
        }
    },[]);


    const handleChange=text =>e=>{
        setFormData({...formData,[text]:e.target.value})
    };
    const handleSubmit=e=>{
        e.preventDefault();
        if(password1===password2&&password1&&password2){
            axios
                .put(`${process.env.REACT_APP_API_URL}/password/reset`, {
                    newPassword:password1,
                    resetPasswordLink:token,

                })
                .then(res => {
                    setFormData({
                        ...formData,
                        password1: '',
                        password2: ''

                    });
                    toast.success(res.data.message);
                    setTimeout(() => {
                    history.push("/login");
                    }, 5300);

                })
                .catch(err => {
                    setFormData({
                        ...formData,
                        password1: '',
                        password2: ''

                    });
                    toast.error(`Something went wrong , please try again ,  ${err.response.data.error}`);

                });

        }else{
            toast.error(`Passwords dont matches`);
        }
    };
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        {isAuth() ? <Redirect to="/" /> : null}
        <ToastContainer />
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1 ">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Remember password
              </h1>

              <form
                className="w-full flex-1 mt-8 text-indigo-500"
                onSubmit={handleSubmit}
              >
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  style={resetInputStyle}
                  type="password"
                  placeholder="Password:"
                  onChange={handleChange("password1")}
                  value={password1}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  style={resetInputStyle}
                  type="password"
                  placeholder="Repeat password:"
                  onChange={handleChange("password2")}
                  value={password2}
                />

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">Recover password</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center  lg:flex ">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${resetPng})` }}
            ></div>
          </div>
        </div>
        ;
      </div>
    );
};
export default Activate;
