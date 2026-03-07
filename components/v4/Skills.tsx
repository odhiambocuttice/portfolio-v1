'use client'

import { motion } from 'framer-motion'

interface SkillGroup {
    category: string
    items: string[]
}

const skills: SkillGroup[] = [
    {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React native'],
    },
    {
        category: 'Backend',
        items: ['Django', 'Python', 'Django REST Framework',],
    },
    {
        category: 'Styling',
        items: ['Tailwind CSS', 'SCSS', 'styled-components'],
    },
    {
        category: 'Tools',
        items: ['Git', 'Jira', 'Figma', 'Gleap', 'Claude code'],
    },
]

export function Skills() {
    return (
        <section id="skills" className="min-h-screen bg-[#3D2B1F] text-[#FAFAF9] font-zen py-24 relative overflow-hidden flex flex-col">
            {/* Background number */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <span className="text-[20vw] font-zen-display font-light opacity-[0.05] leading-none text-[#FAFAF9]">03</span>
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

            <div className="max-w-5xl mx-auto px-8 relative flex-1">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="w-16 h-px bg-[#C2410C] mb-8" />
                    <h2 className="font-zen-display text-4xl md:text-5xl font-light tracking-wide">
                        Skills & Tools
                    </h2>
                </motion.div>

                {/* Skills grid — full width */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                        >
                            <h3 className="text-sm tracking-[0.2em] uppercase text-[#78716C] mb-6">
                                {group.category}
                            </h3>
                            <ul className="space-y-3">
                                {group.items.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                                        className="text-base font-light text-[#A8A29E] hover:text-[#C2410C] transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-8 w-full mt-16"
            >
                <div className="border-t border-[#44403C] py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-sm text-[#A8A29E] tracking-wide">
                        Cuttice Odhiambo / odhiambocuttice@gmail.com
                    </span>
                    <span className="text-sm text-[#57534E]">
                        © 2026 — Made with intention
                    </span>
                </div>
            </motion.footer>
        </section>
    )
}

export default Skills
