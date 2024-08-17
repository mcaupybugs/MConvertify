'use client'
import React, { useRef, useState } from 'react';
import InputBox from '../../components/inputBox';
import CompareTexts from '@/app/utils/textcomparer';
import OutputBox from '@/app/components/outputBox';

const TextComparer = () => {
    const [inputText, setInputText] = useState('');
    const [secondInputText, setSecondInputText] = useState('')
    const [outputData, setOutputData] = useState();

    const getInputText = (text: string) => {
        console.log(text);
        setInputText(text);
    }

    const getSecondInputText = (text: string) => {
        console.log(text);
        setSecondInputText(text)
    }

    const handleOperate = async (e) => {
        const diffFragment = await CompareTexts(inputText, secondInputText);
        setOutputData(diffFragment);
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full justify-center pt-2 h-20'>
                <button className='h-14 w-36 rounded-full border-black border-2' onClick={(e) => handleOperate(e)}>Operate</button>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <div className='flex flex-col w-full'>
                    <InputBox heading='Input 1' textCallback={getInputText}></InputBox>
                    <InputBox heading='Input 2' textCallback={getSecondInputText} ></InputBox>
                </div>
                <div className='w-full'>
                    <OutputBox heading='Output' outputValue={outputData}></OutputBox>
                </div>
            </div>
        </div>
    )
}

export default TextComparer;