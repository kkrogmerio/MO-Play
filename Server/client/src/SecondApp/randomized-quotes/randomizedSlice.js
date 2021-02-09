import {createSlice} from '@reduxjs/toolkit'
var quote = [["Be yourself; everyone else is already taken.","Confucius"], ["So many books, so little time.","Hypocrate"], ["You only live once, but if you do it right, once is enough.","Charlie Chaplin"]]

export const randomizedSlice=createSlice({
    name:'randomized',
    initialState:{
        quote:quote[Math.floor(Math.random() * (quote.length))],
        class:Math.floor(Math.random() * (3))+1,

    },
    reducers:{
        change: state=>{
            state.quote= quote[Math.floor(Math.random() * (quote.length))];
            state.class= Math.floor(Math.random() * (3))+1;
        }
    }
});
export const{change}=randomizedSlice.actions;
export const selectQuote=state=>state.randomized.quote;
export const selectClass=state=>state.randomized.class;
export default randomizedSlice.reducer;
