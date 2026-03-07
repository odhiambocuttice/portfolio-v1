'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Palette, Download, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const socialLinks = [
    { href: 'https://github.com/odhiambocuttice', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/cuttice-odhiambo-6a7a3624a/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.behance.net/cuttice', icon: Palette, label: 'Behance' },
]

export function Hero() {
    const handleDownload = () => {
        if (typeof window !== 'undefined') {
            const link = document.createElement('a')
            link.href = '/Cuttice Odhiambo - CV.pdf'
            link.download = 'Cuttice_Odhiambo - CV.pdf'
            link.click()
        }
    }

    return (
        <section className="min-h-screen bg-[#FAFAF9] text-[#292524] font-zen relative overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 paper-texture pointer-events-none" />
            {/* Background number */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <span className="text-[20vw] font-zen-display font-light opacity-[0.04] leading-none text-[#292524]">01</span>
            </div>

            {/* Natural decorative element */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#C2410C] blur-3xl hidden lg:block"
            />

            {/* Content */}
            <div className="max-w-5xl mx-auto px-8 py-10 lg:py-16 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — text content */}
                    <div>
                        {/* Japanese-inspired divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="w-16 h-px bg-[#A8A29E] mb-12 origin-left"
                        />

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#A8A29E] text-lg mb-6 tracking-wide"
                        >
                            Hello, I am
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="font-zen-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8"
                        >
                            Cuttice Odhiambo
                        </motion.h1>

                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mb-12"
                        >
                            <p className="text-xl md:text-2xl font-light text-[#57534E]">
                                Frontend and Mobile App Engineer
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg md:text-xl leading-relaxed text-[#78716C] max-w-xl mb-12"
                        >
                            My path in development began with Django backend work, where I learned to value robust, well-structured systems.
                            <br /><br />
                            Now focusing on frontend and mobile app development, I bring that same appreciation for clarity and purpose to user interfaces. Every element should serve a function. Every interaction should feel natural.
                        </motion.p>

                        {/* CTAs — hidden for now */}
                        {/* Social links — hidden for now */}
                    </div>

                    {/* Right — profile card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-72 h-[420px] rotate-3">
                            {/* Card with headshot */}
                            <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/headshot.jpg"
                                    alt="Cuttice Odhiambo"
                                    fill
                                    className="object-cover object-top"
                                />
                                {/* Subtle gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-8"
            >
                <div className="w-px h-24 bg-[#A8A29E]" />
            </motion.div>
        </section>
    )
}

export default Hero
