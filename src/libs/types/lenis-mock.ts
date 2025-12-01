import type { LenisRef as LenisReactRef } from 'lenis/react'

// Re-export LenisRef so tests can reference the official type without
// importing directly from the ESM bundle during Vitest runs.
export type LenisRef = LenisReactRef
