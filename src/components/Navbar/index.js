import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { SearchBar } from '../SearchBar';

import { FaUserAlt } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="left">
                <NavLink to="/" className="logo">
                    <img src="/img/boostedlogo.png" alt="boosted" />
                </NavLink>
            </div>

            <SearchBar />

            <div className="right">
                <Link to="/" className="login">
                    <img src="/img/student_avatar.png" alt="José" />
                    José Antonio Illescas
                </Link>
                <Link to="/" className="signup">
                    <IoMdLogOut />
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Navbar;