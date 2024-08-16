import React from 'react';
import InputBox from '../../components/inputBox';

const TextComparer = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full justify-center pt-2 h-20'>
                <button className='h-14 w-36 rounded-full border-white border-2'>Operate</button>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <InputBox heading='Input'></InputBox>
                <InputBox heading='Output'></InputBox>
            </div>
        </div>
    )
}

export default TextComparer;