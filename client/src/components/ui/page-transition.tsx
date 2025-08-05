import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !overlay) return;

    // Only animate on route change
    if (previousLocation.current !== location) {
      // Exit animation
      gsap.to(container, {
        scale: 0.95,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Overlay animation
          gsap.fromTo(overlay,
            {
              scaleX: 0,
              transformOrigin: "left",
            },
            {
              scaleX: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                // Reset container for new content
                gsap.set(container, {
                  scale: 1.05,
                  opacity: 0,
                  filter: "blur(20px)"
                });
                
                // Hide overlay and show new content
                gsap.to(overlay, {
                  scaleX: 0,
                  transformOrigin: "right",
                  duration: 0.4,
                  ease: "power2.out"
                });
                
                // Enter animation
                gsap.to(container, {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.6,
                  ease: "power3.out",
                  delay: 0.2
                });
              }
            }
          );
        }
      });
      
      previousLocation.current = location;
    } else {
      // Initial load animation
      gsap.fromTo(container,
        {
          scale: 1.1,
          opacity: 0,
          filter: "blur(30px)",
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.1
        }
      );
    }
  }, [location]);

  return (
    <div className={`relative ${className}`}>
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-gradient-to-r from-blue-900 via-red-500 to-blue-900 pointer-events-none"
        style={{ 
          transform: 'scaleX(0)',
          transformOrigin: "left"
        }}
      />
      
      {/* Content container */}
      <div
        ref={containerRef}
        className="page-transition-content"
      >
        {children}
      </div>
    </div>
  );
}