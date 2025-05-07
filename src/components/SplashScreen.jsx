import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Fingerprint3D from './Fingerprint3D';
import ConfirmParticles from './ConfirmParticles';
import MatrixRain from './MatrixRain';

const targetText = 'Serhii Chalyi';

export default function SplashScreen({ onFinish }) {
  const [displayText, setDisplayText] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      const scramble = Array.from(targetText)
        .map((char, i) =>
          i < frame
            ? targetText[i]
            : String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        )
        .join('');
      setDisplayText(scramble);
      frame++;
      if (frame > targetText.length) {
        clearInterval(interval);
        setTimeout(() => setConfirmed(true), 600);
        setTimeout(() => onFinish(), 2000);
      }
    }, 250);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white font-mono overflow-hidden crt">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* CRT flicker overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 mix-blend-screen opacity-10 animate-crt" />

      {/* Scan line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-md opacity-70 z-40"
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: 3.5, ease: 'easeInOut' }}
      />

      {/* Particle burst on confirm */}
      {confirmed && <ConfirmParticles />}

      {/* Fingerprint 3D */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center z-10"
      >
        <Fingerprint3D />

        {/* Animated ID */}
        <div className="bg-gray-900 border border-blue-400 px-6 py-3 mt-6 rounded text-2xl tracking-[0.3em] text-blue-300 shadow-md">
          {displayText}
        </div>

        {/* Confirming message */}
        {!confirmed && (
          <motion.p
            className="mt-4 text-sm text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Confirming<span className="animate-pulse">...</span>
          </motion.p>
        )}

        {/* Final identity confirmed */}
        {confirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-4 text-blue-400 text-lg tracking-wider"
          >
            ✅ Identity Confirmed
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
