'use client'
import { BEARER_OUTPUT_BLUE_COLOR, BEARER_OUTPUT_RED_COLOR, BEARER_OUTPUT_VOILET_COLOR } from '@/app/constants';
import { HashingAlgorithm } from '@/app/enum/OperationEnum';
import React, { useRef, useState } from 'react';
import JsonFormatter from 'react-json-formatter'

interface BearerOutputEditorPayload {
    headerHtml: string;
    payloadHtml: string;
    signatureEncoded: string;
}

const BearerOutputEditor: React.FC<BearerOutputEditorPayload> = ({ headerHtml, payloadHtml, signatureEncoded }) => {
    const [hashingAlgorithm, setHashingAlgorithm] = useState(HashingAlgorithm.HMACSHA256);
    const handleAlgorithmChange = (e: any) => {
        setHashingAlgorithm(e.target.value.toLocaleLowerCase())
    }

    const verifyToken = () => {
        return false;
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
                <select id="countries" onChange={handleAlgorithmChange} className="rounded-md h-full bg-slate-300 border-none focus:outline-none">
                    {Object.values(HashingAlgorithm).map((algorithm, index) => (
                        <option key={index} value={algorithm}>{algorithm}</option>
                    ))}
                </select>
            </div>
            <div className='h-full w-full bg-white flex flex-col flex-1 overflow-auto border border-black-2 rounded-md'>
                <DecodedTokenSections title="HEADER: " subtitle="ALGORITHM & TOKEN TYPE" textColor={BEARER_OUTPUT_RED_COLOR} body={headerHtml}></DecodedTokenSections>
                <DecodedTokenSections title="PAYLOAD: " subtitle="DATA" textColor={BEARER_OUTPUT_VOILET_COLOR} body={payloadHtml}></DecodedTokenSections>
                <DecodedTokenSections title="VERIFY SIGNATURE" textColor={BEARER_OUTPUT_BLUE_COLOR} signatureAlgorithm={hashingAlgorithm}></DecodedTokenSections>
            </div>
            <div className='h-6 w-full flex flex-row bg-slate-200 justify-evenly pl-1 pr-1'>
                {verifyToken() ? (
                    <div className='bg-blue-600'>
                        Hey there
                    </div>
                ) : (
                    <div className='h-full w-full bg-red-600'>Come on</div>
                )}
            </div>
        </div>
    )
}

interface DecodedTokenPayload {
    title: string,
    subtitle?: string,
    textColor: string,
    body?: string,
    signatureAlgorithm?: string;
}

const DecodedTokenSections: React.FC<DecodedTokenPayload> = ({ title, subtitle, textColor, body, signatureAlgorithm = null }) => {

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
                {signatureAlgorithm ? (
                    <div style={{ color: textColor }}>
                        {signatureAlgorithm}(
                        base64UrlEncode(header) + "." +
                        base64UrlEncode(payload),
                        <input className='border border-slate-200 outline-none pl-1'></input>
                        )
                    </div>
                ) : (
                    <JsonFormatter json={body} tabWith={4} jsonStyle={jsonStyle} />
                )}
            </div>
        </div>
    )
}

export default BearerOutputEditor;