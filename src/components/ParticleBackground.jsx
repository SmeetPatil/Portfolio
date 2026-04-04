import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

function ParticleBackground({ theme }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const PARTICLE_COUNT = Math.min(80, Math.floor(width / 15));
    particlesRef.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        parallaxFactor: Math.random() * 0.02 + 0.005,
      });
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = theme === 'dark';
      const particleColor = isDark ? '255, 255, 255' : '15, 23, 42';
      const lineColor = isDark ? '124, 58, 237' : '124, 58, 237';

      const scrollY = window.scrollY;

      particlesRef.current.forEach((p, i) => {
        // Parallax offset
        const px = p.x + (mouseRef.current.x - width / 2) * p.parallaxFactor;
        const py = p.y + (mouseRef.current.y - height / 2) * p.parallaxFactor - scrollY * p.parallaxFactor * 2;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const px2 = p2.x + (mouseRef.current.x - width / 2) * p2.parallaxFactor;
          const py2 = p2.y + (mouseRef.current.y - height / 2) * p2.parallaxFactor - scrollY * p2.parallaxFactor * 2;
          const dx = px - px2;
          const dy = py - py2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(${lineColor}, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default ParticleBackground;
