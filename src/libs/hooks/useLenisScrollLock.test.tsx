import { cleanup, renderHook } from '@testing-library/react'
import * as lenisReact from 'lenis/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useLenisScrollLock } from './useLenisScrollLock'

vi.mock('lenis/react', () => ({
  useLenis: vi.fn()
}))

describe('useLenisScrollLock', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  })

  afterEach(() => {
    cleanup()
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  })

  it('should stop lenis while the lock is active and restart it once released', () => {
    const lenis = {
      start: vi.fn(),
      stop: vi.fn()
    }

    vi.mocked(lenisReact.useLenis).mockReturnValue(
      lenis as unknown as ReturnType<typeof lenisReact.useLenis>
    )

    const { rerender } = renderHook(
      ({ isLocked }) => useLenisScrollLock(isLocked),
      {
        initialProps: {
          isLocked: true
        }
      }
    )

    expect(lenis.stop).toHaveBeenCalledTimes(1)
    expect(lenis.start).not.toHaveBeenCalled()

    rerender({ isLocked: false })

    expect(lenis.start).toHaveBeenCalledTimes(1)
  })

  it('should keep lenis stopped until the last lock is released', () => {
    const lenis = {
      start: vi.fn(),
      stop: vi.fn()
    }

    vi.mocked(lenisReact.useLenis).mockReturnValue(
      lenis as unknown as ReturnType<typeof lenisReact.useLenis>
    )

    const firstLock = renderHook(
      ({ isLocked }) => useLenisScrollLock(isLocked),
      {
        initialProps: {
          isLocked: true
        }
      }
    )
    const secondLock = renderHook(
      ({ isLocked }) => useLenisScrollLock(isLocked),
      {
        initialProps: {
          isLocked: true
        }
      }
    )

    firstLock.rerender({ isLocked: false })

    expect(lenis.start).not.toHaveBeenCalled()

    secondLock.rerender({ isLocked: false })

    expect(lenis.start).toHaveBeenCalledTimes(1)
  })

  it('should fall back to document scroll lock when lenis is unavailable', () => {
    vi.mocked(lenisReact.useLenis).mockReturnValue(undefined)

    const { rerender } = renderHook(
      ({ isLocked }) => useLenisScrollLock(isLocked),
      {
        initialProps: {
          isLocked: true
        }
      }
    )

    expect(document.documentElement.style.overflow).toBe('hidden')
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.body.style.touchAction).toBe('none')

    rerender({ isLocked: false })

    expect(document.documentElement.style.overflow).toBe('')
    expect(document.body.style.overflow).toBe('')
    expect(document.body.style.touchAction).toBe('')
  })
})
