'use client'
import React, {useState} from 'react';
import InputBox from '../../components/inputBox';

const TextComparer = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const getInputText = (text: string) => {
        console.log(text);
        setInputText(text);
    }

    const getOutputText = (text: string) => {
        console.log(text);
        setOutputText(text)
    }

    const handleOperate = () => {
        
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full justify-center pt-2 h-20'>
                <button className='h-14 w-36 rounded-full border-black border-2' onClick={(e) => handleOperate(e)}>Operate</button>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <InputBox heading='Input' textCallback={getInputText}></InputBox>
                <InputBox heading='Output' textCallback={getOutputText} ></InputBox>
            </div>
        </div>
    )
}

export default TextComparer;