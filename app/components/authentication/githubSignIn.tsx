"use client"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signIn } from "next-auth/react"

export default function GithubSignIn () {
    return (
        <div className="h-12 w-full pl-8 pr-8">
        <button className="h-12 w-full bg-black rounded-md text-white" onClick={() => signIn('github')}>
          <div className="flex h-full w-full justify-center items-center">
            <FontAwesomeIcon size="2x" className="h-fit w-full m-2 justify-center items-center" icon={faGithub}></FontAwesomeIcon>
            <span className="h-full w-full flex items-center justify-center p-2">Github</span>
          </div>
        </button>
      </div>
    )
}