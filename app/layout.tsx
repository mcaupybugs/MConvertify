import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
  
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MConvertify",
  icons: {
    icon: "/favicon.svg"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();  
  return (
    <html lang="en">
      <body className={`h-screen max-h-screen m-0 ${inter.className}`}>
        <SessionProvider session={session}>
          <div className="h-screen w-full flex flex-col">
            <div className="z-10">
              <NavBar></NavBar>
              </div>
              <div className="flex-1 overflow-auto z-0">
                {children}
              </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

