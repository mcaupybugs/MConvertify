import React from 'react';
import { AuthType } from '../navbar';

const Modal = ({toggleAuth}) => {
    return(
        <div className='flex bg-white/30 h-screen w-screen justify-center items-center text-black'>
            <div className='flex flex-col h-4/5 w-3/5 bg-white rounded-md'>
                <div className='flex flex-row justify-center items-center'>
                    <span className='w-fit text-3xl items-start p-2 hover:cursor-pointer' onClick={() => toggleAuth(AuthType.Close)}> &#x2716; </span>
                    <p className='w-full h-full text-center flex-grow items-center'>Please login to continue</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;