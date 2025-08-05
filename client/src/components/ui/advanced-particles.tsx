import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'spark' | 'glow' | 'trail';
}

interface AdvancedParticlesProps {
  count?: number;
  colors?: string[];
  interactive?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  style?: 'floating' | 'magnetic' | 'explosive';
}

export default function AdvancedParticles({ 
  count = 100,
  colors = ['#E55056', '#1E3A8A', '#FFFFFF'],
  interactive = true,
  intensity = 'medium',
  style = 'floating'
}: AdvancedParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = {
        low: count * 0.5,
        medium: count,
        high: count * 1.5
      }[intensity];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 1000,
          maxLife: 1000 + Math.random() * 2000,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: ['spark', 'glow', 'trail'][Math.floor(Math.random() * 3)] as Particle['type']
        });
      }
    };

    initParticles();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isActive: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation logic
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle based on style
        switch (style) {
          case 'floating':
            particle.x += particle.vx * 0.5;
            particle.y += particle.vy * 0.5;
            break;
            
          case 'magnetic':
            if (mouse.isActive && interactive) {
              const dx = mouse.x - particle.x;
              const dy = mouse.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 200) {
                const force = (200 - distance) / 200;
                particle.vx += (dx / distance) * force * 0.1;
                particle.vy += (dy / distance) * force * 0.1;
              }
            }
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx *= 0.95;
            particle.vy *= 0.95;
            break;
            
          case 'explosive':
            if (mouse.isActive && interactive) {
              const dx = mouse.x - particle.x;
              const dy = mouse.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx -= (dx / distance) * force * 0.2;
                particle.vy -= (dy / distance) * force * 0.2;
              }
            }
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx *= 0.98;
            particle.vy *= 0.98;
            break;
        }

        // Boundary conditions
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Update life
        particle.life += 16; // Assuming 60fps
        
        // Draw particle based on type
        const alpha = Math.max(0, 1 - (particle.life / particle.maxLife));
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        switch (particle.type) {
          case 'spark':
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'glow':
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, particle.color + '00');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'trail':
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = particle.size;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
            break;
        }
        
        ctx.restore();

        // Reset particle if dead
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
          particle.life = 0;
          particle.maxLife = 1000 + Math.random() * 2000;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }
      });

      // Draw connections between nearby particles
      if (style !== 'explosive') {
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors[0];
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const dx = particlesRef.current[i].x - particlesRef.current[j].x;
            const dy = particlesRef.current[i].y - particlesRef.current[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
              ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [count, colors, interactive, intensity, style]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}