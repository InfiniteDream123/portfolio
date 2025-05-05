import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-green-500/5 to-black blur-2xl opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 🖥️ Terminal Style Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-mono text-green-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &gt; Transmitting Secure Message to Joshua...
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Let’s build something epic, futuristic, and secure together.
        </p>

        {/* 📬 Contact Form */}
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="space-y-6 max-w-xl mx-auto text-left"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm text-green-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 border-b-2 border-green-500 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-green-400 transition"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm text-green-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 border-b-2 border-green-500 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-green-400 transition"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm text-green-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder="Let’s build something epic..."
                className="w-full px-4 py-2 border-b-2 border-green-500 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-green-400 transition resize-none"
              ></textarea>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded shadow transition-all duration-300"
            >
              🚀 Send Transmission
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-green-400 font-mono text-lg mt-10"
          >
            [ OK ] Message transmitted successfully to Jakarin Core Node ✅
          </motion.div>
        )}

        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-6 mt-12 text-green-400 text-2xl">
          <a
            href="mailto:jakarin@pm.me"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/jakarin"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jakarin"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
