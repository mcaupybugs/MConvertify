'use client;'
import CustomEditor from '@/app/components/customEditor';
import BearerOutputEditor from '@/app/components/customEditor/bearerOutputEditor';
import { BEARER_PAGE_CONSTANTS, BEARER_PAGE_TOKENIZER_ROOT } from '@/app/constants';
import { constructEditorConfiguration } from '@/app/utils/commonUtils';
import React from 'react';

const JWTParser = () => {
    const bearerInputEditorConfiguration = constructEditorConfiguration('(Enter encoded token)', true, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_LANGUAGE, BEARER_PAGE_TOKENIZER_ROOT, BEARER_PAGE_CONSTANTS.BEARER_TOKEN_THEME_RULES)
    const bearerOutputEditorConfiguration = constructEditorConfiguration('(Payload details)', false)
    return (
        <div className="w-full h-full flex max-h-screen flex-col p-4">
            <div className="flex w-full justify-center h-20">
                <button className="h-14 w-36 rounded-full border-black border-2">Operate</button>
            </div>
            <div className="h-full w-full flex flex-1 flex-row overflow-hidden gap-2">
                <div className="w-full h-full flex flex-col min-h-0">
                    <CustomEditor heading='Bearer Token' editorConfigurations={bearerInputEditorConfiguration}></CustomEditor>
                </div>
                <div className="w-full h-full flex flex-col min-h-0">
                    <BearerOutputEditor></BearerOutputEditor>
                </div>
            </div>
        </div>

    )
}

export default JWTParser;