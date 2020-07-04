import React from 'react';
import { MdSearch } from "react-icons/md";
import './SearchBar.css';

export const SearchBar = () => (
    <div className="SearchBar">
        <MdSearch size="2em" />
        <input type="text" placeholder="Search for a class..."></input>
    </div>
);