import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Cleanup after each test case
afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver (needed for many Next.js components)
class MockIntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []

  private readonly _callback: IntersectionObserverCallback
  private readonly _options: IntersectionObserverInit | undefined

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    // no-op
    this._callback = callback
    this._options = options
  }

  disconnect() {
    return undefined
  }

  observe(_target: Element) {
    return undefined
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  unobserve(_target: Element) {
    return undefined
  }
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  configurable: true,
  writable: true,
  value: MockIntersectionObserver as unknown as typeof IntersectionObserver
})

// Mock ResizeObserver (needed for some animations/layout components)
class MockResizeObserver {
  private readonly _callback: ResizeObserverCallback

  constructor(callback: ResizeObserverCallback) {
    this._callback = callback
  }
  disconnect() {
    return undefined
  }

  observe(_target: Element, _options?: ResizeObserverOptions) {
    return undefined
  }

  unobserve(_target: Element) {
    return undefined
  }
}

Object.defineProperty(globalThis, 'ResizeObserver', {
  configurable: true,
  writable: true,
  value: MockResizeObserver as unknown as typeof ResizeObserver
})

// Mock matchMedia (needed for responsive components)
Object.defineProperty(globalThis, 'matchMedia', {
  writable: true,
  value: (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: (
        _listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any
      ) => {
        return undefined
      },
      removeListener: (
        _listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any
      ) => {
        return undefined
      },
      addEventListener: (
        _type: string,
        _listener: EventListenerOrEventListenerObject | null,
        _options?: boolean | AddEventListenerOptions
      ) => {
        return undefined
      },
      removeEventListener: (
        _type: string,
        _listener: EventListenerOrEventListenerObject | null,
        _options?: boolean | EventListenerOptions
      ) => {
        return undefined
      },
      dispatchEvent: (_event: Event) => {
        return false
      }
    }) as MediaQueryList
})
