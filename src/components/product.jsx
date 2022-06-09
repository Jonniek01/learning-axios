import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
        <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <p>Category: {product.category}</p>
        <small>Rate: {`${product.rating.rate}/5`}</small>
        <small className='price'>${product.price}</small>
        <button>Add to cart</button>
    </div>
  )
}

export default Product