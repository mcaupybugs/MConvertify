'use client'
import { BEARER_HEADER_CONTENT_DEFAULT, BEARER_OUTPUT_BLUE_COLOR, BEARER_OUTPUT_RED_COLOR, BEARER_OUTPUT_VOILET_COLOR, BEARER_PAYLOAD_CONTENT_DEFAULT } from '@/app/constants';
import React, { useRef, useState } from 'react';
import JsonFormatter from 'react-json-formatter'

interface BearerOutputEditorPayload {
    headerHtml: string;
    payloadHtml: string;
}

const BearerOutputEditor: React.FC<BearerOutputEditorPayload> = ({ headerHtml, payloadHtml }) => {
    const [headerContent, setHeaderContent] = useState(JSON.stringify(BEARER_HEADER_CONTENT_DEFAULT));
    const [payloadContent, setPayloadContent] = useState(JSON.stringify(BEARER_PAYLOAD_CONTENT_DEFAULT));
    const [signatureContent, setSignatureContent] = useState("dummy");

    const splitBearer = () => {
        if (headerHtml) {

        }
    }
    return (
        <div className='h-full w-full flex flex-col p-2'>
            <div className='w-full h-10 flex flex-row bg-slate-300 shadow-xl'>
                <div className='flex h-full text-black text-xl font-bold pl-2 items-center text-nowrap'>
                    Decoded Token
                </div>
                <div className='flex text-xs text-nowrap items-end pb-1 pl-1'>
                    (Payload and Secret)
                </div>
            </div>
            <div className='h-full w-full bg-white flex flex-col flex-1 overflow-auto border border-black-2 rounded-md'>
                <DecodedTokenSections title="HEADER: " subtitle="ALGORITHM & TOKEN TYPE" textColor={BEARER_OUTPUT_RED_COLOR} body={headerHtml}></DecodedTokenSections>
                <DecodedTokenSections title="PAYLOAD: " subtitle="DATA" textColor={BEARER_OUTPUT_VOILET_COLOR} body={payloadHtml}></DecodedTokenSections>
                <DecodedTokenSections title="VERIFY SIGNATURE" textColor={BEARER_OUTPUT_BLUE_COLOR} body={signatureContent}></DecodedTokenSections>
            </div>
        </div>
    )
}

interface DecodedTokenPayload {
    title: string,
    subtitle?: string,
    textColor: string,
    body: string,
}

const DecodedTokenSections: React.FC<DecodedTokenPayload> = ({ title, subtitle, textColor, body }) => {

    const jsonStyle = {
        style: { color: textColor }
    }

    return (
        <div className='h-full w-full flex flex-col overflow-none text-xs items-center'>
            <div className='h-6 w-full flex border border-black-2 flex-row pl-2'>
                <div className='flex items-center'>
                    {title}
                </div>
                <div className='flex pl-2 text-slate-400 items-center'>
                    {subtitle}
                </div>
            </div>
            <div style={{ fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace' }} className='h-full flex-1 w-full p-2'>
                <JsonFormatter json={body} tabWith={4} jsonStyle={jsonStyle} />
            </div>
        </div>
    )
}

export default BearerOutputEditor;