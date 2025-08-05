import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { gsap } from "gsap";
import OwlIcon from "../ui/owl-icon";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Navigation animation on mount
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    const logo = document.querySelector('.nav-logo');
    const ctaButton = document.querySelector('.nav-cta');
    
    gsap.fromTo([logo, ...Array.from(navItems), ctaButton], 
      {
        opacity: 0,
        y: -30,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3
      }
    );
  }, []);

  // Enhanced hover effects for nav items
  const handleNavItemHover = (e: React.MouseEvent, isEntering: boolean) => {
    const item = e.currentTarget as HTMLElement;
    
    if (isEntering) {
      gsap.to(item, {
        scale: 1.05,
        color: "#E55056",
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(item, {
        scale: 1,
        color: location === item.getAttribute('href') ? "#E55056" : "#FFFFFF",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 navbar-slide ${
        isScrolled ? 'bg-blue-900 shadow-lg' : 'bg-blue-900/95 backdrop-blur-sm'
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div 
              className="nav-logo flex items-center space-x-2 cursor-pointer premium-hover" 
              data-testid="logo"
              data-magnetic
              data-cursor="link"
            >
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center floating-animation">
                <OwlIcon size="lg" className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">Projeto Coruja</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <a 
                className={`nav-item text-white hover:text-red-400 transition-colors duration-300 font-medium premium-hover ${
                  location === '/' ? 'text-red-400' : ''
                }`}
                data-testid="nav-home"
                data-cursor="link"
                href="/"
                onMouseEnter={(e) => handleNavItemHover(e, true)}
                onMouseLeave={(e) => handleNavItemHover(e, false)}
              >
                Home
              </a>
            </Link>
            <Link href="/features">
              <a 
                className={`nav-item text-white hover:text-red-400 transition-colors duration-300 font-medium premium-hover ${
                  location === '/features' ? 'text-red-400' : ''
                }`}
                data-testid="nav-features"
                data-cursor="link"
                href="/features"
                onMouseEnter={(e) => handleNavItemHover(e, true)}
                onMouseLeave={(e) => handleNavItemHover(e, false)}
              >
                IPS & Controle
              </a>
            </Link>
            <Link href="/demo">
              <a 
                className={`nav-item text-white hover:text-red-400 transition-colors duration-300 font-medium premium-hover ${
                  location === '/demo' ? 'text-red-400' : ''
                }`}
                data-testid="nav-demo"
                data-cursor="link"
                href="/demo"
                onMouseEnter={(e) => handleNavItemHover(e, true)}
                onMouseLeave={(e) => handleNavItemHover(e, false)}
              >
                Demo Interativa
              </a>
            </Link>
            <Link href="/about">
              <a 
                className={`nav-item text-white hover:text-red-400 transition-colors duration-300 font-medium premium-hover ${
                  location === '/about' ? 'text-red-400' : ''
                }`}
                data-testid="nav-about"
                data-cursor="link"
                href="/about"
                onMouseEnter={(e) => handleNavItemHover(e, true)}
                onMouseLeave={(e) => handleNavItemHover(e, false)}
              >
                Quem Somos
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`nav-item text-white hover:text-red-400 transition-colors duration-300 font-medium premium-hover ${
                  location === '/contact' ? 'text-red-400' : ''
                }`}
                data-testid="nav-contact"
                data-cursor="link"
                href="/contact"
                onMouseEnter={(e) => handleNavItemHover(e, true)}
                onMouseLeave={(e) => handleNavItemHover(e, false)}
              >
                Contato
              </a>
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#download" 
              className="nav-cta bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300 premium-hover font-medium luxury-border"
              data-testid="button-download-nav"
              data-magnetic
              data-cursor="button"
            >
              Baixar App
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <a 
                  className={`text-white hover:text-red-400 transition-colors duration-300 ${
                    location === '/' ? 'text-red-400' : ''
                  }`}
                  data-testid="mobile-nav-home"
                >
                  Home
                </a>
              </Link>
              <Link href="/features">
                <a 
                  className={`text-white hover:text-red-400 transition-colors duration-300 ${
                    location === '/features' ? 'text-red-400' : ''
                  }`}
                  data-testid="mobile-nav-features"
                >
                  IPS & Controle
                </a>
              </Link>
              <Link href="/demo">
                <a 
                  className={`text-white hover:text-red-400 transition-colors duration-300 ${
                    location === '/demo' ? 'text-red-400' : ''
                  }`}
                  data-testid="mobile-nav-demo"
                >
                  Demo Interativa
                </a>
              </Link>
              <Link href="/about">
                <a 
                  className={`text-white hover:text-red-400 transition-colors duration-300 ${
                    location === '/about' ? 'text-red-400' : ''
                  }`}
                  data-testid="mobile-nav-about"
                >
                  Quem Somos
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className={`text-white hover:text-red-400 transition-colors duration-300 ${
                    location === '/contact' ? 'text-red-400' : ''
                  }`}
                  data-testid="mobile-nav-contact"
                >
                  Contato
                </a>
              </Link>
              <a 
                href="#download" 
                className="bg-red-500 text-white px-4 py-2 rounded-full text-center hover:bg-red-600 transition-colors duration-300"
                data-testid="mobile-button-download"
              >
                Baixar App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
