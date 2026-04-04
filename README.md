# Navike21 Web

## 👋 Overview

Navike21 Web es una aplicación web moderna con **Next.js (App Router)**, arquitectura modular y UI basada en **atomic design**. El objetivo del repo es mantener una base sólida (calidad, CI, tests, i18n, estilos) para iterar rápido sin perder mantenibilidad.

## 🧰 Tech Stack

| Área             | Stack                                   |
| ---------------- | --------------------------------------- |
| Framework        | Next.js 16.1 + App Router               |
| UI               | React 19 + Tailwind CSS                 |
| Animación/scroll | `motion` + `lenis` (`LayoutScroll`)     |
| Storybook        | Storybook 10 + `@storybook/nextjs-vite` |
| Testing          | Vitest + Testing Library                |
| Tooling          | TypeScript + ESLint + Prettier + pnpm   |

## 📦 Project Structure

### Estructura (high level)

```text
src/
  app/                  # App Router (thin route wrappers)
  views/pages/          # Vistas/páginas (módulos)
  libs/
    components/         # UI (atomic design + Storybook)
      atoms/
      molecules/
      organisms/
    context/            # Estado compartido (Header/Menu)
    i18n/               # i18n por dominio
    constants/          # Constantes
    helpers/            # Utilidades
    types/              # Tipos compartidos
    styles/             # CSS global / theme
    assets/             # Imágenes, backgrounds, fuentes
```

### 🧱 Arquitectura de carpetas

- `src/app/**`: routing App Router. Estas rutas son “thin wrappers” que renderizan módulos de vista.
- `src/views/pages/**`: páginas/vistas (ej: Home) separadas del routing.
- `src/libs/components/**`: librería de UI bajo atomic design.
  - `atoms/**`: piezas reusables pequeñas (Button, Card, Logo, etc.).
  - `molecules/**`: composiciones (Header, Menu, Footer, Clients, Slider, LayoutScroll, Modal, Select, etc.).
  - `organisms/**`: secciones completas y flujos de negocio (ej. `NewsletterForm`).
  - Re-exports por carpeta vía `index.ts`.
- `src/libs/context/**`: estado compartido (ej. header/menu) y hooks de acceso.
- `src/libs/i18n/**`: i18n por dominio en objetos TS (selección explícita por idioma).
- `src/libs/constants/**`, `src/libs/helpers/**`, `src/libs/types/**`: constantes, utilidades y tipos compartidos.
- `src/libs/assets/**`: imágenes, backgrounds y recursos.

### 🔌 Current App Entry Points

- `src/app/page.tsx` renderiza `src/views/pages/Home`.
- `src/app/layout.tsx` compone `HeaderProvider` + `Header` + `Menu` + `LayoutScroll`, y deja `Footer` fuera del provider.
- `src/libs/components/organisms/NewsletterForm/**` concentra el flujo de suscripción al boletín.

### 🧩 UI / Módulos funcionales incluidos

- Shell global con Header/Menu/LayoutScroll/Footer.
- Landing/Home compuesta desde atoms/molecules.
- Newsletter form con modal de datos adicionales y validación localizada.
- Soporte de i18n por dominio.
- Base de estilos y componentes reutilizables.

### Componentes (orientativo)

- **Atoms:** Avatar, Button, Card, Container, Divider, IconComponent, LinkButton, Logo, MenuIcon, ParallaxImage, Title, clientsLogo.
- **Molecules:** Clients, Footer, Header, ItemHeroSection, LayoutScroll, Menu, Slider, Testimonials.

## ⚙️ Workflows de desarrollo

### Quickstart

```bash
pnpm install
pnpm dev
```

### Scripts

| Acción                | Comando                |
| --------------------- | ---------------------- |
| Instalar dependencias | `pnpm install`         |
| Levantar dev server   | `pnpm dev`             |
| Build producción      | `pnpm build`           |
| Start producción      | `pnpm start`           |
| Typecheck             | `pnpm typecheck`       |
| Lint                  | `pnpm lint`            |
| Format                | `pnpm format`          |
| Validate              | `pnpm validate`        |
| Storybook             | `pnpm storybook`       |
| Build Storybook       | `pnpm build-storybook` |

## 🧪 Testing

| Acción   | Comando              |
| -------- | -------------------- |
| Tests    | `pnpm test`          |
| Coverage | `pnpm test:coverage` |

Notas:

- Setup/mocks de entorno: `vitest.setup.ts`
- Umbral de coverage: 90% a nivel de proyecto
- Los tests usan Vitest + Testing Library y conviven con Storybook para documentación visual

## 🧱 CI/CD (visión general)

### PR Gate

| Base del PR | Checks recomendados                                    |
| ----------- | ------------------------------------------------------ |
| `feature/*` | typecheck · lint · format · tests · coverage           |
| `develop`   | typecheck · lint · format · tests (coverage)           |
| `release`   | typecheck · lint · format · tests                      |
| `main`      | checks mínimos + validación final antes de publicación |

### Supply chain & deps

- 🔒 Acciones de GitHub pinneadas por SHA.
- 🤖 Dependabot con updates agrupados (menos ruido).

## 🚀 Releases (GitHub)

Este repo usa el apartado oficial de GitHub Releases para las notas de versión:
[https://github.com/navike21/navike21-web/releases](https://github.com/navike21/navike21-web/releases)

Convención recomendada para próximos releases:

1. Promoción: PR `develop` → `release`.
2. Validación en `release` (checks intermedios).
3. Pase a producción: PR `release` → `main`.
4. Publicar/actualizar la Release en GitHub (tag `vX.Y.Z`) con:
   - Highlights
   - Cambios de arquitectura
   - Componentes/módulos incluidos
   - Cambios de CI/CD y calidad
   - Cómo correr el proyecto (pnpm)

## 🔎 Referencias

- Configuración ESLint/Prettier/TS: `eslint.config.mjs`, `.prettierrc`, `tsconfig.json`
- Cobertura Vitest: `vitest.config.ts`
- Instrucciones internas: `.github/copilot-instructions.md`
