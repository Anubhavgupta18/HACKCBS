import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
        <NavLink to='/'>
          <h1>MEDWEB</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          {/* <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};

export default Navbar;
