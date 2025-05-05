import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Float, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { FaFingerprint } from 'react-icons/fa'

function FloatingFingerprint() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x += 0.001
    }
  })

  return (
    <Float floatIntensity={1.2} rotationIntensity={0.5}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial transparent opacity={0} />
        <Html center>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full border-4 border-green-400 animate-ping opacity-30"></div>
            <FaFingerprint className="text-8xl text-green-400 drop-shadow-lg" />
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

export default function Fingerprint3D() {
  return (
    <div className="w-[280px] h-[280px] md:h-[360px] relative z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 3, 5]} intensity={1.4} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        <FloatingFingerprint />
      </Canvas>
    </div>
  )
}
