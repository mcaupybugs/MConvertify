"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const response = signIn("google", {redirectTo: "/error"});
        console.log(response);
      }}
    >
      <button type="submit">Sign in with Google</button>
    </form>
  );
}
