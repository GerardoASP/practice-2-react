import React from 'react';
import './styles-flex.scss'; 

function Flexbox() {
  return (
    <div className="container">
      <div className="menu">
        <div className="navbar-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <img src="../assets/images/UAM-Logo.png" alt="Logo UAM" className="logo" />
        <ul className="navbar-options">
          <li><a href="#">Flexbox</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="./products.html">Products</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.jpg" className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <div className="container1">
          <div className="flex-item1"></div>
        </div>
        <div className="container2">
          <div className="flex-item1"></div>
          <div className="flex-item2"></div>
        </div>
        <div className="container3">
          <div className="flex-item1"></div>
          <div className="flex-item2"></div>
          <div className="flex-item3"></div>
        </div>
        <div className="container4">
          <div className="column1">
            <div className="flex-item1"></div>
          </div>
          <div className="column2">
            <div className="row1">
              <div className="flex-item1"></div>
            </div>
            <div className="row2">
              <div className="flex-item1"></div>
              <div className="flex-item2"></div>
            </div>
            <div className="row3">
              <div className="flex-item1"></div>
              <div className="flex-item2"></div>
              <div className="flex-item3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Flexbox;
