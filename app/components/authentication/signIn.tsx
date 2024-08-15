import React, {useRef, useState} from 'react';
import GithubSignIn from './githubSignIn';
import GoogleSignIn from './googleSignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {

    const [rememberMe, setRememberMe] = useState(false);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = () =>{
        const emailValue = email?.current?.value;
        const passwordValue = password?.current?.value;
        if (!emailValue || !passwordValue){
            // throw down an error; (Create a upper modal to get)
            return;
        }
        console.log(emailValue)
        // Handle email authentication
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <div className='flex flex-col w-full mt-6'>
            <div className='flex flex-row border-2 h-12 border-black place-items-center ml-8 mr-8'>
            <FontAwesomeIcon className='flex h-full justify-center align-middle ml-2' size='xl' icon={faUser}></FontAwesomeIcon>
            <input ref={email} className='h-10 ml-2 w-full p-2 focus:outline-none' placeholder='Email'/>
            </div>
            <div className='flex flex-row border-2 h-12 border-black place-items-center ml-8 mr-8 m-2'>
            <FontAwesomeIcon className='flex h-full justify-center align-middle ml-2' size='xl' icon={faLock}></FontAwesomeIcon>
            <input className='h-10 ml-2 w-full p-2 focus:outline-none' placeholder='Password' ref={password}></input>
            </div>
            <div className='flex flex-row w-full h-full mt-4'>
                <div className='flex flex-row ml-8 h-full w-full'>
                <input className="h-4 justify-start items-start" type='checkbox' name='remember-me' onClick={handleRememberMe}></input>
                <p className='h-full text-xs ml-2 text-slate-700 font-bold'>Remember Me</p>
                </div>
                <span className='w-full h-full justify-end'><p className='text-xs text-slate-700 font-bold items-end text-end mr-8'>Forgot Password ?</p></span>
            </div>
            <div className='w-full h-full pl-8 pr-8'>
                <button className='w-full h-12 bg-slate-400 text-slate-700 font-bold' onClick={handleSubmit}>Sign In</button>
            </div>
            <hr className='border-2 m-8 border-slate-700 border-solid'></hr>
            <div className='flex flex-row justify-evenly'>
            <GoogleSignIn></GoogleSignIn>
            <GithubSignIn></GithubSignIn>
            </div>
        </div>
    )
}

export default SignIn;