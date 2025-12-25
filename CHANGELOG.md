# Changelog

All notable changes to this project will be documented in this file.

## 1.0.0 (2025-12-25)

### Highlights

- Introduces a hardened, merge-blocking CI gate for pull requests.
- Adds a structured branch promotion flow: `develop` → `release` → `main`.
- Establishes Vitest + Testing Library setup with coverage support and test quality improvements.

### CI/CD

- Pins GitHub Actions to full commit SHAs for supply-chain hardening.
- Adds a single PR gate workflow with conditional validation by base branch.
- Integrates SonarCloud scanning (with quality gate waiting on `develop`).
- Adds Vercel preview deploy + PR comment in the `develop` PR flow.

### Testing

- Adds/expands unit tests across atoms/molecules and improves assertions to satisfy static analysis.
- Sets up Vitest environment mocks (e.g., observers, matchMedia).

### App/Architecture

- Next.js App Router structure with page modules under `src/views/pages/**`.
- Centralizes header/menu state via context and hooks.

### Tooling

- Adds/updates linting + formatting rules and ignores CI definitions where desired.
- Keeps dependency management aligned with pnpm and project engine constraints.
