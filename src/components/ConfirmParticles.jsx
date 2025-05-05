import Particles from 'react-tsparticles'

export default function ConfirmParticles() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 100 },
          color: { value: ['#00ff99', '#33ffcc', '#ffffff'] },
          shape: { type: 'circle' },
          opacity: { value: 0.8 },
          size: { value: { min: 2, max: 5 } },
          move: {
            enable: true,
            speed: { min: 2, max: 5 },
            direction: 'none',
            outModes: 'destroy',
          },
        },
        emitters: {
          position: { x: 50, y: 50 },
          rate: { quantity: 100, delay: 0 },
          size: { width: 0, height: 0 },
        },
        detectRetina: true,
        duration: 1,
      }}
      className="absolute inset-0 z-40 pointer-events-none"
    />
  )
}
