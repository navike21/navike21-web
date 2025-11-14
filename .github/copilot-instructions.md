# Copilot Instructions for Navike21 Web

## Project Architecture

- **Framework:** Next.js (App Router, see `src/app/`)
- **Component Structure:**
  - Atoms, molecules, and reusable UI in `src/libs/components/`
  - Pages and views in `src/views/pages/`
  - Constants, helpers, and types in `src/libs/constants/`, `src/libs/helpers/`, `src/libs/types/`
- **Styling:** Tailwind CSS, with global styles in `src/styles/`
- **State Management:** React Context (see `src/libs/context/`)
- **Assets:** Images and backgrounds in `src/libs/assets/`

## Developer Workflows

- **Install dependencies:** `pnpm install`
- **Run development server:** `pnpm dev`
- **Build for production:** `pnpm build`
- **Start production server:** `pnpm start`
- **Lint:** `pnpm lint` (uses ESLint, config in `eslint.config.mjs`)
- **Type checking:** `pnpm typecheck`

## Formatting & Linting Convergence

- **Homologación ESLint + Prettier:**
  - El proyecto está configurado para que ESLint y Prettier trabajen juntos, usando `eslint-plugin-prettier` y reglas alineadas en `.prettierrc` y `eslint.config.mjs`.
  - El formateo automático al guardar (`Ctrl + S`) y los comandos `pnpm run lint:fix` y `pnpm run format` producen el mismo resultado.
  - No hay conflicto ni "ping-pong" de cambios entre ambos sistemas.
- **Flujo recomendado:**
  - Usa `pnpm run lint` para validar código y formato.
  - Usa `pnpm run lint:fix` para corregir ambos (ESLint y Prettier).
  - Usa `pnpm run format` para formatear todo el proyecto con Prettier.
  - Al guardar archivos en VSCode, se aplican automáticamente las reglas de ESLint y Prettier.
- **Configuración relevante:**
  - `.vscode/settings.json` fuerza el uso de Prettier y ESLint al guardar.
  - `.editorconfig` y `.prettierrc` están alineados para evitar inconsistencias.
  - Si algún archivo se comporta diferente, revisa que esté incluido en `eslint.validate` y no esté en la lista de ignores.

## Project Conventions

- **Component Pattern:** Follows atomic design (atoms, molecules, etc.)
- **Exports:** Each component folder has an `index.ts` for re-exports
- **Hooks:** Custom hooks in `src/libs/hooks/` and per-component hooks (e.g., `divider.hooks.ts`)
- **i18n:** Organized by domain in `src/libs/i18n/`
- **Constants:** Centralized in `src/libs/constants/`
- **Types:** All shared types in `src/libs/types/`
- **Context:** Shared React context in `src/libs/context/`

## Integration & Patterns

- **API Integration:** Use Next.js API routes or external APIs as needed
- **Cross-component communication:** Use React Context or props drilling
- **Assets:** Import images/fonts from `src/libs/assets/` and `src/libs/sources/fonts.ts`

## Examples

- To add a new atom: create a folder in `src/libs/components/atoms/`, add your component, and export via `index.ts`
- To add a new page: add a folder in `src/views/pages/`, implement the page, and update routing if needed

## References

- See `README.md` for high-level overview
- See `eslint.config.mjs` and `tsconfig.json` for linting and TypeScript setup

---

For any unclear conventions or missing documentation, ask for clarification or check similar patterns in the codebase.
