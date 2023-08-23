import React from 'react'
import products from '../../api/product.json'

const ProductList = () => {
  return (
  <section className='container'>
{products?.map((product,key)=>(
  <div className='main-container' key={key}>
    <img src={product?.image} alt=''/>
<h3>{product?.title}</h3>

  </div>
)

)}
  </section>
  )
}

export default ProductList
