import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'AI-Powered Payment Reconciliation',
    description:
      'Real-time financial transaction system built with .NET 7, AWS Lambda, and DynamoDB. Processes multi-currency payment flows and fraud detection.',
    image: 'https://plus.unsplash.com/premium_photo-1728735030984-fef628ee1929',
    tags: ['.NET 7', 'AWS', 'Lambda', 'DynamoDB'],
  },
  {
    title: 'Healthcare Patient Portal',
    description:
      'HIPAA-compliant web portal for secure patient record access. React frontend, Azure Functions backend, integrated with SQL Server + B2C auth.',
    image: 'https://plus.unsplash.com/premium_photo-1682130171029-49261a5ba80a',
    tags: ['React', 'Azure', 'SQL Server'],
  },
  {
    title: '3D Dev Portfolio',
    description:
      'Interactive developer portfolio using Three.js, React, Tailwind, and Framer Motion. Full SPA with AI-styled animations.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    tags: ['Three.js', 'Tailwind', 'Framer Motion'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* 🧬 AI mesh background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-green-700/5 to-black blur-2xl opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Terminal-style header */}
        <motion.h2
          className="text-3xl md:text-4xl font-mono text-green-400 text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &gt; Fetching projects...
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Systems. Tools. Engines. Secure cloud-native solutions engineered for scale, clarity, and performance.
        </p>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-green-700 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-green-400/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-green-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-500/10 text-green-300 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-white transition"
                    >
                      <FaGithub className="inline-block mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-white transition"
                    >
                      <FaExternalLinkAlt className="inline-block mr-1" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
