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
- All code bundled into single `everything.js` file
- Fallback to `index.html` for SPA routing

### Component Structure
- `src/lib/components/` - Reusable components organized by feature
  - `Layout/` - Header and Footer components
  - `Book/` - Book-related display components
  - `Modals/` - Various modal dialogs
- `src/routes/` - SvelteKit file-based routing
- `src/lib/stores/` - Svelte stores for state management

### Styling System
- Bootstrap 5 with custom SCSS overrides
- Theme system supporting light/dark modes via `settings` store
- Modular SCSS structure in `src/styles/modules/`
- SCSS deprecation warnings silenced for Bootstrap compatibility

### State Management
- Centralized settings store (`src/lib/stores/settings.ts`) manages:
  - User authentication state
  - User type (private/business)
  - Theme preference (light/dark)
  - Theme switcher visibility

### Key Technologies
- SvelteKit 2.0 with TypeScript
- Bootstrap 5 + Popper.js
- SCSS preprocessing
- ESLint + Prettier for code quality