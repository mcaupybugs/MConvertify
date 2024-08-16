import React, { useEffect, useRef, useState } from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import { AuthType } from '@/app/enum/AuthEnum';

const Modal = ({ toggleAuth, authCategory }) => {

    const signInButton = useRef(null);
    const signUpButton = useRef(null);
    const [modeActive, setModeActive] = useState(authCategory);

    const makeActive = (authSelected: AuthType) => {
        const inactiveClasses = "border-2 border-solid w-full ml-2 mr-2 text-slate-200 font-bold text-xl bg-slate-400"
        const activeClasses = "border-2 border-solid w-full ml-2 mr-2 text-slate-700 font-bold text-xl border-t-4 border-slate-800"
        var signInElement = signInButton.current;
        var signUpElement = signUpButton.current;
        if (!signInElement || !signUpElement) {
            return;
        }
        if (authSelected === AuthType.Login) {
            signInElement.className = activeClasses;
            signUpElement.className = inactiveClasses;
        } else {
            signInElement.className = inactiveClasses;
            signUpElement.className = activeClasses;
        }
        setModeActive(authSelected);
    }

    useEffect(() => {
        makeActive(authCategory);
    }, [authCategory])

    return (
        <div className='flex bg-white/90 h-screen w-screen justify-center items-center text-black'>
            <div className='flex flex-col h-3/5 w-2/5 bg-white rounded-md border-2 border-black'>
                <div className='flex flex-row justify-center items-center bg-slate-400'>
                    <span className='w-fit text-3xl items-start p-2 hover:cursor-pointer' onClick={() => toggleAuth(AuthType.Close)}> &#x2716; </span>
                    <div className='flex-grow flex justify-center items-center h-full'>
                        <p className='text-center text-slate-700 font-bold'>Please login to continue</p>
                    </div>
                </div>
                <div className='flex flex-row justify-evenly w-full h-16 mt-2'>
                    <button className='border-2 border-solid w-full ml-4 text-slate-700 font-bold text-xl' ref={signInButton} onClick={() => makeActive(AuthType.Login)}>Sign In</button>
                    <button className='border-2 border-solid w-full mr-4 text-slate-700 font-bold text-xl' ref={signUpButton} onClick={() => makeActive(AuthType.SignUp)}>Sign Up</button>
                </div>
                <div className='flex flex-row'>
                    {modeActive === AuthType.Login && <SignIn></SignIn>}
                    {modeActive === AuthType.SignUp && <SignUp></SignUp>}
                </div>
            </div>
        </div>
    )
}

export default Modal;