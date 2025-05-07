import { motion } from 'framer-motion';
import AiMeshBackground from './AIMeshBackground';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black"
    >
      <AiMeshBackground />
      {/* 🌌 Animated Background Gradient Blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-blue-300/5 to-transparent blur-2xl" />
        <div className="absolute bottom-[-20%] left-[20%] w-[300px] h-[300px] bg-blue-400/20 blur-3xl rounded-full opacity-20" />
      </div>

      {/* 🎯 Hero Content */}
      <motion.div
        className="z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 tracking-tight leading-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Hi, I'm Serhii Chalyi
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Full Stack and Blockchain Developer!
        </motion.p>
        {/* 🔘 CTA Button */}
        <motion.a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-black rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          🚀 View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
