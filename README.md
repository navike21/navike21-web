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

### Testing

The project uses **Vitest** for unit testing with full TypeScript and React support.

#### Available Test Commands

- **Run all tests:** `pnpm test`
- **Run tests in watch mode:** `pnpm test:watch`
- **Run tests with UI:** `pnpm test:ui`
- **Generate coverage report:** `pnpm test:coverage`

#### Test File Conventions

- Test files should be named `*.test.ts` or `*.test.tsx`
- Place test files next to the components/functions they test
- Example: `Button.tsx` → `Button.test.tsx`

#### Writing Tests

**Example: Testing a utility function**

```typescript
import { describe, it, expect } from 'vitest'
import { uuid } from './uuid'

describe('uuid helper', () => {
  it('should generate a valid UUID v4', () => {
    const generatedUuid = uuid()
    expect(generatedUuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  })
})
```

**Example: Testing a React component**

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button component', () => {
  it('should render children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Test Coverage

Coverage reports are generated in the `coverage/` directory and include:

- Line coverage
- Function coverage
- Branch coverage
- Statement coverage

Current thresholds: 70% for all metrics.

#### Testing Libraries

- **Vitest:** Fast unit test framework
- **@testing-library/react:** React component testing utilities
- **@testing-library/user-event:** User interaction simulation
- **@testing-library/jest-dom:** Custom Jest DOM matchers

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
