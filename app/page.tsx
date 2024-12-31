"use client"

import Services from '@/components/Services'
import { motion } from 'framer-motion'
import { SmileIcon as Peace } from 'lucide-react'

export default function Home() {
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
          <h1 className="lg:text-4xl text:xl font-medium mb-6 text-cyan-100">Hi, I am Cuttice</h1>
          <p className="lg:text-2xl text:lg mb-4 text-white/80">
          Currently a frontend developer with past experience as a Django backend engineer. <br />  <br /> 
          Passionate about building user-focused products that make a real-world impact by blending intuitive design with robust functionality.
          </p>

          <button onClick={handleDownload} className="text-white/80 hover:text-white transition-colors border rounded-full px-4 py-2 text-xl my-5">
            Download my CV
          </button>
          <br />  <br /> 
          <div className="flex items-center justify-center gap-x-6">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/odhiambocuttice">
            <svg 
            className='w-10 h-10  transition-colors bg-white rounded-full p-1'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>

            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cuttice-odhiambo-6a7a3624a/">  
            <svg 
            className='w-10 h-10  transition-colors bg-white rounded-full p-1'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/cuttice">
            <svg
            className='w-10 h-10  transition-colors bg-white rounded-full p-1'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 11a2 2 0 1 0 0-4H3v4zm1 2H3v4h5.5a2 2 0 1 0 0-4m2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.573M15.5 6H21v1.5h-5.5zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0zm-2.104-2a2.751 2.751 0 0 0-5.292 0z"/></svg>
            
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

