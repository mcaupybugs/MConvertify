"use client";

import React, { useState } from 'react';
import SearchBar from '../searchBar';
import Modal from '../authentication/modal';
import Image from 'next/image'

export enum AuthType {
    Login = 0,
    SignUp = 1,
    Close = 2,
}

const NavBar = () => {
    const [authClicked, setAuthClicked] = useState(false);

    const toggleModal = (authCategory: AuthType) => {
        setAuthClicked(!authClicked);
    }

    return (
        <div className='h-screen w-screen'>
            { !authClicked && 
        <div className='w-full h-12 gradient-radial drop-shadow-xl'>
            <div className='flex flex-row justify-evenly items-center align-middle h-full w-full gap-2'>
                <div className='items-start justify-start w-full m-8'>
                    <Image src="/logo.svg" alt='Logo' width={100} height={100}></Image>
                </div>
                <SearchBar></SearchBar>
                <div className=' flex flex-row gap-2 h-full w-full justify-end mr-4'>
                    <button className='p-2 h-full rounded-md' onClick={() => toggleModal(AuthType.SignUp)}>SignUp</button>
                    <button className='p-2 h-full rounded-md' onClick={()=> toggleModal(AuthType.Login)}>Login</button>
                </div>
            </div>
        </div>
}
        { authClicked &&
        <Modal toggleAuth={toggleModal}></Modal>
}  
        </div>
    )
}

export default NavBar;