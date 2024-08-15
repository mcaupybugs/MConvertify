"use client";

import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignIn() {
  return (
    <div className="h-12 w-full pl-8 pr-8">
      <button className="h-12 w-full bg-red-800 rounded-md text-white" onClick={() => signIn('google')}>
        <div className="flex h-full w-full justify-center items-center">
        <FontAwesomeIcon size="2x" className="h-fit w-full m-2 justify-center items-center" icon={faGoogle}></FontAwesomeIcon>
        <span className="h-full w-full flex items-center justify-center p-2">Google</span>
        </div>
        </button>
    </div>
  );
}
