import React from 'react';
import { AuthType } from '../navbar';
import SignIn from './signIn';
import SignUp from './signUp';

const Modal = ({toggleAuth}) => {
    return(
        <div className='flex bg-white/30 h-screen w-screen justify-center items-center text-black'>
            <div className='flex flex-col h-4/5 w-2/5 bg-white rounded-md'>
                <div className='flex flex-row justify-center items-center bg-slate-300'>
                    <span className='w-fit text-3xl items-start p-2 hover:cursor-pointer' onClick={() => toggleAuth(AuthType.Close)}> &#x2716; </span>
                    <div className='flex-grow flex justify-center items-center h-full'>
                        <p className='text-center'>Please login to continue</p>
                    </div>                
                </div>
                <div className='flex flex-row justify-evenly w-full h-16 mt-2'>
                    <button className='border-2 border-solid w-full ml-4 text-slate-700 font-bold text-xl'>Sign In</button>
                    <button className='border-2 border-solid w-full mr-4 text-slate-700 font-bold text-xl'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;