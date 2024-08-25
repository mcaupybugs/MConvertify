import React from 'react';

const JWTParser = () => {
    return (
        <div className="w-full h-full flex max-h-screen flex-col">
            <div className="flex w-full justify-center h-20">
                <button className="h-14 w-36 rounded-full border-black border-2">Operate</button>
            </div>
            <div className="h-full w-full flex flex-1 flex-row overflow-hidden p-8 gap-2">
                <div className="w-full h-full flex flex-col min-h-0">
                    <div className="w-full h-10 flex flex-row bg-slate-300 shadow-xl">
                        <div className="flex flex-row w-full h-10 text-black text-xl font-bold pl-2 items-center justify-center gap-2">
                            <span className='text-nowrap h-full flex items-center'>Bearer Token</span> <span className="flex h-full w-full items-end text-xs pb-2">(Enter the encoded token)</span>
                        </div>
                    </div>
                    <div className="flex flex-1 h-full w-full overflow-hidden">
                        <textarea className="h-full w-full resize-none"></textarea>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col min-h-0">
                    <div className="w-full h-10 flex flex-row bg-slate-300 shadow-xl">
                        <div className="flex w-full h-10 text-black text-xl font-bold pl-2 items-center">
                            Heading
                        </div>
                    </div>
                    <div className="flex flex-1 h-full w-full overflow-hidden">
                        <textarea className="h-full w-full resize-none"></textarea>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JWTParser;