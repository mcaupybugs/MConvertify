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
            <div className='h-full w-full bg-white flex flex-col flex-1 overflow-auto border border-black-2 rounded-md'>
                <DecodedTokenSections title="Header: " subtitle="ALGORITHM & TOKEN TYPE"></DecodedTokenSections>
                <DecodedTokenSections title="Header: " subtitle="ALGORITHM & TOKEN TYPE"></DecodedTokenSections>
                <DecodedTokenSections title="Header: " subtitle="ALGORITHM & TOKEN TYPE"></DecodedTokenSections>
            </div>
        </div>
    )
}

interface DecodedTokenPayload {
    title: string,
    subtitle: string,
}

const DecodedTokenSections: React.FC<DecodedTokenPayload> = ({ title, subtitle }) => {
    return (
        <div className='h-full w-full flex flex-col overflow-none'>
            <div className='h-8 w-full flex border border-black-2 flex-row pl-2'>
                <div className='flex'>
                    {title}
                </div>
                <div className='flex'>
                    {subtitle}
                </div>
            </div>
            <div className='h-full flex-1 w-full'>
                content
            </div>
        </div>
    )
}

export default BearerOutputEditor;