import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p> Example product </p>
            <p className='product_price'>
                <small>$</small>
                <strong>29.99</strong>
            </p>
        </div>

    </div>
  )
}

export default Product