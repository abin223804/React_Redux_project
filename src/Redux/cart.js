import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}



const cartSlice=createSlice({
    name: 'cart',
     initialState:INITIAL_STATE,
     reducer:{
        addToCart:(state)=>{
            state.cartCount=0
        },
        increment:(state)=>{
            state.cartCount+=1;
        },
        decrement:(state)=>{
            state.cartCount-=1;
        },
       
     }
})

export const {icrement,decrement,addToCart}=cartSlice.actions
export default cartSlice.reducer;