import React from 'react';
import './styles-products.scss'; 

function Products() {
  return (
    <div className="container">
      <div className="menu">
        <div className="navbar-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <img src="../assets/images/UAM-Logo.png" alt="Logo UAM" className="logo" />
        <ul className="navbar-options">
          <li><a href="./flex.html">Flexbox</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="#">Products</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.jpg" className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <h1>Products works</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Products;
