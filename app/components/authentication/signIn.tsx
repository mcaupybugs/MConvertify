import React from 'react';

const SignIn = () => {
    return (
        <div className='flex flex-col w-full mt-6'>
            <input className='h-12 m-2 ml-8 mr-8 p-2 border-2 border-black' placeholder='Username'></input>
            <input className='h-12 m-2 p-2 ml-8 mr-8 border-2 border-black' placeholder='Password'></input>
            <div className='flex flex-row w-full h-full mt-4'>
                <div className='flex flex-row ml-8 h-full w-full'>
                <input className="h-4 justify-start items-start" type='checkbox' name='remember-me'></input>
                <p className='h-full text-xs ml-2 text-slate-700 font-bold'>Remember Me</p>
                </div>
                <span className='w-full h-full justify-end'><p className='text-xs text-slate-700 font-bold items-end text-end mr-8'>Forgot Password ?</p></span>
            </div>
            <div className='w-full h-full pl-8 pr-8'>
                <button className='w-full h-12 bg-slate-400 text-slate-700 font-bold'>Sign In</button>
            </div>
            <hr className='border-2 m-8 border-slate-700 border-solid'></hr>
        </div>
    )
}

export default SignIn;