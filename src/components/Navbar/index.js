import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { SearchBar } from '../SearchBar';

import { FaUserAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

import './Navbar.css';

const Navbar = () => {
    const { pathname } = useLocation();

    const isHomeLinkActive = () => {
        if((pathname === "/") || (pathname === "/home"))
            return true;
        else
            return false;
    }

    return (
        <div className="Navbar">
            <div className="left">
                <NavLink 
                    to="/home" 
                    activeClassName="active" 
                    isActive={() => isHomeLinkActive()}
                >
                    Home
                </NavLink>

                <NavLink to="/classes" activeClassName="active">Classes</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>

            <SearchBar />

            <div className="right">
                <Link to="/" className="login">
                    <FaUserAlt />
                    Log In
                </Link>
                <Link to="/" className="signup">
                    <IoMdLogIn />
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Navbar;