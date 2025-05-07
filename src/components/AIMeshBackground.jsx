import { useEffect, useRef } from 'react';

export default function AiMeshBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 77, 153, 0.6)'; // Change to blueish shade

      // Draw dots with blue effect
      for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connect nearby dots with blue lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(0, 77, 153, ${1 - dist / 130})`; // Blue lines with varying transparency
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Move the dots and make them bounce off the edges
      for (let dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce on edge
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
}
