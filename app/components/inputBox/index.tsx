import React from 'react';

const InputBox = ({heading}) => {
    return  (
        <div className='w-full h-full p-2'>
            <div className='w-full h-full flex flex-col'>
                <div className='flex bg-slate-200 w-full h-10 text-black text-xl font-bold pl-2 items-center shadow-xl'>
                    {heading}
                </div>
                <textarea className='h-full w-full flex-grow text-black'></textarea>
                <div className='h-6 w-full flex flex-row bg-slate-200'>
                    <div>
                        Hey bro
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox;