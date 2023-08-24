import React from 'react'
import './CartButtons.css'
function BeforeCart({addTCart}) {
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={addTCart}>Add to cart</button>
    </div>
  )
}

export default BeforeCart
