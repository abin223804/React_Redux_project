import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment } from '../../../Redux/cart'
import './CartButtons.css'

function AfterCart({cartCount,productID}) {
 
  const dispatch=useDispatch()
  return (
    <div className='after-cart'>
      <button className='cart-countr-button' onClick={()=>{
        dispatch(decrement(productID));
      }}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-countr-button' onClick={()=>{
        dispatch(increment(productID))
      }}>+</button>
    </div>
  )
}

export default AfterCart
