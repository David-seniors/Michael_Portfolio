# Portfolio Website - Oleksii Shamanov

## Overview

This is a modern, responsive portfolio website for Oleksii Shamanov, a Senior Full-Stack Engineer with 7+ years of experience in Python, .NET, Node.js, Angular, and React development. The application showcases professional experience in full-stack development, technical skills across multiple platforms, enterprise projects, education, and provides contact functionality. Built with Next.js 15, the site features a clean, professional design with dark/light theme support and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Information

**Developer Profile:**
- Name: Oleksii Shamanov
- Title: Senior Full-Stack Engineer | Python, .NET, Node.js, Angular Expert
- Location: Kyiv, Ukraine
- Email: oleksii.shamanov2@gmail.com
- GitHub: https://github.com/Oleksii1001
- Resume: https://drive.google.com/file/d/1dpqKDtVmfVTaIx7z3BzdwPdcU8c1WYYz/view

**Professional Experience:**
1. Railsware (01/2022 - Present) - Senior Full-Stack Engineer
   - Building scalable SaaS platforms and enterprise web applications
   - Leading full-stack development with Python, Django, Node.js, Angular, and React
   - Architecting microservices and cloud-based solutions
   
2. Edvantis (10/2020 - 12/2023) - Full-Stack Developer
   - Developed enterprise solutions using .NET, C#, and modern JavaScript frameworks
   - Worked on healthcare, finance, and e-commerce applications
   - Implemented RESTful APIs and database optimization strategies

**Education:**
- Kyiv National University of Technologies and Design (2016-2020)
- Bachelor of Computer Science

**Technical Skills:**
- Backend: Python, Django, .NET, C#, Laravel, Node.js, Express.js
- Frontend: Angular, React, Vue.js, TypeScript, JavaScript, HTML5, CSS3
- Databases: MySQL, PostgreSQL, MongoDB, Redis
- Cloud & DevOps: AWS, Azure, Docker, Kubernetes, CI/CD
- Tools: Git, Webpack, REST APIs, Microservices

**Featured Projects:**
1. KAMI Workforce - HR Management Platform
   - Full-stack HR software with payroll, attendance tracking, and mobile app
   - Technologies: Angular, Node.js, PostgreSQL, React, TypeScript
   
2. ExaWizards Recruit Assistant Agent
   - AI-powered recruiting assistant for candidate engagement
   - Technologies: Python, AI/ML, NLP, React, Node.js, PostgreSQL
   
3. TopChrétien - Christian Community Platform
   - French Christian platform with 500,000+ members
   - Technologies: PHP, Laravel, Vue.js, MySQL, Video Streaming
   
4. Stanford Haptic Breathing Pacer Research
   - Wearable device for autism stress management using haptic feedback
   - Technologies: Python, Machine Learning, IoT, Wearable Tech
   
5. Quantum Mini-Apps for Engineering
   - Research on variational quantum algorithms for engineering applications
   - Technologies: Python, Quantum Computing, Qiskit, Scientific Computing
   
6. GE Healthcare Solutions Integration
   - Enterprise healthcare solutions and digital transformation
   - Technologies: .NET, C#, Azure, Healthcare APIs, Microservices

## System Architecture

### Frontend Architecture

**Framework & Rendering Strategy**
- Next.js 15 with App Router for modern React server/client component architecture
- Client-side rendering for interactive components with "use client" directive
- Static generation for optimal performance and SEO
- External image support configured for Unsplash

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundation
- shadcn/ui component library with "new-york" style variant
- Custom component composition in `/components` directory organized by feature
- Consistent design system using CSS variables and Tailwind utilities

**Styling & Design**
- Tailwind CSS for utility-first styling with custom configuration
- CSS custom properties (variables) for theme management in `globals.css`
- Dual theme support (light/dark) with HSL color system
- Typography: Inter (body), Poppins (headers), JetBrains Mono (code)
- Responsive design with mobile-first approach

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- Custom query client configuration with credential-based fetching
- Form state managed by React Hook Form with Zod validation
- Theme state persisted in localStorage via custom ThemeProvider context

**Animation & Interactivity**
- Framer Motion for page transitions and scroll animations
- React Intersection Observer for viewport-based animations
- Custom hover/active states using Tailwind utility classes

### Backend Architecture

**Database Layer**
- PostgreSQL database (configured for Neon serverless)
- Drizzle ORM for type-safe database operations
- Schema definition in `/shared/schema.ts` with Drizzle-Zod integration
- Database migrations managed in `/migrations` directory

**API Design**
- RESTful API pattern with fetch-based client requests
- Credential-based authentication using cookies
- Type-safe request/response handling with TypeScript
- Custom API utility functions in `/lib/queryClient.ts`

**Data Validation**
- Zod schemas for runtime type validation
- Form validation using @hookform/resolvers with Zod
- Database schema validation using drizzle-zod

### External Dependencies

**Core Framework**
- Next.js 15 (React framework with App Router)
- React 18+ (UI library)
- TypeScript (type safety)

**UI & Styling**
- Tailwind CSS (utility-first CSS framework)
- Radix UI (accessible component primitives)
- shadcn/ui (pre-built component library)
- Framer Motion (animation library)
- Lucide React (icon library)

**State & Data Management**
- TanStack Query v5 (server state management)
- React Hook Form (form state management)
- Zod (schema validation)

**Database & ORM**
- Drizzle ORM (TypeScript ORM)
- Drizzle Kit (migration tool)
- @neondatabase/serverless (PostgreSQL driver)
- PostgreSQL (database system)

**Development Tools**
- ESLint with Next.js config (code linting)
- PostCSS with Autoprefixer (CSS processing)
- drizzle-kit (database migrations)

**Third-Party Integrations**
- Google Fonts (Inter, Poppins, JetBrains Mono)
- Unsplash (professional placeholder images)
- Email functionality (mailto links for contact)

## Recent Changes (October 2025)

**Complete Portfolio Transformation - October 25, 2025**
- Transformed portfolio from Noah Mason (Mobile Developer) to Oleksii Shamanov (Senior Full-Stack Engineer)
- Updated all personal information:
  - Name: Oleksii Shamanov
  - Title: Senior Full-Stack Engineer | Python, .NET, Node.js, Angular Expert
  - Email: oleksii.shamanov2@gmail.com
  - Location: Kyiv, Ukraine
  - GitHub: https://github.com/Oleksii1001
  - Resume: Google Drive link updated
  
- Updated Hero section with new name, title, bio, and professional avatar
- Updated About section with full-stack development background and 7+ years experience
- Updated Experience section with Railsware and Edvantis positions
- Updated Skills section with full-stack technologies (Python, .NET, Node.js, Angular, React, etc.)
- Updated Education section with Kyiv National University of Technologies and Design
- Updated Projects section with 6 enterprise projects from provided samples
- Updated Contact, Footer, and Navigation components with new information
- Updated page metadata and title to reflect new profile

**Technical Fixes:**
- Removed LinkedIn placeholder links from Hero and Footer (not provided in source material)
- Replaced missing avatar image with professional Unsplash placeholder
- Configured Next.js to allow external images from Unsplash domain
- Cleaned up unused imports (Linkedin icon)
- Resolved all LSP diagnostics and syntax errors
- Verified application compiles and runs without errors

**Architecture Review:**
- All components architect-reviewed and approved
- Hero, About, Experience, Skills, Education, Projects, Contact, Footer, and Navigation verified
- Social links properly configured (GitHub, Email)
- All Oleksii Shamanov profile data accurately reflected
- No remnants of original Noah Mason profile remain
- Production-ready and deployment-ready

**Key Design Decisions**

1. **Next.js App Router**: Chosen for modern React patterns, improved performance, and better SEO capabilities
2. **Component-First Architecture**: Separates UI components from business logic for maintainability
3. **Type Safety**: Full TypeScript implementation with Zod validation ensures runtime type safety
4. **Theme System**: CSS variables enable dynamic theming without JavaScript overhead
5. **Accessibility**: Radix UI primitives provide ARIA-compliant, keyboard-navigable components
6. **Performance**: Static generation, code splitting, and optimized animations ensure fast load times
7. **Database Flexibility**: Drizzle ORM provides database-agnostic abstraction (currently configured for PostgreSQL)
8. **External Images**: Configured Next.js to support external images from Unsplash for professional appearance
