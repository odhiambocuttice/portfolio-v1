'use client'

import { motion } from 'framer-motion'

interface Bullet {
    title: string
    detail: string
}

interface Role {
    role: string
    period: string
    summary: string
    bullets: Bullet[]
    technologies: string[]
}

interface Company {
    id: number
    company: string
    roles: Role[]
}

const companies: Company[] = [
    {
        id: 1,
        company: 'GroupApp Inc',
        roles: [
            {
                role: 'Mobile App Developer',
                period: '2026 — Present',
                summary: 'Expanded scope into mobile — bringing the platform\'s web experience to React Native and giving the app a modern redesign.',
                bullets: [
                    { title: 'React Native Development:', detail: 'Joined the mobile app team to support and extend the React Native codebase, building new features and ensuring stability across iOS and Android.' },
                    { title: 'Web-to-Mobile Feature Parity:', detail: 'Ported existing web platform features to mobile, adapting UI patterns and interactions to feel native while maintaining product consistency.' },
                    { title: 'App Redesign:', detail: 'Led a visual redesign of the mobile app — refreshing the UI with updated components, improved layouts, and a more polished overall look and feel.' },
                ],
                technologies: ['React Native', 'TypeScript', 'React', 'REST APIs'],
            },
            {
                role: 'Customer Success Developer',
                period: '2024 — 2026',
                summary: 'Sat at the intersection of engineering and customer experience — ensuring platform users got timely support while feeding product insights back into the development cycle.',
                bullets: [
                    { title: 'Technical Support:', detail: 'Investigated and resolved customer-reported technical issues, diagnosing root causes and coordinating fixes with the engineering team.' },
                    { title: 'Developer Documentation:', detail: 'Authored developer docs, tutorials, and help articles that reduced repetitive support queries and improved customer onboarding.' },
                    { title: 'Feature Requests:', detail: 'Captured and prioritised customer feature requests, translating user feedback into clear product requirements for the team.' },
                    { title: 'Bug Triage:', detail: 'Documented and reproduced bugs, then routed them to the appropriate developer with full context for faster resolution.' },
                    { title: 'Feature Development & Support:', detail: 'Continued contributing to feature development alongside support duties, maintaining continuity between customer needs and shipped product.' },
                ],
                technologies: ['React', 'TypeScript', 'Jira', 'Gleap'],
            },
            {
                role: 'Frontend Software Developer',
                period: 'Jan 2023 — 2024',
                summary: 'Built and maintained a React/TypeScript learning community platform serving thousands of users, owning features from design integration to production deployment.',
                bullets: [
                    { title: 'Workflow Automation UI:', detail: 'Led frontend development of a mission-critical automated workflow builder used daily by 90% of platform users.' },
                    { title: 'Application-Wide UI Refactor:', detail: 'Independently audited and refactored the entire web application — eliminated redundant components, improved architecture, and measurably reduced user-reported bugs, boosting platform scalability.' },
                    { title: 'Data-Driven Features:', detail: 'Built UI for course completion tracking, user onboarding flows, and personalized routing — delivering real-time visibility into user activity, comparable to inventory and sales tracking dashboards.' },
                    { title: 'Cross-Functional Delivery:', detail: 'Collaborated daily with Design, Backend, and Product teams to translate Figma prototypes into pixel-accurate, production-ready React components.' },
                ],
                technologies: ['React', 'TypeScript', 'Redux', 'React Context', 'Jotai', 'SCSS Modules', 'styled-components', 'REST APIs'],
            },
        ],
    },
    {
        id: 2,
        company: 'Savannah Informatics Limited',
        roles: [
            {
                role: 'Full Stack Developer',
                period: 'Jan 2022 — Jan 2023',
                summary: 'Took on full-stack responsibilities — bridging frontend and backend to deliver complete features across Kenya-wide healthcare platforms.',
                bullets: [
                    { title: 'EMR Frontend Development:', detail: 'Designed and shipped new React UI features for a live healthcare system used by providers across Kenya — high-stakes, data-dense interfaces requiring precision and reliability.' },
                    { title: 'Call Centre Application:', detail: 'Developed React-based UI for a call centre platform, improving operational efficiency — experience building multi-role, workflow-driven business tools.' },
                    { title: 'Payment & API Integration:', detail: 'Built REST API integrations using Django REST Framework to connect third-party services and enable seamless data flow.' },
                ],
                technologies: ['React', 'Django', 'Django REST Framework', 'Python', 'REST APIs'],
            },
            {
                role: 'Backend Developer',
                period: 'Jan 2021 — Jan 2022',
                summary: 'Focused on server-side development for Kenya-wide healthcare software, building robust backend systems powering Electronic Medical Records.',
                bullets: [
                    { title: 'API Development:', detail: 'Built and maintained Django REST Framework APIs consumed by frontend clients — ensuring reliable, well-structured data contracts across the platform.' },
                    { title: 'System Reliability:', detail: 'Monitored and optimised scheduled Celery tasks for automated patient data synchronisation, ensuring data accuracy and uptime across a live production system.' },
                    { title: 'Database Management:', detail: 'Managed and optimised PostgreSQL schemas and queries to support high-volume healthcare data operations.' },
                ],
                technologies: ['Django', 'Python', 'Django REST Framework', 'Celery', 'PostgreSQL', 'REST APIs'],
            },
            {
                role: 'Software Developer Intern',
                period: 'May 2019 — Jan 2020',
                summary: 'Assisted in developing Electronic Medical Records system features; gained hands-on full-stack experience.',
                bullets: [
                    { title: 'QA & Testing:', detail: 'Participated in QA testing and bug identification across a production healthcare platform.' },
                ],
                technologies: ['React', 'Django', 'Python'],
            },
        ],
    },
]

export function Experience() {
    return (
        <section id="experience" className="min-h-screen bg-[#F5EDE3] text-[#292524] font-zen py-24 relative">
            {/* Subtle texture */}
            <div className="absolute inset-0 paper-texture pointer-events-none" />

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
                        Experience
                    </h2>
                </motion.div>

                {/* Companies */}
                <div className="space-y-24">
                    {companies.map((company, companyIndex) => (
                        <motion.div
                            key={company.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Company name */}
                            <div className="flex items-center gap-6 mb-12">
                                <span className="text-5xl font-zen-display font-extralight text-[#D6D3D1]">
                                    {String(company.id).padStart(2, '0')}
                                </span>
                                <h3 className="font-zen-display text-3xl md:text-4xl font-light tracking-wide">
                                    {company.company}
                                </h3>
                            </div>

                            {/* Roles */}
                            <div className="space-y-12 pl-0 md:pl-20">
                                {company.roles.map((r, roleIndex) => (
                                    <motion.div
                                        key={r.role}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: roleIndex * 0.1 }}
                                    >
                                        {/* Role header */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                                            <p className="text-xl font-medium text-[#C2410C] tracking-wide">{r.role}</p>
                                            <span className="text-sm text-[#78716C] tracking-wide shrink-0">{r.period}</span>
                                        </div>

                                        {/* Summary */}
                                        <p className="text-[#57534E] leading-relaxed mb-4 max-w-2xl">
                                            {r.summary}
                                        </p>

                                        {/* Bullets */}
                                        <ul className="space-y-3 mb-4 max-w-2xl">
                                            {r.bullets.map((bullet) => (
                                                <li key={bullet.title} className="flex gap-3 text-[#78716C] leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#78716C] shrink-0" />
                                                    <span>
                                                        <strong className="text-[#57534E] font-medium">{bullet.title}</strong>{' '}
                                                        {bullet.detail}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <p className="text-sm text-[#A8A29E] italic">
                                            Technologies: {r.technologies.join(', ')}
                                        </p>

                                        {/* Role divider */}
                                        {roleIndex < company.roles.length - 1 && (
                                            <div className="w-full h-px bg-[#E7D5C4] mt-10" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Company divider */}
                            {companyIndex < companies.length - 1 && (
                                <div className="w-full h-px bg-[#D4B896] mt-16" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
