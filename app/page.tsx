"use client"

import Services from '@/components/Services'
import { motion } from 'framer-motion'
import { SmileIcon as Peace } from 'lucide-react'

export default function Home() {
  const experiences = [
    {
      title: "Customer Solutions Developer - React",
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Cuttice Odhiambo - CV.pdf'; // Path to the CV in the public folder
    link.download = 'Cuttice_Odhiambo - CV.pdf'; // Desired file name for download
    link.click();
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section id="home" className="h-screen snap-center flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full text-center"
        >
          <h1 className="text-4xl font-medium mb-6 text-cyan-100">Hi, I'm Cuttice</h1>
          <p className="text-2xl mb-4 text-white/80">
          Currently a frontend developer with past experience as a Django backend engineer. <br />  <br /> 
          Passionate about building user-focused products that make a real-world impact by blending intuitive design with robust functionality.
          </p>

          <button onClick={handleDownload} className="text-white/80 hover:text-white transition-colors border rounded-full px-4 py-2 text-xl my-5">
            Download my CV
          </button>
          <br />  <br /> 
          <div className="flex items-center justify-center gap-x-6">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/odhiambocuttice">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"  className='w-10 h-10 text-white/80 hover:text-white transition-colors bg-cyan-100 rounded-full p-1'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cuttice-omondi/">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" className='w-10 h-10 text-white/80 hover:text-white transition-colors bg-cyan-100 rounded-full p-1'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/cuttice">
              <img src="https://img.icons8.com/ios-filled/50/000000/behance.png" alt="behance" className='w-10 h-10 text-white/80 hover:text-white transition-colors bg-cyan-100 rounded-full p-1'/>
            </a>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="h-screen snap-center flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

      <section id="info" className="h-screen snap-center flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full text-center"
        >
         <Services />
        </motion.div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 p-8 text-center text-sm text-white/60">
        <div className="flex items-center justify-center gap-2">
          <Peace className="w-5 h-5" />
          <span>© 2025 -Cuttice Odhiambo</span>
        </div>
      </footer>
    </div>
  )
}

