'use client'
import CustomEditor from '@/app/components/customEditor';
import BearerOutputEditor from '@/app/components/customEditor/bearerOutputEditor';
import { BEARER_ALGO_DEFAULT, BEARER_HEADER_CONTENT_DEFAULT, BEARER_PAGE_CONSTANTS, BEARER_PAGE_TOKENIZER_ROOT, BEARER_PAYLOAD_CONTENT_DEFAULT, BEARER_TOKEN_DEFAULT } from '@/app/constants';
import { base64Decode, constructEditorConfiguration, isValidJson } from '@/app/utils/commonUtils';
import React, { useRef, useState } from 'react';
import * as monaco from 'monaco-editor';

interface HeaderPayload{
    alg:string
}

const JWTParser = () => {
    
    const [headerHtml, setHeaderHtml] = useState(BEARER_HEADER_CONTENT_DEFAULT);
    const [payloadHtml, setPayloadHtml] = useState(BEARER_PAYLOAD_CONTENT_DEFAULT);
    const [bearerAlgorithm, setBearerAlgorithm] = useState(BEARER_ALGO_DEFAULT);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const handleOnOperateClick = () => {
        if (editorRef?.current && editorRef?.current.getValue()) {
            const inputBearerTokenComponents = editorRef.current.getValue()?.split('.');
            var decodedHeader = base64Decode(inputBearerTokenComponents[0]);
            if(isValidJson(decodedHeader)){
                let headerAlgo:HeaderPayload = JSON.parse(decodedHeader)
                setBearerAlgorithm(headerAlgo.alg)
            }
            signatureValidation()
            setHeaderHtml(base64Decode(inputBearerTokenComponents[0]));
            setPayloadHtml(base64Decode(inputBearerTokenComponents[1]));
        }
    }

    const signatureValidation = () => {

    }


    const bearerInputEditorConfiguration = constructEditorConfiguration('(Enter encoded token)', true, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_LANGUAGE, BEARER_PAGE_TOKENIZER_ROOT, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME_RULES, { wordWrap: 'on' }, BEARER_TOKEN_DEFAULT)
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
                    {/* Remove the bearerAlgorithm from the signature encoded and add this method  */}
                    <BearerOutputEditor headerHtml={headerHtml} payloadHtml={payloadHtml} signatureEncoded={bearerAlgorithm}></BearerOutputEditor>
                </div>
            </div>
        </div>

    )
}

export default JWTParser;