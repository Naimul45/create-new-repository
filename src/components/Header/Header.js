import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='navigation-var'>
         <img src={logo} alt="" />
      <div className='anchor'>
         <a href="">Home</a>
         <a href="">Shop</a>
         <a href="">Inventory</a>
         <a href="">About</a>
      </div>

    </nav>
  );
};

export default Header;