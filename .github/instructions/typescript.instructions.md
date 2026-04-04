---
applyTo: '**/*.ts,**/*.tsx'
---

## PRIMARY RULE — Zero `any`

> **This is non-negotiable and overrides all other considerations.**

- NEVER use `any` in any form: `any`, `any[]`, `Record<string, any>`, `as any`, implicit `any`.
- NEVER add `// @ts-ignore` or `// @ts-nocheck`.
- NEVER disable ESLint rules to silence unsafe-typing warnings.

If you cannot express a type without `any`, stop and find the correct alternative:

| Instead of             | Use                                                             |
| ---------------------- | --------------------------------------------------------------- |
| `any`                  | `unknown` + type guard                                          |
| `any[]`                | `unknown[]` or a typed tuple                                    |
| `Record<string, any>`  | `Record<string, unknown>` or a typed interface                  |
| `as any`               | `satisfies`, a discriminated union, or a properly narrowed cast |
| untyped callback param | explicit parameter type or `Parameters<typeof fn>[n]`           |

## Import organisation

- **Group and order imports** in this sequence, separated by a blank line:
  1. Node built-ins (if applicable)
  2. External packages (`react`, `next`, third-party libs)
  3. Internal aliases (`@Components`, `@Context`, `@I18n`, `@Helpers`, `@Styles`, etc.)
  4. Relative paths (`./`, `../`)
  5. Type-only imports (`import type { ... }`) — always last in their group
- **No duplicate imports** from the same module. Merge named imports into a single statement.
- Use `import type { ... }` for types/interfaces that are not needed at runtime.

Example:

```ts
// ✅ correct
import { useCallback, useRef } from 'react'
import type { RefObject } from 'react'
import { clsx } from 'clsx'
import { Button } from '@Components/atoms'
import type { ButtonProps } from '@Components/atoms'
import { useHeaderContext } from './header.hooks'

// ❌ wrong — two imports from the same module
import { useCallback } from 'react'
import { useRef } from 'react'
```

## Post-change validation (mandatory)

After **every** code change, run these three commands in order and fix any new issues before considering the task done:

```bash
pnpm lint:fix       # auto-fix lint issues
pnpm typecheck      # strict TypeScript check (no emit)
pnpm format:check   # verify Prettier formatting
```

If `format:check` fails, run `pnpm format` to auto-format, then re-run `format:check`.

## TypeScript standards

This is a Next.js + TypeScript + Tailwind project. Code must follow modern TS best practices.

Additional hard rules:

- Prefer generics, discriminated unions, and `satisfies` for safer inference.
- When dealing with untyped data (API/JSON), parse + validate and return a typed result.
- Use `type` imports (`import type { ... }`) where applicable.

React/Next.js typing guidance:

- Prefer explicit component prop types and avoid implicit `any` in callbacks.
- When interacting with DOM APIs, type the element refs and events properly.
- Keep server/client boundaries clear (App Router): avoid leaking server-only types into client components.

Tailwind guidance:

- Prefer Tailwind utility classes and existing tokens; avoid introducing ad-hoc styles.
- Keep `className` composition typed and readable (e.g., `clsx`).

## SOLID principles

Apply SOLID principles when designing components, hooks, services, and utilities:

- **Single Responsibility (SRP)**: each file/function/hook does exactly one thing. Split when a unit grows two independent concerns.
- **Open/Closed (OCP)**: extend behaviour via props, composition, or new variants — never by modifying existing stable code.
- **Liskov Substitution (LSP)**: subtypes (extended interfaces, union members) must be usable wherever the base type is expected without breaking callers.
- **Interface Segregation (ISP)**: keep prop interfaces narrow. Prefer many small, focused interfaces over one large one. Avoid passing unused props through layers.
- **Dependency Inversion (DIP)**: depend on abstractions (interfaces, callback props, context) rather than on concrete implementations. Inject dependencies instead of hard-coding them.

Practical React/Next.js examples:

- Extract logic into a dedicated `*.hooks.ts` file rather than embedding it in the component (SRP).
- Accept a `renderItem` or `children` render prop instead of hardcoding rendering variations (OCP).
- Avoid prop-drilling by using context or composition (DIP).
- Split a large props interface into `BaseProps & ConditionalProps` where the conditional part is only required for specific variants (ISP).

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
