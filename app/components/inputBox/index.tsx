'use client';
import React, { useState } from 'react';

const InputBox = ({ heading, textCallback = null}) => {

    const [wordCount, setWordCount] = useState(0);
    const [linesCount, setLinesCount] = useState(0);

    const handleTextAreaChange = (e) => {
        const text = e.target.value;
        if (textCallback) {
            textCallback(text);
        }
    }

    return (
        <div className='w-full h-full p-2 border-2'>
            <div className='w-full h-full flex flex-col shadow-sm'>
                <div className='flex bg-slate-300 w-full h-10 text-black text-xl font-bold pl-2 items-center shadow-xl'>
                    {heading}
                </div>
                <textarea className='h-full w-full whitespace-pre-wrap flex-grow text-black focus:outline-none p-2 resize-none' onChange={handleTextAreaChange}></textarea>
                <div className='h-6 w-full flex flex-row bg-slate-200 justify-evenly pl-1 pr-1'>
                    <div className='flex flex-row w-full'>
                        <div className='flex w-full text-black items-center'>
                            <span className='text-xs items-center'>Words: {wordCount}</span>
                        </div>
                        <div className='flex w-full text-black items-center'>
                            <span className='text-xs'>Lines: {linesCount}</span>
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

export default InputBox;