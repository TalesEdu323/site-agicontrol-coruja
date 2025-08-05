import React from 'react';

interface OwlIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: string;
}

export default function OwlIcon({ 
  className = '', 
  size = 'md',
  color = 'currentColor' 
}: OwlIconProps) {
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-8 h-8';
      case 'xl': return 'w-12 h-12';
      case '2xl': return 'w-16 h-16';
      case '3xl': return 'w-24 h-24';
      default: return 'w-6 h-6';
    }
  };

  return (
    <svg
      className={`${getSizeClasses()} ${className}`}
      viewBox="222 323 365 365"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo principal da coruja - simplificado */}
      <path 
        style={{ fill: color, fillOpacity: 1 }} 
        d="M 404.9 323.4 C 304.2 323.4 222.4 405.2 222.4 505.9 L 222.4 688.4 L 404.9 688.4 C 505.6 688.4 587.4 606.6 587.4 505.9 C 587.4 405.2 505.6 323.4 404.9 323.4 Z M 404.9 659.6 L 251.2 659.6 L 251.2 505.9 C 251.2 501.3 251.6 496.7 252 492.1 C 255.0 456.3 283.5 427.1 319.6 424.8 C 320.8 424.8 322.3 424.8 323.8 424.8 C 363.8 424.8 396.1 455.6 397.6 495.5 C 398.4 512.1 393.8 527.0 385.3 539.7 C 394.5 545.1 401.4 552.4 405.3 560.9 C 409.5 552.4 416.4 545.1 425.3 539.7 C 416.8 527.0 412.6 512.1 413.0 495.5 C 414.9 455.6 446.8 424.8 486.8 424.8 C 488.3 424.8 489.4 424.8 491.0 424.8 C 526.7 426.7 555.2 456.0 558.6 492.1 C 559.0 496.7 559.4 501.3 559.4 505.9 C 558.6 590.4 489.4 659.6 404.9 659.6 Z"
      />
      
      {/* Olho esquerdo - simplificado */}
      <circle 
        cx="347" 
        cy="502" 
        r="24" 
        fill={color}
        fillOpacity="1"
      />
      
      {/* Olho direito - simplificado */}
      <circle 
        cx="463" 
        cy="502" 
        r="24" 
        fill={color}
        fillOpacity="1"
      />
    </svg>
  );
}

// Versão alternativa usando diretamente o arquivo SVG:
export function OwlIconFromFile({ 
  className = '', 
  size = 'md' 
}: { 
  className?: string; 
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-8 h-8';
      case 'xl': return 'w-12 h-12';
      case '2xl': return 'w-16 h-16';
      case '3xl': return 'w-24 h-24';
      default: return 'w-6 h-6';
    }
  };

  return (
    <img 
      src="/attached_assets/logo-coruja.svg"
      alt="Coruja"
      className={`${getSizeClasses()} ${className}`}
      style={{ filter: 'brightness(0) invert(1)' }}
    />
  );
}