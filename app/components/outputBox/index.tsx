'use client'

import React, { useEffect } from 'react';

const OutputBox = ({ heading, outputValue }) => {

    useEffect(() => {
        if (outputValue) {
            var outputDiv = document.getElementById('output')
            if (outputDiv) {
                outputDiv.innerHTML = ''
                outputDiv.innerHTML += outputValue;
            }
        }
    }, [outputValue])

    return (
        <div className='w-full h-full p-2 border-2'>
            <div className='w-full h-full flex flex-col shadow-sm'>
                <div className='flex bg-slate-300 w-full h-10 text-black text-xl font-bold pl-2 items-center shadow-xl'>
                    {heading}
                </div>
                <div id='output' className='h-full w-full flex-grow text-black bg-white focus:outline-none p-2 text-lg'></div>
                <div className='h-6 w-full flex flex-row bg-slate-200 justify-evenly pl-1 pr-1'>
                    <div className='flex flex-row w-full'>
                        <div className='flex w-full text-black items-center'>
                            <span className='text-xs items-center'>Words: 0</span>
                        </div>
                        <div className='flex w-full text-black items-center'>
                            <span className='text-xs'>Lines: 0</span>
                        </div>
                    </div>
                    <div className='flex flex-row w-full justify-evenly'>
                        <div className='text-center flex items-center text-xs text-black'>
                            Encoding: Raw Bytes
                        </div>
                        <div className='text-center flex items-center text-xs text-black'>
                            EOL Sequence: LF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutputBox;