import Link from "next/link";
import React from "react";

const SideBar = () =>{
    return (
        <div className="w-full h-full basis-2/12 pt-2 pb-2">
        <div className="w-full h-full flex flex-col rounded-md border-2 border-slate-300 text-center gap-2">
            <div className="w-full font-bold text-center text-lg bg-slate-300 rounded-sm">
                Operations
            </div>
            <Link href='/operations/textcomparer' className="w-full text-center border-b-2 border-black">Text Comparer</Link>
            <Link href='/operations/textbeautifier' className="w-full text-center border-b-2 border-black">Text Beautifier</Link>
        </div>
        </div>
    )
}

export default SideBar;