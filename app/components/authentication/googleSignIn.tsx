"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="h-12 w-full pl-8 pr-8">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const response = signIn("google", {redirectTo: "/error"});
        console.log(response);
      }}
    >
      {/* create button UI */}
      <button type="submit" className="h-12 w-full bg-red-500 text-white">Sign in with Google</button>
    </form>
    </div>
  );
}
