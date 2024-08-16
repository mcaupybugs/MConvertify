import React from 'react';
import InputBox from '../../components/inputBox';

const TextComparer = () => {
    return (
        <div className='flex flex-row w-full h-full justify-evenly'>
            <InputBox heading='Input'></InputBox>
            <InputBox heading='Output'></InputBox>
        </div>
    )
}

export default TextComparer;