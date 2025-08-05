import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  anticipatePin?: number;
  refreshPriority?: number;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useAdvancedScrollAnimations(refs: RefObject<HTMLElement>[], options: ScrollAnimationOptions = {}) {
  useEffect(() => {
    const elements = refs.map(ref => ref.current).filter(Boolean);
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      // Hero section parallax and reveal
      elements.forEach((element, index) => {
        if (!element) return;

        // Fade in animation
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              ...options,
            }
          }
        );

        // Staggered children animation
        const children = element.querySelectorAll('[data-animate]');
        if (children.length > 0) {
          gsap.fromTo(children,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 75%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }

        // Parallax effect for specific elements
        const parallaxElements = element.querySelectorAll('[data-parallax]');
        parallaxElements.forEach((parallaxEl) => {
          const speed = parseFloat(parallaxEl.getAttribute('data-parallax') || '0.2');
          gsap.to(parallaxEl, {
            yPercent: -20 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          });
        });

        // Scale on scroll for hero sections
        if (element.classList.contains('hero-section') || element.hasAttribute('data-hero')) {
          gsap.to(element, {
            scale: 0.98,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top top",
              end: "bottom top",
              scrub: 2,
            }
          });
        }

        // Rotation effect for cards
        const cards = element.querySelectorAll('[data-card]');
        cards.forEach((card, cardIndex) => {
          gsap.fromTo(card,
            {
              rotationY: cardIndex % 2 === 0 ? -3 : 3,
              opacity: 0,
            },
            {
              rotationY: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              }
            }
          );
        });
      });

      // Subtle section transitions (removed heavy overlays)

      // Magnetic effect for interactive elements (subtle)
      const magneticElements = document.querySelectorAll('[data-magnetic]');
      magneticElements.forEach((el) => {
        const element = el as HTMLElement;
        
        element.addEventListener('mousemove', (e) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
        
        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Text reveal animations (simplified)
      const textElements = document.querySelectorAll('[data-text-reveal]');
      textElements.forEach((textEl) => {
        const element = textEl as HTMLElement;
        
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Smooth scroll snap
      gsap.to("body", {
        scrollBehavior: "smooth"
      });

    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [refs, options]);
}

// Hook para transições de página
export function usePageTransitions() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page load animation
      gsap.fromTo("main", 
        {
          opacity: 0,
          scale: 1.05,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Staggered reveal for navigation
      gsap.fromTo("nav a", 
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    });

    return () => ctx.revert();
  }, []);
}

// Hook para efeitos hover avançados
export function useAdvancedHovers() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Button hover effects (subtle)
      const buttons = document.querySelectorAll('button, [data-button]');
      buttons.forEach((button) => {
        const btn = button as HTMLElement;
        
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.02,
            y: -1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
        
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });

      // Card hover effects (subtle)
      const cards = document.querySelectorAll('[data-card], .card-hover');
      cards.forEach((card) => {
        const cardEl = card as HTMLElement;
        
        cardEl.addEventListener('mouseenter', () => {
          gsap.to(cardEl, {
            y: -3,
            scale: 1.01,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        cardEl.addEventListener('mouseleave', () => {
          gsap.to(cardEl, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);
}