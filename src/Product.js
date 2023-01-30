import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p> Funko POP! NFL: Lamar Jackson </p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product_rating'>
                    <p> ⭐️ </p>
                    <p> ⭐️ </p>
                    <p> ⭐️</p>
                    <p> ⭐️</p>
                </div>
                <img src='https://m.media-amazon.com/images/I/61l80KEogWL.__AC_SX300_SY300_QL70_FMwebp_.jpg' />
            </div>
        </div>
    )
}

export default Product