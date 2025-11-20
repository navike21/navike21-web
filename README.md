# Navike21 Web

## Overview

Navike21 Web is a modern web application built with Next.js, using the App Router and atomic design principles. It features a modular, scalable architecture for rapid development and maintainability.

## Features

- Server-side rendering (SSR) and static generation with Next.js
- Atomic design: Atoms, molecules, and reusable UI components
- Responsive, modern UI with Tailwind CSS
- Centralized state management using React Context
- Internationalization (i18n) by domain
- SEO optimized and fast page loading
- API routes and external API integration

## Project Architecture

- **Framework:** Next.js (App Router, see `src/app/`)
  +- **Component Structure:**
  - Atoms, molecules, and reusable UI in `src/libs/components/`
  - Pages and views in `src/views/pages/`
  - Constants, helpers, and types in `src/libs/constants/`, `src/libs/helpers/`, `src/libs/types/`
- **Styling:** Tailwind CSS, with global styles in `src/libs/styles/`
- **State Management:** React Context (see `src/libs/context/`)
- **Assets:** Images and backgrounds in `src/libs/assets/`

## Developer Workflows

- **Install dependencies:** `pnpm install`
- **Run development server:** `pnpm dev`
- **Build for production:** `pnpm build`
- **Start production server:** `pnpm start`
- **Lint:** `pnpm lint` (ESLint + Prettier)
- **Lint & fix:** `pnpm lint:fix`
- **Format:** `pnpm format` (Prettier)
- **Type checking:** `pnpm typecheck`

## Formatting & Linting Convergence

- ESLint y Prettier están homologados: el formateo automático al guardar (`Ctrl + S`), `pnpm run lint:fix` y `pnpm run format` producen el mismo resultado.
- `.vscode/settings.json` fuerza el uso de Prettier y ESLint al guardar.
- `.editorconfig` y `.prettierrc` están alineados para evitar inconsistencias.

## Project Conventions

- **Component Pattern:** Atomic design (atoms, molecules, etc.)
- **Exports:** Cada carpeta de componentes tiene un `index.ts` para re-exportar
- **Hooks:** Custom hooks en `src/libs/hooks/` y hooks por componente
- **i18n:** Por dominio en `src/libs/i18n/`
- **Constants:** Centralizadas en `src/libs/constants/`
- **Types:** Tipos compartidos en `src/libs/types/`
- **Context:** React context compartido en `src/libs/context/`

## Integration & Patterns

- **API Integration:** Next.js API routes o APIs externas
- **Cross-component communication:** React Context o props drilling
- **Assets:** Importa imágenes y fuentes desde `src/libs/assets/` y `src/libs/sources/fonts.ts`

## Examples

- Para agregar un nuevo átomo: crea una carpeta en `src/libs/components/atoms/`, agrega tu componente y expórtalo vía `index.ts`
- Para agregar una nueva página: crea una carpeta en `src/views/pages/`, implementa la página y actualiza el routing si es necesario

## References

- Ver `eslint.config.mjs` y `tsconfig.json` para configuración de linting y TypeScript
- Ver `.github/copilot-instructions.md` para instrucciones detalladas para agentes AI y desarrolladores
