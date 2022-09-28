import React from 'react';
import logo from '../../logo.png'
const Header = () => {
    return (
        <div className='bg-red-800'>
            <div className="navbar bg-red-800 container mx-auto">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 text-white">
      <li><a>Cart</a></li>
      <li><a>Products</a></li>
      <li><a>Product Inventory</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;