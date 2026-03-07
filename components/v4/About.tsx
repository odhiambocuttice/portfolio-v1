'use client'

import { motion } from 'framer-motion'

export function About() {
    return (
        <section id="about" className="min-h-screen bg-[#292524] text-[#FAFAF9] font-zen py-24 relative overflow-hidden">
            {/* Background number */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <span className="text-[20vw] font-zen-display font-light opacity-[0.05] leading-none text-[#FAFAF9]">04</span>
            </div>
            {/* Decorative circles */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                viewport={{ once: true }}
                className="absolute right-0 top-1/4 w-96 h-96 rounded-full border border-[#FAFAF9] hidden lg:block"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.03, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute right-24 top-1/3 w-64 h-64 rounded-full border border-[#FAFAF9] hidden lg:block"
            />

            <div className="max-w-5xl mx-auto px-8 relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="w-16 h-px bg-[#C2410C] mb-8" />
                    <h2 className="font-zen-display text-4xl md:text-5xl font-light tracking-wide">
                        About
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left - Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <blockquote className="text-3xl md:text-4xl font-zen-display font-light leading-relaxed tracking-wide">
                            Simplicity is the
                            <br />
                            ultimate
                            <br />
                            <span className="text-[#C2410C]">sophistication.</span>
                        </blockquote>
                    </motion.div>

                    {/* Right - Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg leading-relaxed text-[#A8A29E]">
                            I&apos;m Cuttice Odhiambo. My path in development began with
                            Django backend work, where I learned to value robust,
                            well-structured systems.
                        </p>
                        <p className="text-lg leading-relaxed text-[#A8A29E]">
                            Now focusing on frontend development, I bring that same
                            appreciation for clarity and purpose to user interfaces.
                            Every element should serve a function. Every interaction
                            should feel natural.
                        </p>
                        <p className="text-lg leading-relaxed text-[#A8A29E]">
                            I believe in building products that respect the user&apos;s
                            time and attention. Like traditional craftsmanship,
                            good software balances form and function.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-[#44403C]"
                >
                    {[
                        { number: '3+', label: 'Years' },
                        { number: '20+', label: 'Projects' },
                        { number: '∞', label: 'Curiosity' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-zen-display font-light text-[#C2410C]">
                                {stat.number}
                            </div>
                            <div className="text-sm tracking-[0.2em] uppercase text-[#78716C] mt-2">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
