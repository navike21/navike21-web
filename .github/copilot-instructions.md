# Copilot Instructions (Navike21 Web)

## Commit & PR conventions (Conventional Commits)

Language policy:

- Commit messages MUST be written in English.
- Pull Request title and description MUST be written in English.

When creating commits and PRs for this repository, follow this format:

Recommended format (when an issue exists):

`<type>(<scope>): <short description> (#<issue>)`

Allowed format (when there is no issue):

`<type>(<scope>): <short description>`

Rules:

- `type` and `scope` are lowercase.
- `short description` is imperative, present tense, and concise (ideally ≤ 72 chars).
- `(#<issue>)` is recommended when an issue exists; omit it if there is no issue.
- Use `!` for breaking changes: `feat(auth)!: change token format (#88)`.
- Avoid vague titles like "Update stuff", "Fix bug", "WIP".

Allowed `type` values:

- `feat` | `fix` | `docs` | `style` | `refactor` | `perf` | `test` | `build` | `ci` | `chore` | `revert`

Recommended `scope` values:

- `web` | `api` | `ui` | `auth` | `seo` | `i18n` | `config` | `infra`

Examples (good):

- `feat(web): add multilingual homepage (#42)`
- `fix(api): handle expired tokens (#57)`
- `refactor(ui): simplify navbar structure (#63)`
- `docs(config): update setup instructions (#71)`
- `chore(build): update next.js to latest (#90)`

Examples (bad):

- `Update stuff`
- `Fix bug`
- `Add feature`
- `WIP login`

## GitFlow / branching policy

Branch chain (promotion):

`feature/*` → `develop` → `release` → `main`

Goals:

- Keep `release` and `main` aligned (production parity).
- Keep `develop` always releasable (or safe via feature flags).
- Avoid cherry-picks for normal releases.

Rules for merging into `develop`:

- Do NOT merge incomplete work into `develop`.
- Exception: work-in-progress is allowed only if it is fully protected by a feature flag and defaults to OFF in `release`/`main`.
- Even behind a flag, code must pass checks (typecheck/lint/tests) and should not degrade coverage thresholds.

PR validation scope (recommended):

- If a PR changes application code (typically `src/**`), it must include QA validation + tests + coverage.
- If a PR only changes docs/CI/config (no `src/**` changes), QA/coverage can be marked as `N/A` (still keep lint/format/typecheck as appropriate).

Feature flags (recommended):

- Prefer environment-controlled flags (example: `NEXT_PUBLIC_FEATURE_X=false`).
- The code path must be safe when the flag is OFF.

Keeping feature branches up to date (recommended):

- If a `feature/*` branch is behind `develop`, prefer rebasing to reduce merge noise and conflicts.
- Typical workflow:
  - `git fetch origin`
  - `git rebase origin/develop`
  - Resolve conflicts, then `git push --force-with-lease`

Promotion to `release` and `main` (no cherry-pick):

- QA validates via PR preview on `feature/* → develop`.
- When the set of changes in `develop` is approved for release, open a PR:
  - `develop → release`
  - QA validates again on `release` (final staging validation).
- When `release` is approved, open a PR:
  - `release → main`
  - Tag the release on `main` (e.g., `vX.Y.Z`) and publish GitHub Release notes.

Keeping `release` and `main` equal:

- `main` must only receive changes via PRs from `release`.
- If anything advances `main` (hotfix, release merge), immediately sync back with PRs so branches remain aligned:
  - `main → release` (if needed)
  - `release → develop` (so fixes are not lost)

When multiple teams are working:

- Either keep `develop` strict (only fully complete work), OR allow merging behind feature flags.
- This prevents `release` from being “corrupted” when promoting `develop → release`.

## Big picture

- Next.js App Router: route files in `src/app/**` are thin wrappers that render view modules from `src/views/pages/**` (example: `src/app/page.tsx` → `src/views/pages/Home/Home.tsx`).
- UI follows atomic design: reusable atoms/molecules live in `src/libs/components/**` and are re-exported via per-folder `index.ts` (see `src/libs/components/README.md`).
- Global shell is composed in `src/app/layout.tsx`: `HeaderProvider` → `Header` + `Menu` + `LayoutScroll`; `Footer` is outside the provider.

## Imports & paths

- Prefer TS path aliases from `tsconfig.json`: `@Components`, `@Pages`, `@Context`, `@I18n`, `@Helpers`, `@Styles`, etc.
- Global styles are under `src/libs/styles/**` and imported via `@Styles/globals.css` in `src/app/layout.tsx`.

## TypeScript standards (no `any`)

This is a Next.js + TypeScript + Tailwind project. Code must follow modern TS best practices.

Hard rules:

- Do NOT introduce `any` (including `any[]`, `Record<string, any>`, and `as any`).
- Do NOT suggest or add `// @ts-ignore` or `// @ts-nocheck`.
- Do NOT disable lint rules to allow unsafe typing.

Preferred alternatives:

- Use `unknown` instead of `any`, then narrow via type guards.
- Prefer generics, discriminated unions, and `satisfies` for safer inference.
- When dealing with untyped data (API/JSON), parse + validate and return typed results.
- Use `type` imports (`import type { ... }`) where applicable.

React/Next.js typing guidance:

- Prefer explicit component prop types and avoid implicit `any` in callbacks.
- When interacting with DOM APIs, type the element refs and events properly.
- Keep server/client boundaries clear (App Router): avoid leaking server-only types into client components.

Tailwind guidance:

- Prefer Tailwind utility classes and existing tokens; avoid introducing ad-hoc styles.
- Keep `className` composition typed and readable (e.g., `clsx`).

## Logging & error handling

Logging policy:

- Do NOT leave `console.*` or `debugger` statements in committed code.
- If you need diagnostics, prefer:
  - returning a typed error result (or a safe fallback) and letting the UI render a friendly message, or
  - throwing and relying on Next.js error boundaries where appropriate.

Try/catch policy:

- Avoid `try/catch` unless you can _meaningfully_ handle the error (recover, fallback, translate to user-safe message, or rethrow with context).
- Never swallow errors silently: no empty `catch {}` blocks.
- Treat caught errors as `unknown` and narrow before using:
  - `catch (err: unknown) { ... }` (preferred), then narrow via type guards.
  - For Promise chains, `.catch((err: unknown) => { ... })`.
- If you cannot recover, rethrow (optionally wrap) and let a higher-level boundary handle it.

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
- Coverage: minimum thresholds are 90% (target 100% when feasible) and several directories are excluded (see `vitest.config.ts`).
- CI (GitHub Actions) runs `typecheck`, `lint`, `format:check`; release also runs `build:ci` (see `.github/workflows/*.yml`).

## VS Code Git workflow (GitLens-first)

When operating from VS Code, prefer GitLens for Git actions whenever possible.

- Commits: use GitLens/VS Code Source Control for staging + committing.
- Pull Requests: try GitLens PR/remote integration first (when the provider is configured and the UI exposes “Create Pull Request” / PR actions).
- Fallback: if GitLens cannot create/manage PRs in the current environment, use the official VS Code extension `GitHub Pull Requests and Issues` (`GitHub.vscode-pull-request-github`) for creating and managing PRs.

Language reminder: keep commit messages and PR titles/descriptions in English.

Note: If the user explicitly asks for CLI Git, follow the request; otherwise keep the default preference above.

## Releases (SemVer + Release Please)

- Versioning: SemVer (`1.0.1` → `1.0.2`), tags must be `vX.Y.Z`.
- Automation: Release Please runs on the `release` branch and opens a Release PR that updates `CHANGELOG.md` + `package.json` version.
- After merging the Release PR, Release Please creates the git tag and GitHub Release.
- Language reminder: PR title/description must be written in English.
