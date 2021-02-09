import {configureStore} from "@reduxjs/toolkit";

import {applyMiddleware} from '@reduxjs/toolkit'
import {createStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import markerReducer from '../FirstApp/features/markerSlice'
import randomizedReducer from '../SecondApp/randomized-quotes/randomizedSlice'
import calculatorReducer from "../ThirdApp/js-calculator/CalculatorSlice";
const store=configureStore({reducer:{marker:markerReducer,randomized:randomizedReducer,storeCalculator:calculatorReducer}});
export default store;
