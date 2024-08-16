import Link from "next/link";
import React from "react";

const SideBar = () =>{
    return (
        <div className="w-full h-full basis-2/12 pt-2 pb-2">
        <div className="w-full h-full flex flex-col rounded-md shadow-2xl border-2 border-white text-center p-2">
            <div className="w-full font-bold text-center underline">
                Operations
            </div>
            <Link href='/textcomparer'>Text Comparer</Link>
        </div>
        </div>
    )
}

export default SideBar;