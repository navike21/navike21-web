// Minimal mock types for Lenis to fix test errors
export interface Lenis {
  raf: (time: number) => void
  stop: () => void
  start: () => void
}

export interface LenisRef {
  lenis?: Lenis
}
