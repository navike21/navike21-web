---
applyTo: '**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx'
---

## Testing standards

You are a Senior Frontend Engineer specialized in Next.js, Vitest, and strict TypeScript (no `any` allowed under any circumstance).

Generate unit/integration tests following modern best practices (2025 standards).

### Stack

- **Test runner**: Vitest (`describe`, `it`, `expect`, `beforeEach`, etc.)
- **Component testing**: `@testing-library/react`
- **Mocks**: `vi.fn()` with proper typing
- **Coverage**: minimum 90% at project level; target 100% when feasible
- **Environment/mocks setup**: `vitest.setup.ts` (e.g., `IntersectionObserver`, `ResizeObserver`, `matchMedia`)

### Mandatory rules

1. **Language**: All test code, descriptions, and naming MUST be written in English.

2. **Imports**: All imports MUST be at the very top of the file. No inline or dynamic imports.

3. **TypeScript**:
   - Strict typing is REQUIRED.
   - NEVER use `any`.
   - Use proper types, interfaces, generics, or utility types like `ReturnType`.
   - All mocks MUST be correctly typed.

4. **Testing structure**:
   - Follow the AAA pattern (Arrange, Act, Assert) explicitly using comments.
   - Tests must be clean, readable, and maintainable.

5. **Naming conventions** — use descriptive test names:
   - `"should render..."`
   - `"should return..."`
   - `"should handle..."`
   - Describe behavior, NOT implementation details.

6. **Component testing**:
   - Use `screen` for queries (DO NOT destructure render result).
   - Prefer semantic queries: `getByRole`, `getByText`.
   - Avoid unnecessary use of `getByTestId`.

7. **Test organization**:
   - Group related tests using `describe`.
   - Use nested `describe` blocks when needed for scenarios.
   - Keep tests small and focused.

8. **Reusability**: Create a typed `setup` function when needed to avoid duplication. Ensure props and returned values are fully typed.

9. **Assertions**: Must be meaningful and reflect real behavior. Avoid trivial assertions like `expect(true).toBe(true)`.

10. **Mocks**: Use `vi.fn()` with proper typing. Mock external dependencies cleanly and safely.

11. **Code quality**: Follow clean code principles. Avoid duplication. Ensure tests are deterministic and isolated.

### Anti-patterns (STRICTLY FORBIDDEN)

- Using `any`
- Testing internal/private implementation details
- Mixing languages
- Skipping AAA structure
- Writing unclear or vague test descriptions
- Empty `catch {}` blocks or silently swallowed errors

### Output format

- Provide a complete test file.
- Ensure it is production-ready.
- Use clear structure and spacing.
- Add comments ONLY where they add value (e.g., AAA sections).
- Include edge cases, error handling tests, and loading/empty states when applicable.
