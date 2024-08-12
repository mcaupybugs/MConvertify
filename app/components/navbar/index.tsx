"use client";

import React, { useState } from 'react';
import SearchBar from '../searchBar';
import Modal from '../authentication/modal';
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react';

export enum AuthType {
    Login = 0,
    SignUp = 1,
    Close = 2,
}

const NavBar = () => {
    const [authClicked, setAuthClicked] = useState(AuthType.Close);
    const toggleModal = (authCategory: AuthType) => {
        setAuthClicked(authCategory);
    }

    const session = useSession();
    console.log(session)
    return (
        <div className='h-screen w-screen'>
            { authClicked == AuthType.Close && 
        <div className='w-full h-12 gradient-radial drop-shadow-xl'>
            <div className='flex flex-row justify-evenly items-center align-middle h-full w-full gap-2'>
                <div className='items-start justify-start w-full m-8'>
                    <Image src="/logo.svg" alt='Logo' width={100} height={100}></Image>
                </div>
                <SearchBar></SearchBar>
                <div className=' flex flex-row gap-2 h-full w-full justify-end mr-4'>
                    { session.status !== "authenticated" &&
                    <div>
                        <button className='p-2 h-full rounded-md' onClick={() => toggleModal(AuthType.SignUp)}>Sign Up</button>
                        <button className='p-2 h-full rounded-md' onClick={()=> toggleModal(AuthType.Login)}>Login</button>
                    </div>
}
{
                    session.status === "authenticated" &&
                    <button className='p-2 h-full rounded-md' onClick={() => signOut()}>Sign Out</button>
                }
                </div>
            </div>
        </div>
}
        { authClicked!=AuthType.Close &&
        <Modal toggleAuth={toggleModal} authCategory={authClicked}></Modal>
}  
        </div>
    )
}

export default NavBar;