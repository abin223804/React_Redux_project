import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, icrement } from '../../../Redux/cart'
import './CartButtons.css'

function AfterCart() {
  const { cartCount } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  return (
    <div className='after-cart'>
      <button className='cart-countr-button' onClick={()=>{
        dispatch(decrement());
      }}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-countr-button' onClick={()=>{
        dispatch(icrement())
      }}>+</button>
    </div>
  )
}

export default AfterCart
