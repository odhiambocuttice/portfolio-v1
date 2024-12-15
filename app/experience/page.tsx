'use client'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of multiple high-traffic web applications using React and Node.js."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2017 - 2020",
      description: "Developed and maintained various web applications using JavaScript, Python, and SQL."
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2017",
      description: "Assisted in the development of mobile-responsive websites and e-commerce platforms."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">My Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
              <h3 className="text-xl mb-2">{exp.company}</h3>
              <p className="text-gray-300 mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

