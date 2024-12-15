"use client"

import { Info, Phone, X, Menu, Copy } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState({ phone: false, email: false })

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "#experience", text: "EXPERIENCE" },
    { href: "#info", icon: Info, text: "SERVICES" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    if (isOpen) toggleMenu()
  }

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text)
    setIsCopied({ ...isCopied, [type]: true })
    setTimeout(() => setIsCopied({ ...isCopied, [type]: false }), 2000)
  }

  return (
    <div className="w-full flex justify-center p-4">
      <motion.nav 
        className="flex items-center justify-between w-full max-w-3xl px-6 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <a href="#home" className="text-white font-bold text-2xl" onClick={(e) => handleScroll(e, '#home')}>
          CO
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} onClick={handleScroll} />
          ))}
           <Dialog>
            <DialogTrigger asChild>
            <Button variant="link" size="icon">
                <Phone className="h-5 w-5 text-white" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/60 backdrop-blur-sm border border-white/10 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-white">Contact Information</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4 text-white">
                <div className="flex items-center justify-between">
                <span>Phone: +254 704 195 820</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => copyToClipboard('+254 704 195 820', 'phone')}
                  >
                    {isCopied.phone ? 'Copied!' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                <span>Email: odhiambocuttice@gmail.com</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => copyToClipboard('odhiambocuttice@gmail.com', 'email')}
                  >
                    {isCopied.email ? 'Copied!' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} onClick={handleScroll} mobile />
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="lg" className="mt-4">
                    <span className="text-xl text-white">CONTACT</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black/60 backdrop-blur-sm border border-white/10 text-white">

                  <DialogHeader>
                    <DialogTitle>Contact Information</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center justify-between">
                    <span>Phone: +254 704 195 820</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => copyToClipboard('+254 704 195 820', 'phone')}
                  >
                    {isCopied.phone ? 'Copied!' : <Copy className="h-4 w-4" />}
                  </Button>
                    </div>
                    <div className="flex items-center justify-between">
                    <span>Email: odhiambocuttice@gmail.com</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => copyToClipboard('odhiambocuttice@gmail.com', 'email')}
                  >
                    {isCopied.email ? 'Copied!' : <Copy className="h-4 w-4" />}
                  </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function NavItem({ href, text, onClick, mobile }: { 
  href: string; 
  text: string; 
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;
  mobile?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={mobile ? "my-4" : ""}
    >
      <a 
        href={href} 
        className="flex items-center gap-2 text-white hover:text-white transition-colors"
        onClick={(e) => onClick(e, href)}
      >
        <span className={`text-sm font-medium ${mobile ? 'text-xl' : ''}`}>{text}</span>
      </a>
    </motion.div>
  )
}

