import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })
import type { Metadata } from "next"
import "./globals.css"
import Background from "@/components/Background"
import Navbar from "@/components/Navbar"


export const metadata: Metadata = {
  title: "Cuttice's Portfolio",
  description: "Cuttice Odhiambo's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans bg-black min-h-screen flex flex-col`}>
        <Background />
        <header className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </header>
        <main className="flex-grow relative z-0">
          {children}
        </main>
      </body>
    </html>
  )
}

