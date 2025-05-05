import { useEffect, useState } from 'react'

const SYMBOLS = '0123456789∑λ≠≡∇∞#@$%&*'.split('')

function getRandomSymbols(length) {
  return Array.from({ length }).map(() =>
    SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
  )
}

export default function MatrixRain() {
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const total = Math.floor(window.innerWidth / 20)
    const colData = Array.from({ length: total }).map(() => ({
      chars: getRandomSymbols(30),
      delay: Math.random() * 4,
    }))
    setColumns(colData)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black bg-opacity-90 backdrop-blur-sm">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 font-mono text-sm leading-tight animate-matrix"
          style={{
            left: `${i * 20}px`,
            animationDelay: `${col.delay}s`,
            opacity: 0.3 + Math.random() * 0.5,
            filter: 'blur(0.6px)',
          }}
        >
          {col.chars.map((char, j) => (
            <div key={j}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
