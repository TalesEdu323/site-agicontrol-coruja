# AGICONTROL - Projeto Coruja

## Overview

Projeto Coruja is a comprehensive institutional website for AGICONTROL's family control platform that combines advanced IPS (Intrusion Prevention System) technology with intuitive parental controls. The website is designed as a multi-page React application built to promote the Android/Chrome OS application, featuring interactive 3D elements, animations, and educational content about digital security and family protection.

The platform addresses the growing need for intelligent digital protection by offering real-time threat blocking, dynamic parental controls, and comprehensive family monitoring capabilities. It positions itself as a superior alternative to existing solutions like Google Family Link, Bark, and mSpy by integrating IPS technology with parental control features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing across four main pages (Home, Features, About, Contact)
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, modern design
- **Color Scheme**: Custom brand colors (#1E3A8A blue, #E55056 red, #FFFFFF white) with Poppins font family
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive components

### Interactive Elements & Animations
- **3D Graphics**: Three.js integration for interactive 3D owl mascot and floating security elements
- **Animations**: GSAP (GreenSock) for smooth scroll-triggered animations and interactive effects
- **Charts**: Chart.js for data visualization and usage statistics
- **Custom Components**: Interactive time sliders, category galleries, comparison tables, and particle effects

### State Management & Data Flow
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Local State**: React hooks (useState, useEffect) for component-level state management
- **Custom Hooks**: Specialized hooks for mobile detection, scroll animations, and toast notifications

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Setup**: Vite for fast development and hot module replacement
- **Build Process**: ESBuild for production bundling and optimization

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless configuration
- **Schema Management**: Centralized schema definitions in shared directory
- **Migration System**: Drizzle Kit for database migrations and schema changes

### Development & Build Tools
- **Bundler**: Vite with React plugin for development and build optimization
- **TypeScript**: Strict type checking with path mapping for clean imports
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Code Quality**: ESLint and TypeScript compiler for code validation

### Project Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Client Directory**: React application with component library and page structure
- **Server Directory**: Express API with routing and storage layers
- **Shared Directory**: Common TypeScript types and database schemas

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Font Awesome for comprehensive icon library

### Database & Backend Services
- **Database Provider**: Neon Database (PostgreSQL serverless)
- **Database Client**: @neondatabase/serverless for connection pooling
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Environment**: DATABASE_URL environment variable for database connection

### Animation & Visualization Libraries
- **3D Graphics**: Three.js for WebGL-based 3D rendering
- **Animation**: GSAP with ScrollTrigger for advanced animations
- **Charts**: Chart.js for interactive data visualization
- **Date Handling**: date-fns for date manipulation and formatting

### Development Tools & Plugins
- **Build Tool**: Vite with React plugin and development optimizations
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal and cartographer for development environment
- **TypeScript**: tsx for TypeScript execution in development
- **Form Validation**: Zod for runtime type validation

### UI Enhancement Libraries
- **Command Palette**: cmdk for search and command interfaces
- **Utility Functions**: clsx for conditional CSS classes
- **Component Variants**: class-variance-authority for styled component variants
- **Accessibility**: Radix UI components ensure WCAG compliance and keyboard navigation

The architecture emphasizes modern web development practices with strong typing, component reusability, and performance optimization while maintaining flexibility for future feature additions and integrations.