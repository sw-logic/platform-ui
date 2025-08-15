# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit 2.0 application with TypeScript, configured as a static site generator for GitHub Pages deployment. The project uses Bootstrap 5 for styling with SCSS customization and implements a theme system.

## Commands

### Development
- `yarn dev` - Start development server
- `yarn dev -- --open` - Start dev server and open in browser
- `yarn preview` - Preview production build locally

### Build & Deploy
- `yarn build` - Build for production
- `yarn deploy` - Build and deploy to GitHub Pages via gh-pages

### Code Quality
- `yarn check` - Run Svelte type checking
- `yarn check:watch` - Run type checking in watch mode
- `yarn lint` - Run ESLint and Prettier checks
- `yarn format` - Format code with Prettier

## Architecture

### Static Site Configuration
- Uses `@sveltejs/adapter-static` for GitHub Pages deployment
- Base path configured as `/platform-ui/` for production
- SSR disabled (`ssr: false`), prerender enabled
- Trailing slash always enforced
- Fallback to `index.html` for SPA routing

### Routing Structure
- Two layout groups:
  - `(default)/` - Main application with full layout (Header, Footer, Modals)
  - `(empty)/` - Simplified layout for auth pages
- Main routes: library, favorites, folders, downloads, profile, search, etc.
- Legal pages: privacy-policy, terms-and-conditions, disclaimer

### Authentication System
- Two-tier authentication:
  - Development auth: `platform-userAuth` localStorage flag
  - App-level login: `userLoggedIn` state in settings store
- Guest access configurable via `allowGuest` setting
- Auto-redirects to `/auth/` if not authenticated in development

### Component Structure
- `src/lib/components/` - Reusable components organized by feature
  - `Layout/` - Header, Footer, Logo components
  - `Book/` - Book and BookCover display components
  - `Modals/` - LoginModal, RegisterModal, SettingsOffcanvas, InfoModal, ReferenceModal
  - UI components: Icon, NavLink, ThemeToggle, ControlIcon
- `src/routes/` - SvelteKit file-based routing with layout groups
- `src/lib/stores/` - Svelte stores for state management

### Styling System
- Bootstrap 5 with extensive SCSS customization
- Custom color palette and typography (Fira Sans/Mono fonts)
- Custom breakpoints: xs(0), sm(600px), md(1024px), lg(1366px), xl(1600px)
- Modular SCSS structure in `src/styles/modules/`
- Theme system supporting light/dark modes via `settings` store
- Custom grid system with CSS Grid enabled

### State Management
- Centralized settings store (`src/lib/stores/settings.ts`) manages:
  - User authentication state (`userAuth`, `userLoggedIn`)
  - User type (private/business) and subscription status
  - Guest access permissions
  - Theme preference (light/dark) and theme switcher visibility
- Uses Svelte 5 runes syntax (`$props`, `$effect`)

### Key Features
- Responsive book grid display system
- Bootstrap carousel on homepage
- Conditional content based on login status
- Search functionality in header
- User dropdown with profile/subscription links
- FontAwesome icons integration

### Key Technologies
- SvelteKit 2.0 with TypeScript and Svelte 5 runes
- Bootstrap 5 + Popper.js with custom SCSS
- Sass preprocessing
- ESLint + Prettier for code quality
- Static site generation for GitHub Pages