'use client';
import React, { useState, useEffect } from 'react';
import { Editor, useMonaco } from '@monaco-editor/react';
import { Languages } from '@/app/enum/Languages';
import * as monaco from 'monaco-editor';
const WHITESPACE_REGEX: RegExp = /\s+/;
const NEWLINE: string = '\n';

type EditorRef = React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>

export interface EditorConfigurations {
    subHeading?: string;
    isCustomTheme: boolean;
    customTheme: string;
    customLanguage: string;
    tokenizerRoot: [string, string][];
    themeRules: monaco.editor.ITokenThemeRule[];
}

interface CustomEditorProps {
    heading: string;
    editorRef?: EditorRef;
    editorConfigurations?: EditorConfigurations;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ heading, editorRef = null, editorConfigurations = null }) => {

    const [wordCount, setWordCount] = useState(0);
    const [linesCount, setLinesCount] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(Languages.TypeScript.toLocaleLowerCase());
    const [selectedTheme, setSelectedTheme] = useState('vs');
    const monaco = useMonaco();

    useEffect(() => {
        if (monaco && editorConfigurations?.isCustomTheme) {
            monaco.languages.register({ id: editorConfigurations?.customLanguage });

            monaco.languages.setMonarchTokensProvider(editorConfigurations?.customLanguage, {
                tokenizer: {
                    root: editorConfigurations.tokenizerRoot,
                },
            });

            monaco.editor.defineTheme(editorConfigurations?.customTheme, {
                base: 'vs',
                inherit: true,
                rules: editorConfigurations.themeRules,
                colors: {}
            });
            setSelectedLanguage(editorConfigurations?.customLanguage);
            setSelectedTheme(editorConfigurations?.customTheme);
        }
    }, [monaco, editorConfigurations]);


    const handleEditorValueChange = (value: string | undefined) => {
        if (value) {
            const words = value.split(WHITESPACE_REGEX).filter(word => word.length > 0);
            setWordCount(words.length);
            setLinesCount(value.split(NEWLINE).length);
        } else {
            setWordCount(0);
            setLinesCount(0);
        }
    }

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => {
        if (editorRef)
            editorRef.current = editor;
    };

    const handleLanguageChange = (e: any) => {
        setSelectedLanguage(e.target.value.toLocaleLowerCase())
    }

    return (
        <div className='w-full h-full p-2'>
            <div className='w-full h-full flex flex-col shadow-sm min-h-0 border-2'>
                <div className='w-full h-10 flex flex-row bg-slate-300 shadow-xl'>
                    <div className='flex h-full text-black text-xl font-bold pl-2 items-center text-nowrap'>
                        {heading}
                    </div>
                    {editorConfigurations?.subHeading &&
                        <div className='flex text-xs text-nowrap items-end pb-1 pl-1'>
                            {editorConfigurations?.subHeading}
                        </div>
                    }
                    {!editorConfigurations?.isCustomTheme &&
                        <div className='h-full w-full flex flex-row gap-4 text-end pr-1'>
                            <div className='w-full h-full p-2'>
                                <select id="countries" onChange={handleLanguageChange} className="rounded-md h-full bg-slate-300 border-none focus:outline-none">
                                    {Object.values(Languages).map((language, index) => (
                                        <option key={index} value={language}>{language}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    }
                </div>
                <div className='flex-1 overflow-auto'>
                    <Editor
                        language={selectedLanguage}
                        theme={selectedTheme}
                        onMount={handleEditorDidMount} onChange={handleEditorValueChange}></Editor>
                </div>
                <div className='h-6 w-full flex flex-row bg-slate-200 justify-evenly pl-1 pr-1'>
                    <div className='flex flex-row w-full h-full'>
                        <div className='flex w-full h-full text-black items-center'>
                            <span className='text-xs items-center'>Words: {wordCount}</span>
                        </div>
                        <div className='flex w-full h-full text-black items-center'>
                            <span className='text-xs'>Lines: {linesCount}</span>
                        </div>
                    </div>
                    <div className='flex flex-row w-full justify-evenly h-full'>
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

export default CustomEditor;