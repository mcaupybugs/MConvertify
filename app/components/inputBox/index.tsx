'use client';
import React, { useState, useRef, MemoExoticComponent } from 'react';
import { Editor } from '@monaco-editor/react';
import { Languages } from '@/app/enum/Languages';
import * as monaco from 'monaco-editor';

type TextCallback = (text: string) => void;

interface InputBoxProps {
    heading: string;
    textCallback: TextCallback
}

const InputBox: React.FC<InputBoxProps> = ({ heading, textCallback = null }) => {

    const [wordCount, setWordCount] = useState(0);
    const [linesCount, setLinesCount] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(Languages.TypeScript.toLocaleLowerCase());
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const handleButtonPress = () => {
        if (editorRef.current) {
            editorRef.current.getAction('editor.action.formatDocument')?.run();
        }
    }

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => {
        editorRef.current = editor;
    };

    const handleLanguageChange = (e: any) => {
        setSelectedLanguage(e.target.value.toLocaleLowerCase())
    }

    return (
        <div className='w-full h-full p-2'>
            <div className='w-full h-full flex flex-col shadow-sm min-h-0 border-2'>
                <div className='w-full h-10 flex flex-row bg-slate-300 shadow-xl'>
                    <div className='flex w-full h-full text-black text-xl font-bold pl-2 items-center'>
                        {heading}
                    </div>
                    <div className='h-full w-full flex flex-row gap-4'>
                        <div className='w-full h-full p-2'> {/* add the language */}
                            <select id="countries" onChange={handleLanguageChange} className="rounded-md h-full bg-slate-300 border-none focus:outline-none">
                                {Object.values(Languages).map((language, index) => (
                                    <option key={index} value={language}>{language}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex-1 overflow-auto'>
                    <Editor language={selectedLanguage} onMount={handleEditorDidMount}></Editor>
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
        </div >
    )
}

export default InputBox;