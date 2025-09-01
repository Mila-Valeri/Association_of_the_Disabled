# Wish Board Application

## Overview

This is a full-stack wish board application where users can create, share, and manage their personal wishes and dreams. The application features a modern React frontend with TypeScript, shadcn/ui components, and a Node.js/Express backend with PostgreSQL database integration. Users can upload images, categorize wishes with tags, interact with other users' wishes through likes, and manage their profiles with customizable themes and language preferences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with CSS variables for dynamic theming (light/dark mode)
- **State Management**: React Context API for global state (language, wishes, authentication)
- **Data Fetching**: TanStack React Query for server state management and caching
- **Routing**: React Router for client-side navigation with protected routes
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **File Upload**: Multer middleware for handling image uploads with local storage
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: TSX for TypeScript execution and hot reloading

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema definitions
- **Core Tables**:
  - `profiles`: User profile information with theme/language preferences
  - `wishes`: Main wish entities with title, description, images, tags, and status
  - `wish_likes`: Many-to-many relationship for user interactions
  - `users`: Legacy user authentication table for compatibility

### Authentication & Authorization
- **Strategy**: Custom authentication system with email/password
- **Session Storage**: Server-side sessions stored in PostgreSQL
- **Protected Routes**: Route-level protection using React Router guards
- **Profile Management**: Separate profile system linked to authentication

### File Handling
- **Image Upload**: Local file system storage with unique UUID naming
- **Static Serving**: Express static middleware for uploaded files
- **File Processing**: Multer with size limits (10MB) and image-only filtering
- **Future Enhancement**: Image cropping capabilities mentioned in requirements

### Internationalization
- **Languages**: English and Ukrainian support
- **Implementation**: Custom context-based solution with localStorage persistence
- **Scope**: Full UI translation coverage including form labels and status options

### Theme System
- **Modes**: Light and dark theme support
- **Implementation**: CSS variables with Tailwind CSS dark mode classes
- **Persistence**: localStorage with automatic system preference detection
- **Application**: Document-level class application for consistent theming

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and data fetching
- **express**: Node.js web framework for API routes
- **multer**: File upload middleware for Express

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library with React components
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### Form & Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation

### Database & Session Management
- **connect-pg-simple**: PostgreSQL session store for Express
- **ws**: WebSocket implementation for Neon database connections

### Utility Libraries
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting
- **nanoid**: URL-safe unique ID generator