import React, { useState, Component } from 'react';
import './stylesMenu.scss'; 
import Logo from '../../assets/images/UAM-Logo.png'
import Avatar from '../../assets/images/avatar.jpeg';
import 'font-awesome/css/font-awesome.min.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleToggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div className="menu">
        <div className="navbar-toggle" onClick={this.handleToggleMenu}>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <img src={Logo} alt="Logo UAM" className="logo" />
        <ul className={`navbar-options ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Flexbox</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Contact</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > Products</Link>
          </li>
        </ul>
        <div className="avatar-container">
          <img src={Avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
    );
  }
}

export default Navbar;
