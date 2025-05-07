import Particles from 'react-tsparticles';

export default function ConfirmParticles() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 150 }, // Adjusted number of particles for a more dense effect
          color: { value: ['#A3C7FF', '#7FC6FF', '#D1E7FF'] }, // Light blue colors
          shape: { type: 'circle' },
          opacity: { value: 0.7 }, // Slightly transparent particles for subtlety
          size: { value: { min: 3, max: 6 } }, // Size range for particles
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, // Slower movement for a calmer effect
            direction: 'none',
            outModes: 'destroy',
          },
        },
        emitters: {
          position: { x: 50, y: 50 },
          rate: { quantity: 50, delay: 0 }, // Adjusted particle emission rate
          size: { width: 0, height: 0 },
        },
        detectRetina: true,
        duration: 1, // Keep it 1 second for a smooth background animation
      }}
      className="absolute inset-0 z-40 pointer-events-none"
    />
  );
}
