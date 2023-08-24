import React, { useState } from 'react'
import products from '../../api/product.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import './ProductList.css'







const ProductList = () => {

  const [count, setCount] = useState(0);

  const addTCart=()=>{
    setCount(1)
  }
  console.log(count);

  return (
  <section className='container'>
{products?.map((product,key)=>(
  <div className='product-container' key={key}>
    <img src={product?.image} alt=''/>
<h3>{product?.title}</h3>

<BeforeCart addTCart={addTCart}/>
<AfterCart/>


  </div>
)

)}
  </section>
  )
}

export default ProductList
