'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';


const InputBox = ({ heading, textCallback = null }) => {

    const [wordCount, setWordCount] = useState(0);
    const [linesCount, setLinesCount] = useState(0);

    const handleTextAreaChange = (newValue) => {
        if (textCallback) {
            textCallback(newValue);
        }
    }

    return (
        <div className='w-full h-full p-2'>
            <div className='w-full h-full flex flex-col shadow-sm min-h-0 border-2'>
                <div className='w-full h-10 flex flex-row bg-slate-300 shadow-xl'>
                    <div className='flex w-full h-full text-black text-xl font-bold pl-2 items-center'>
                        {heading}
                    </div>
                    <div></div>
                </div>
                <div className='flex-1 overflow-auto'>
                    <Editor></Editor>
                </div>
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