import React from 'react';

import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        onChange={handleChange}
        type='search' 
        placeholder={placeholder}
        className='search'>
    </input>
);
