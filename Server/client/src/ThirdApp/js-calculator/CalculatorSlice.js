import {createSlice} from "@reduxjs/toolkit";

export const calculatorSlice=createSlice({
    name:'calculator',
    initialState:{
        number:0,
        action:'',
    },
    reducers:{
        add: (state) =>{state.action='+';},
        formNum:(state,value)=>{

            state.action+=value.payload;

        },
        subtract: (state)=>{state.action='-';},
        multiply: (state)=>{state.action='*';},
        divide: (state)=>{state.action='/';},
        equal:(state)=>{state.action='='},
        clean: state => {state.action='';},
        actioning: (state,text)=>{state.action=text;}
    }
});
export const{add,subtract,multiply,divide,clean,actioning,equal,formNum}=calculatorSlice.actions;
export const selectNumber=state=>state.storeCalculator.number;
export const selectAction=state=>state.storeCalculator.action;
export default calculatorSlice.reducer;
