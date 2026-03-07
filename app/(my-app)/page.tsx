import { Hero } from '@/components/v4/Hero'
// import { Projects } from '@/components/v4/Projects'
import { Experience } from '@/components/v4/Experience'
import { Skills } from '@/components/v4/Skills'

export default function Home() {
  return (
    <main className="v4">
      <Hero />
      {/* <Projects /> */}
      <Experience />
      <Skills />
    </main>
  )
}