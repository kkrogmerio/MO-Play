import React from 'react';


import { createSlice } from '@reduxjs/toolkit';

export const markerSlice=createSlice({
    name:'marker',
    initialState:{
        output:"",
    },
    reducers:{
        updateOutput:(state,action) => {

            state.output=action.payload;
            console.log(state.output);
        },
    },

});
export const{updateOutput}=markerSlice.actions;
export default markerSlice.reducer;


