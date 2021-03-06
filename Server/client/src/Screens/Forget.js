import React,{useState} from 'react'

import {To, toast, ToastContainer} from 'react-toastify'
import {authenticate,isAuth} from '../Helpers/auth'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'
import '../Appt.css'

import forgetPng from '../assets/forget.png';




const Forget = () => {
    const [formData, setFormData] = useState({

        name: '',

    });

    const {name } = formData;
    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();

        if ( name) {

                setFormData({ ...formData, textChange: 'Submitting' });
                axios
                    .put(`${process.env.REACT_APP_API_URL}/password/forget`, {
                        name,

                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            name: '',



                        });

                        toast.success("Please check your email");
                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            name: '',

                        });
                        console.log(err.response);
                        toast.error("Smth went wrong , please try again")

                    });

        }
    };
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center '>
            {isAuth() ? <Redirect to='/' /> : null}
            <ToastContainer />

            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1 ' >
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Remember password
                        </h1>

                        <form
                            className='w-full flex-1 mt-8 text-indigo-500'
                            onSubmit={handleSubmit}
                        >


                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type='text'
                                    style={{position:"relative",left:"10.5%",width:"350px",top:"10%"}}
                                    placeholder='Name:'
                                    onChange={handleChange('name')}
                                    value={name}
                                />


                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >
                                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                    <span className='ml-3'>Recover password</span>
                                </button>


                        </form>

                    </div>

                </div>
                <div className='flex-1 bg-indigo-100 text-center  lg:flex '>
                    <div
                        className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${forgetPng})` }}
                    ></div>
                </div>

            </div>
            ;
        </div>
    );
};
export default Forget;
