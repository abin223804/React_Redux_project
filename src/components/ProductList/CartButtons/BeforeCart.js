import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Redux/cart'
import './CartButtons.css'

const BeforeCart=()=> {
  const dispatch=useDispatch()
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={()=>dispatch(addToCart)}>Add to cart</button>
    </div>
  )
}

export default memo(BeforeCart)
