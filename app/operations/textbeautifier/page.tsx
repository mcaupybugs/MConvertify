'use client';
import InputBox from "@/app/components/inputBox";
import OutputBox from "@/app/components/outputBox";
import React, { useState } from "react";

const TextBeautifier = () => {
    const [inputText, setInputText] = useState('');
    const [outputData, setOutputData] = useState('');
    const getInputText = (text) => {
        setInputText(text);
    }

    const handleOperate = (e) => {

    }

    return (
        <div className='flex flex-col w-full h-full max-h-screen'>
            <div className='flex w-full justify-center pt-2 pb-2 h-20'>
                <button className='h-14 w-36 rounded-full border-black border-2' onClick={(e) => handleOperate(e)}>Operate</button>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <InputBox heading='Input' textCallback={getInputText}></InputBox>
                <OutputBox heading='Output' textCallback={getInputText}></OutputBox>
            </div>
        </div>
    )
}

export default TextBeautifier;