'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Palette, Mail } from 'lucide-react'

const contactLinks = [
    { href: 'mailto:contact@cuttice.dev', icon: Mail, label: 'Email' },
    { href: 'https://github.com/odhiambocuttice', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/cuttice-odhiambo-6a7a3624a/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.behance.net/cuttice', icon: Palette, label: 'Behance' },
]

export function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-[#FAFAF9] text-[#292524] font-zen py-24 flex flex-col relative overflow-hidden">
            {/* Background number */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <span className="text-[20vw] font-zen-display font-light opacity-[0.04] leading-none text-[#292524]">05</span>
            </div>
            <div className="max-w-5xl mx-auto px-8 flex-1 flex flex-col justify-center relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="w-16 h-px bg-[#C2410C] mb-8" />
                    <h2 className="font-zen-display text-4xl md:text-5xl font-light tracking-wide">
                        Connect
                    </h2>
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-zen-display text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide max-w-2xl">
                        Let&apos;s create something
                        <br />
                        <span className="text-[#C2410C]">meaningful</span> together.
                    </h3>
                </motion.div>

                {/* Contact method */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <a
                        href="mailto:contact@cuttice.dev"
                        className="text-2xl md:text-3xl text-[#78716C] hover:text-[#C2410C] transition-colors font-light tracking-wide"
                    >
                        contact@cuttice.dev
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-8"
                >
                    {contactLinks.slice(1).map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-[#A8A29E] hover:text-[#C2410C] transition-colors flex items-center gap-2 text-sm tracking-wide"
                        >
                            <link.icon className="w-4 h-4" strokeWidth={1.5} />
                            <span>{link.label}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-8 w-full"
            >
                <div className="border-t border-[#E7E5E4] py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-sm text-[#A8A29E] tracking-wide">
                        Cuttice Odhiambo odhiambocuttice@gmail.com
                    </span>
                    <span className="text-sm text-[#D6D3D1]">
                        © 2025 — Made with intention
                    </span>
                </div>
            </motion.footer>
        </section>
    )
}

export default Contact
