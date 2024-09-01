'use client'
import CustomEditor from '@/app/components/customEditor';
import BearerOutputEditor from '@/app/components/customEditor/bearerOutputEditor';
import { BEARER_HEADER_CONTENT_DEFAULT, BEARER_PAGE_CONSTANTS, BEARER_PAGE_TOKENIZER_ROOT, BEARER_PAYLOAD_CONTENT_DEFAULT, BEARER_TOKEN_DEFAULT } from '@/app/constants';
import { base64Decode, constructEditorConfiguration } from '@/app/utils/commonUtils';
import React, { useRef, useState } from 'react';
import * as monaco from 'monaco-editor';



const JWTParser = () => {
    const [headerHtml, setHeaderHtml] = useState(BEARER_HEADER_CONTENT_DEFAULT);
    const [payloadHtml, setPayloadHtml] = useState(BEARER_PAYLOAD_CONTENT_DEFAULT);

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const data = {
        active: true,
        mode: '🚃',
        codes: [48348, 28923, 39080],
        city: 'London',
    };
    const handleOnOperateClick = () => {
        if (editorRef?.current && editorRef?.current.getValue()) {
            const inputBearerTokenComponents = editorRef.current.getValue()?.split('.');
            setHeaderHtml(base64Decode(inputBearerTokenComponents[0]));
            setPayloadHtml(base64Decode(inputBearerTokenComponents[1]));
        }
    }

    const bearerInputEditorConfiguration = constructEditorConfiguration('(Enter encoded token)', true, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_LANGUAGE, BEARER_PAGE_TOKENIZER_ROOT, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME_RULES, { wordWrap: 'on' }, BEARER_TOKEN_DEFAULT)
    const bearerOutputEditorConfiguration = constructEditorConfiguration('(Payload details)', false)
    return (
        <div className="w-full h-full flex max-h-screen flex-col p-4">
            <div className="flex w-full justify-center h-20">
                <button className="h-14 w-36 rounded-full border-black border-2" onClick={handleOnOperateClick}>Operate</button>
            </div>
            <div className="h-full w-full flex flex-1 flex-row overflow-hidden gap-2">
                <div className="w-full h-full flex flex-col min-h-0">
                    <CustomEditor heading='Bearer Token' editorConfigurations={bearerInputEditorConfiguration} editorRef={editorRef}></CustomEditor>
                </div>
                <div className="w-full h-full flex flex-col min-h-0">
                    <BearerOutputEditor headerHtml={headerHtml} payloadHtml={payloadHtml}></BearerOutputEditor>
                </div>
            </div>
        </div>

    )
}

export default JWTParser;