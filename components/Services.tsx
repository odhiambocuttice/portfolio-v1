
"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"

const ProjectsData = [
  {
    id: 1,
    name: 'Frontend Development',
    description: 'Creating interactive and responsive user interfaces.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    size: 'col-span-1',
    color: 'from-emerald-900 to-emerald-950'
  },
  {
    id: 2,
    name: 'Backend Development',
    description: 'Developing scalable and secure server-side applications.',
    technologies: ['Django', 'Python', 'PostgreSQL'],
    size: 'col-span-2',
    color: 'from-blue-900 to-blue-950'

  },
  {
    id: 3,
    name: 'Website Design & Development',
    description: 'Building and maintaining personal and professional websites with a focus on modern design principles. Creating fully responsive and visually appealing web solutions that meet client needs.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'JavaScript'],
    size: 'col-span-1',
    color: 'from-red-900 to-red-950'

  },
  {
    id: 4,
    name: 'Graphic Design',
    description: 'Crafting visually compelling graphics for creative projects with a keen eye for detail.',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva'],
    size: 'col-span-2',
    color: 'from-purple-900 to-purple-950'
  },
  {
    id: 5,
    name: 'Photography',
    description: 'Capturing and sharing moments through high-quality photos.',
    technologies: ['Canon DSLR', 'Adobe Lightroom', 'Adobe Photoshop'],
    size: 'col-span-1',
    color: 'from-cyan-900 to-cyan-950'
  }
]

// const Services = () => {
//   return (
//     <div className="">
//       <h1 className="text-4xl font-medium mb-12 text-center text-cyan-100">Services</h1>
//       <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
//         {ProjectsData.map((project, index) => (
//           <div
//             key={project.id}
//             className="break-inside-avoid mb-4"
//           >
//             <div className={`p-4 rounded-xl ${project.color} bg-gradient-to-br hover:scale-105 transition-transform duration-300 group-hover:scale-105`}>
//               <div className="mb-1 text-sm font-medium text-white">
//                 {project.name}
//               </div>
//               <div className="text-sm font-normal text-white/60 mb-3">
//                 {project.description}
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="inline-block px-2 py-1 text-xs rounded-full 
//                       bg-white/10 text-white/70"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

const Services = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const ServiceCard = ({ project }: { project: typeof ProjectsData[0] }) => (
    <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} hover:scale-105 transition-transform duration-300 group-hover:scale-105 ${isMobile ? 'h-[300px] flex flex-col justify-center items-center ' : ''}`}>
      <div className="mb-1 text-sm font-medium text-white">
        {project.name}
      </div>
      <div className="text-sm font-normal text-white/60 mb-3">
        {project.description}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
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

  return (
    <div className="p-8">
      <h1 className="text-4xl font-medium mb-12 text-center text-cyan-100">Services</h1>
      
      {/* Mobile View */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {ProjectsData.map((project) => (
              <CarouselItem key={project.id}>
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
          {ProjectsData.map((project, index) => (
            <div
              key={project.id}
              className="break-inside-avoid mb-4"
            >
              <ServiceCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services


