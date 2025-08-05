import { useEffect, useRef } from "react";
import OwlIcon from './owl-icon';

export default function Owl3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating elements around the owl
    const createFloatingElements = () => {
      if (!containerRef.current) return;

      const elements = [
        { icon: "fas fa-shield-alt", color: "bg-blue-500", delay: 0 },
        { icon: "fas fa-lock", color: "bg-red-500", delay: 1 },
        { icon: "fas fa-eye", color: "bg-green-500", delay: 2 },
      ];

      elements.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = `absolute w-12 h-12 ${element.color} rounded-full flex items-center justify-center shadow-lg animate-float`;
        div.style.animationDelay = `${element.delay}s`;
        div.innerHTML = `<i class="${element.icon} text-white"></i>`;
        
        // Position elements around the owl
        const angle = (index * 120) * (Math.PI / 180);
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        div.style.left = `calc(50% + ${x}px)`;
        div.style.top = `calc(50% + ${y}px)`;
        div.style.transform = 'translate(-50%, -50%)';
        
        containerRef.current?.appendChild(div);
      });
    };

    createFloatingElements();

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="owl-3d relative" data-testid="owl-3d">
      <div 
        ref={containerRef}
        className="relative w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
        data-testid="owl-container"
      >
        <OwlIcon size="3xl" className="text-white animate-pulse" />
      </div>
      
      {/* Static floating elements as fallback */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-float"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
}
