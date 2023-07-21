import React from 'react';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {NavbarBrand} from 'react-bootstrap';

const Navbar = () => {
    return(
        <div>
            <Nav>
                <NavMenu>
                    <NavbarBrand style={{color:"white",fontSize:"large"}}>Notes Manager</NavbarBrand>
                    <NavLink to="/"activeStyle>Home</NavLink>
                    <NavLink to="/register"activeStyle>Register</NavLink>
                    <NavLink to="/login"activeStyle>Login</NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;