import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    
  const {img , name , seller ,price,  ratings} = props.product
  return (
    <div className='cart-info'>
          <img className='image' src={img} alt="" />
          <div className='cart-information'>
          <h3 className='p'> {name}</h3>
          <p className='p'> Seller  : {seller}</p>
          <p className='p'> Price   : {price}</p>
          <p className='p'> Ratings : {ratings}</p>
          <button onClick={() => props.handleAddToCart(props.product)}  className='btn-cart'>
           <p> Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            

          </div>
          
    </div>
  );
  
  
  
};

export default Product;