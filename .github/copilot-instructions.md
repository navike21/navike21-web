# Copilot Instructions (Navike21 Web)

## Big picture
- Next.js App Router: route files in `src/app/**` are thin wrappers that render view modules from `src/views/pages/**` (example: `src/app/page.tsx` → `src/views/pages/Home/Home.tsx`).
- UI follows atomic design: reusable atoms/molecules live in `src/libs/components/**` and are re-exported via per-folder `index.ts` (see `src/libs/components/README.md`).
- Global shell is composed in `src/app/layout.tsx`: `HeaderProvider` → `Header` + `Menu` + `LayoutScroll`; `Footer` is outside the provider.

## Imports & paths
- Prefer TS path aliases from `tsconfig.json`: `@Components`, `@Pages`, `@Context`, `@I18n`, `@Helpers`, `@Styles`, etc.
- Global styles are under `src/libs/styles/**` and imported via `@Styles/globals.css` in `src/app/layout.tsx`.

## State + cross-component behavior
- Header/menu state is centralized in `src/libs/context/HeaderContext.tsx` and consumed via `useHeaderContext` (`src/libs/context/headerContext.hooks.ts`).
- Smooth scrolling is implemented by `LayoutScroll` (`src/libs/components/molecules/LayoutScroll/**`) using `lenis` + `motion` frame loop; it stops scroll when `toggleMenu` is true.
- Menu overlay animation uses `motion/react` variants (see `src/libs/components/molecules/Menu/menu.hooks.ts`).

## i18n pattern
- i18n content is plain TS objects grouped by domain under `src/libs/i18n/**`, indexed by language constants (e.g., `ESP` from `src/libs/constants/languages.ts`).
- Page hooks typically select the current language explicitly (example: `src/views/pages/Home/home.hooks.ts`).

## Dev workflows (local + CI)
- Local: `pnpm dev` (Turbopack), `pnpm build`, `pnpm start`, `pnpm validate` (typecheck+lint), `pnpm format`.
- Tests: Vitest + Testing Library (`pnpm test`, `pnpm test:coverage`). Environment/mocks live in `vitest.setup.ts` (e.g., `IntersectionObserver`, `ResizeObserver`, `matchMedia`).
- Coverage: thresholds are 70% and several directories are excluded (see `vitest.config.ts`).
- CI (GitHub Actions) runs `typecheck`, `lint`, `format:check`; release also runs `build:ci` (see `.github/workflows/*.yml`).
