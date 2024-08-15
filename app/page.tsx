"use client"
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    document.body.classList.add('overflow-y-hidden')
  })
  return (
    <main className="flex basis-10/12 min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
