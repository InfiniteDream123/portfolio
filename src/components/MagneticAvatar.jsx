import { useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function MagneticAvatar() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - (bounds.left + bounds.width / 2)
    const offsetY = e.clientY - (bounds.top + bounds.height / 2)
    animate(x, offsetX, { type: 'spring', stiffness: 150, damping: 15 })
    animate(y, offsetY, { type: 'spring', stiffness: 150, damping: 15 })
  }

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 150, damping: 20 })
    animate(y, 0, { type: 'spring', stiffness: 150, damping: 20 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative group"
    >
      {/* 🌌 Glowing Aura */}
      <div className="absolute -inset-4 rounded-full z-0 blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-700
        bg-gradient-to-br from-green-400 via-green-500 to-teal-400 animate-pulse" />

      {/* Avatar Image */}
      <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-green-400
        shadow-[0_0_20px_#00ff99] grayscale hover:grayscale-0 transition-all duration-700
        group-hover:scale-105"
      >
        <img
          src="/profile.jpg"
          alt="Jakarin Srimakut"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out
          group-hover:scale-110 group-hover:blur-[0.5px]"
        />
      </div>
    </motion.div>
  )
}
