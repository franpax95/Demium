import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { SearchBar } from '../SearchBar';

import { IoMdLogOut } from "react-icons/io";
import { AiOutlineLineChart } from 'react-icons/ai';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="left">
                <NavLink to="/" className="logo">
                    <img src="/img/boostedlogo.png" alt="boosted" />
                </NavLink>
                <NavLink to="/progress">
                    <AiOutlineLineChart size="32px" />
                    Your progress
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