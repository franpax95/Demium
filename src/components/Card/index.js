import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export const SectionCard = ({ name, src }) => (
    <Link className="SectionCard">
        <div className="wrapper">
            <img src={src} alt={name} />
        </div>
        <h3>{name}</h3>
    </Link>
);

export const ClassCard = ({ name, src, to = '/' }) => (
    <Link to={to} className="ClassCard">
        <img src={src} alt={name} />
    </Link>
);