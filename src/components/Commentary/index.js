import React from 'react';

import './Commentary.css';

import { BsHeartFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const STU_AVATAR = '/img/student_avatar.png';
const PROF_AVATAR = '/img/professor_avatar.png';



const Commentary = ({ name, date, role, message, likes }) => (
    <div className="Commentary">
        <div className="header">
            <img src={(role === 'student') ? STU_AVATAR : PROF_AVATAR} alt={name} />
            <span className="name">{name}</span>
            <span className="date">{date}</span>
        </div>

        <hr />

        <div className="message">
            {message}
        </div>

        <hr />

        <div className="icons">
            <IoIosShareAlt />
            <span><BsHeartFill style={{ color: 'red' }}/> {likes}</span>
            <FaShareAlt />
        </div>
    </div>
);

export default Commentary;