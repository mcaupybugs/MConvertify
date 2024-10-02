'use client'
import React from 'react';
import { DiffEditor } from '@monaco-editor/react';

const TextComparer = () => {
    return (
        <div className='flex flex-col w-full h-full p-2'>
            <div className='flex flex-row gap-2 h-10'>
                <div className='h-full w-full bg-slate-300 h-10 text-black text-xl flex flex-row justify evenly font-bold items-center shadow-xl pl-2'>
                    <div className='w-full'>
                        Input 1
                    </div>
                    <div className='w-full'>
                        Input 2
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <DiffEditor options={{ originalEditable: true }}></DiffEditor>
            </div>
        </div>
    )
}

export default TextComparer;