import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
  const [products , setProducts] = useState([]);
  const [cart , setCart] = useState([]);
  useEffect( () => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  const handleAddToCart = (product) => {
    console.log(product)
    const newCart = [...cart , product];
    setCart(newCart)
}

  return (
    <div className='container'>
      <div className='shop-contianer' >
        {
            products.map(product => <Product product = 
              {product}
              handleAddToCart = {handleAddToCart}

              
              ></Product>)
        }
</div>

      <div className='cart-container'>
         <Cart cart = {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;