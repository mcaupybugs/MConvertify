"use client";

import React from 'react';
import SearchBar from '../searchBar';
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='w-full h-12 gradient-radial drop-shadow-xl'>
            <div className='flex flex-row justify-evenly items-center align-middle h-full w-full gap-2'>
                <div className='items-start justify-start w-full m-8'>
                    <Image src="/logo.svg" alt='Logo' width={100} height={100}></Image>
                </div>
                <SearchBar></SearchBar>
                <div className=' flex flex-row gap-2 h-full w-full justify-end mr-4'>
                    <button className='p-2 h-full rounded-md'>SignUp</button>
                    <button className='p-2 h-full rounded-md'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;