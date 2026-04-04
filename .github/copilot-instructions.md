# Copilot Instructions (Navike21 Web)

> Additional scoped instructions live in `.github/instructions/`:
>
> - `typescript.instructions.md` — TypeScript standards & error handling (applied to `*.ts`, `*.tsx`)
> - `testing.instructions.md` — Testing standards with Vitest & Testing Library (applied to `*.test.*`, `*.spec.*`)
> - `storybook.instructions.md` — Storybook patterns (applied to `*.stories.*`)

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
- Coverage: minimum thresholds are 90% at project level (target 100% when feasible) and several directories are excluded (see `vitest.config.ts`).
- CI (GitHub Actions) runs `typecheck`, `lint`, `format:check`; release also runs `build:ci` (see `.github/workflows/*.yml`).

## VS Code Git workflow (GitKraken-first)

When operating from VS Code, prefer GitKraken MCP tools for all Git actions.

- Commits: use `mcp_gitkraken_git_add_or_commit` for staging and committing. Always follow Conventional Commits format defined above.
- Branches: use `mcp_gitkraken_git_branch` and `mcp_gitkraken_git_checkout`.
- Push: use `mcp_gitkraken_git_push`.
- Status/diff: use `mcp_gitkraken_git_status` and `mcp_gitkraken_git_log_or_diff`.
- Pull Requests: use `mcp_gitkraken_pull_request_create` (GitKraken MCP) first. If not available, fall back to the `GitHub Pull Requests and Issues` VS Code extension (`GitHub.vscode-pull-request-github`).
- GitLens: use only as a secondary option if GitKraken MCP is unavailable.

Language reminder: keep commit messages and PR titles/descriptions in English.

Note: If the user explicitly asks for CLI Git, follow the request; otherwise keep the default preference above.

## Releases (SemVer + Release Please)

- Versioning: SemVer (`1.0.1` → `1.0.2`), tags must be `vX.Y.Z`.
- Automation: Release Please runs on the `release` branch and opens a Release PR that updates `CHANGELOG.md` + `package.json` version.
- After merging the Release PR, Release Please creates the git tag and GitHub Release.
- Language reminder: PR title/description must be written in English.
