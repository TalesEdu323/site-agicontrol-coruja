import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import LoadingScreen from "@/components/ui/loading-screen";
import { usePageTransitions, useAdvancedHovers } from "@/hooks/use-advanced-scroll";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Features from "@/pages/features";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Demo from "@/pages/demo";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { useRef } from "react";
import OwlIcon from "@/components/ui/owl-icon";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        background: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'background 0.2s',
        mixBlendMode: 'difference',
      }}
    />
  );
}

function Router() {
  // Initialize advanced animations
  usePageTransitions();
  useAdvancedHovers();

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/demo" component={Demo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="smooth-scroll">
          <CustomCursor />

          <LoadingScreen 
            isLoading={isLoading} 
            onComplete={() => setIsLoading(false)} 
          />
          {!isLoading && (
            <>
              <Toaster />
              <Router />
            </>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
