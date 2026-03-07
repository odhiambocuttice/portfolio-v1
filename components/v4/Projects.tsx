'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    liveUrl?: string
    githubUrl?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A complete online store with payment integration and inventory management. Built with attention to user experience and performance.',
        tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: 'https://github.com/odhiambocuttice',
    },
    {
        id: 2,
        title: 'Task Management',
        description: 'Collaborative project management tool enabling teams to organize work with real-time updates and intuitive interfaces.',
        tech: ['React', 'Django', 'WebSocket', 'Redis'],
        liveUrl: '#',
        githubUrl: 'https://github.com/odhiambocuttice',
    },
    {
        id: 3,
        title: 'Portfolio Generator',
        description: 'A CLI tool that transforms simple configuration files into beautiful developer portfolios. Simplicity meets elegance.',
        tech: ['Node.js', 'TypeScript', 'Tailwind'],
        githubUrl: 'https://github.com/odhiambocuttice',
    },
    {
        id: 4,
        title: 'Analytics Dashboard',
        description: 'Real-time data visualization platform with customizable widgets. Turning complex data into clear insights.',
        tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
        liveUrl: '#',
        githubUrl: 'https://github.com/odhiambocuttice',
    },
]

export function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-[#FAF5F0] text-[#292524] font-zen py-24 relative overflow-hidden">
            {/* Subtle texture */}
            <div className="absolute inset-0 paper-texture pointer-events-none" />
            {/* Background number */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <span className="text-[20vw] font-zen-display font-light opacity-[0.04] leading-none text-[#292524]">02</span>
            </div>

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
                        Selected Work
                    </h2>
                    <p className="text-lg text-[#78716C] mt-4 max-w-md">
                        A curated collection of projects, each crafted with purpose and care.
                    </p>
                </motion.div>

                {/* Projects list */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                        >
                            {/* Number - decorative */}
                            <div className="lg:col-span-1">
                                <span className="text-6xl font-zen-display font-extralight text-[#D6D3D1]">
                                    {String(project.id).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-8 lg:col-start-3">
                                <h3 className="font-zen-display text-2xl md:text-3xl font-light mb-4 tracking-wide">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-[#78716C] mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-sm text-[#A8A29E] tracking-wide"
                                        >
                                            {tech}
                                            {tech !== project.tech[project.tech.length - 1] && (
                                                <span className="ml-3 text-[#D6D3D1]">·</span>
                                            )}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-6">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-[#78716C] hover:text-[#C2410C] transition-colors"
                                        >
                                            <Github className="w-4 h-4" strokeWidth={1.5} />
                                            <span>Source</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-[#78716C] hover:text-[#C2410C] transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                                            <span>Visit</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Divider */}
                            {index < projects.length - 1 && (
                                <div className="lg:col-span-12 mt-12">
                                    <div className="w-full h-px bg-[#E7E5E4]" />
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
