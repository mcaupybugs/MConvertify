'use client';
import CustomEditor from "@/app/components/customEditor";
import React, { useRef } from "react";
import * as monaco from 'monaco-editor';

const TextBeautifier = () => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);


    const handleButtonPress = () => {
        if (editorRef?.current) {
            editorRef.current.getAction('editor.action.formatDocument')?.run();
        }
    }

    return (
        <div className='flex flex-col w-full h-full max-h-screen'>
            <div className='flex w-full justify-center pt-2 pb-2 h-20'>
                <button className='h-14 w-36 rounded-full border-black border-2' onClick={handleButtonPress}>Operate</button>
            </div>
            <div className='flex flex-1 flex-row w-full h-full justify-evenly'>
                <CustomEditor heading='Input' editorRef={editorRef}></CustomEditor>
            </div>
        </div>
    )
}

export default TextBeautifier;