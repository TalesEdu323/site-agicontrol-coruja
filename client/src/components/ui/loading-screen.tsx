import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import OwlIcon from './owl-icon';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const progressBar = progressBarRef.current;
    
    if (!container || !logo || !progressBar) return;

    // Reset states
    gsap.set(container, { opacity: 1, scale: 1 });
    gsap.set(logo, { scale: 0, rotation: -180, opacity: 0 });
    gsap.set(progressBar, { scaleX: 0 });

    const tl = gsap.timeline();

    // Logo entrance
    tl.to(logo, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });

    // Progress animation
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        
        // Complete loading
        setTimeout(() => {
          const exitTl = gsap.timeline({
            onComplete: () => {
              onComplete?.();
            }
          });
          
          exitTl.to(logo, {
            scale: 0.8,
            y: -50,
            duration: 0.5,
            ease: "power2.in"
          })
          .to(container, {
            scale: 1.1,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut"
          }, "-=0.3");
        }, 500);
      }
      
      setProgress(currentProgress);
      gsap.to(progressBar, {
        scaleX: currentProgress / 100,
        duration: 0.3,
        ease: "power2.out"
      });
    }, 100);

    // Floating particles animation
    const particles = container.querySelectorAll('.loading-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -20,
        rotation: 360,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      });
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-red-500"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating particles (reduced) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="loading-particle absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="text-center z-10">
        {/* Logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
            <OwlIcon size="3xl" className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Projeto Coruja</h1>
          <p className="text-blue-100 text-lg">Carregando proteção avançada...</p>
        </div>

        {/* Progress bar */}
        <div ref={progressRef} className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/30">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full origin-left"
            />
          </div>
          <div className="mt-4 text-white/80 text-sm">
            {Math.round(progress)}% carregado
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>
    </div>
  );
}