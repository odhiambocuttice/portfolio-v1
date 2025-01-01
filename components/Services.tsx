
"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface ServiceInterface {
  name: string
  description: SerializedEditorState
  technology: string[]
  size: string
  color: string
}


const Services = ({ data }: { data: ServiceInterface[] }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const ServiceCard = ({ project }: { project: ServiceInterface }) => (
    <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} hover:scale-105 transition-transform duration-300 group-hover:scale-105 ${isMobile ? 'h-[300px] flex flex-col justify-center items-center ' : ''}`}>
      <div className="mb-1 text-sm font-medium text-white">
        {project.name}
      </div>
      <div className="text-sm font-normal text-white/60 mb-3">
        <RichText data={project.description} />
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technology.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  return (
    <section id="info" className="h-screen snap-center flex items-center justify-center p-8">
      <motion.div
        {...fadeInUp}
        className="max-w-2xl w-full text-center"
      >
    <div className="p-8">
      <h1 className="text-4xl font-medium mb-12 text-center text-cyan-100">Services</h1>
      
      {/* Mobile View */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
                {data.map((project) => (
                  <CarouselItem key={project.name}>
                <Card>
                  <CardContent className="p-0">
                    <ServiceCard project={project} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
              {data.map((project) => (
            <div
                  key={project.name}
              className="break-inside-avoid mb-4"
            >
              <ServiceCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
      </motion.div>
    </section>
  )
}

export default Services



