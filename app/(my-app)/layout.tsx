import { Inter } from 'next/font/google'
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Cuttice Odhiambo",
  description: "Frontend and Mobile App Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans min-h-screen`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

