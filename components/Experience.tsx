'use client'
import { motion } from "framer-motion"

const Experience = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    }

    const experiences = [
        {
            title: "Frontend Developer - React",
            company: "GroupApp Inc",
            period: "PRESENT",
            isPresent: true
        },
        {
            title: "FullStack Engineer - Django & Next.js",
            company: "Savannah Informatics",
            period: "2021 - 2023"
        },
        {
            title: "Intern - Backend Engineer",
            company: "Savannah Informatics",
            period: "2020 - 2021"
        }
    ]


    return (
        <section id="experience" className="h-screen snap-center flex items-center justify-center p-8">
            <motion.div
                {...fadeInUp}
                className="max-w-2xl w-full"
            >
                <h2 className="text-3xl font-medium mb-12 text-center text-cyan-100">Experience</h2>
                <div className="space-y-0 relative before:absolute before:left-[5px] before:top-[10px] before:bottom-2 before:w-[1px] before:bg-white/20">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 pb-8"
                        >
                            <div
                                className={`absolute left-0 top-[10px] w-[11px] h-[11px] rounded-full border-2 border-white 
                ${exp.isPresent ? 'bg-white' : 'bg-black'}`}
                            />
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-1 flex-wrap">
                                    <h3 className="text-lg text-cyan-50">{exp.title}</h3>
                                    {exp.isPresent && (
                                        <span className="px-2 py-0.5 text-xs rounded-full border border-white/20 bg-white/5 text-white">
                                            {exp.period}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-white/60">
                                    {exp.company} {!exp.isPresent && `(${exp.period})`}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Experience