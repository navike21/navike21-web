---
applyTo: '**/*.ts,**/*.tsx'
---

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
