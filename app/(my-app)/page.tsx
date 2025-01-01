"use server"

import Experience from '@/components/Experience'
import Hero from '@/components/Home'
import Services from '@/components/Services'
import { SmileIcon as Peace } from 'lucide-react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'services',
  })

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <Experience />
      <Services data={data?.docs} />
      <footer className="fixed bottom-0 left-0 right-0 p-8 text-center text-sm text-white/60">
        <div className="flex items-center justify-center gap-2">
          <Peace className="w-5 h-5" />
          <span>© 2025 -Cuttice Odhiambo</span>
        </div>
      </footer>
    </div>
  )
}