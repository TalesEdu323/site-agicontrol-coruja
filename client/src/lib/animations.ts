declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export const initGSAPAnimations = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const { gsap, ScrollTrigger } = window;
  
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  gsap.from('.hero-content', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.3
  });

  // Card animations on scroll
  gsap.utils.toArray('.card-hover').forEach((card: any) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    });
  });

  // Section fade-ins
  gsap.utils.toArray('section').forEach((section: any) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power2.out'
    });
  });

  // Owl floating animation
  gsap.to('.owl-3d', {
    duration: 4,
    y: -20,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });

  // Particle system
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    
    gsap.set(particle, {
      y: '100vh',
      opacity: 1
    });
    
    gsap.to(particle, {
      duration: Math.random() * 3 + 2,
      y: '-100vh',
      x: Math.random() * 40 - 20,
      opacity: 0,
      ease: 'none',
      onComplete: () => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }
    });
    
    return particle;
  };

  return {
    createParticle,
    gsap,
    ScrollTrigger
  };
};

export const animateCounter = (element: HTMLElement, target: number, duration: number = 2) => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const { gsap } = window;
  
  const obj = { value: 0 };
  
  gsap.to(obj, {
    duration,
    value: target,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString('pt-BR');
    }
  });
};
