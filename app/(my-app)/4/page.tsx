import { Hero } from '@/components/v4/Hero'
// import { Projects } from '@/components/v4/Projects'
import { Skills } from '@/components/v4/Skills'
import { Experience } from '@/components/v4/Experience'

export const metadata = {
    title: 'Cuttice Odhiambo | Japanese Minimalism Portfolio',
    description: 'Frontend Developer with Django backend experience. Building user-focused products with real-world impact.',
}

export default function PortfolioV4() {
    return (
        <main className="v4">
            <Hero />
            {/* <Projects /> */}
            <Experience />
            <Skills />
        </main>
    )
}
