import React from 'react';

const BearerOutputEditor = () => {
    return (
        <div className='h-full w-full flex flex-col p-2'>
            <div className='w-full h-10 flex flex-row bg-slate-300 shadow-xl'>
                <div className='flex h-full text-black text-xl font-bold pl-2 items-center text-nowrap'>
                    Decoded Token
                </div>
                <div className='flex text-xs text-nowrap items-end pb-1 pl-1'>
                    (Payload and Secret)
                </div>
            </div>
            <div className='flex-1 overflow-auto bg-white'>
                <DecodedTokenSections></DecodedTokenSections>
            </div>
        </div>
    )
}

const DecodedTokenSections = () => {
    return (
        <div>
            Section
        </div>
    )
}

export default BearerOutputEditor;