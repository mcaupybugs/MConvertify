"use client";

import React from 'react';
import SearchBar from '../searchBar';

const NavBar = () => {
    return (
        <div className='w-full h-12 bg-gray-600'>
            <div>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default NavBar;