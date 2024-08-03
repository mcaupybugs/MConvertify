"use client";

import React from 'react';
import SearchBar from '../searchBar';
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='w-full h-12 bg-zinc-900 drop-shadow-xl'>
            <div className='flex flex-row justify-evenly items-center align-middle h-12'>
                <div className='items-start justify-start'>
                    <Image src="/logo.svg" alt='Logo' width={100} height={100}></Image>
                </div>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default NavBar;