import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLayoutScroll } from './LayoutScroll.hooks'
import type { LenisRef } from '@Types/lenis-mock'
import * as HeaderContext from '@Context/headerContext.hooks'
import * as lenisLockHook from '@Hooks/useLenisScrollLock'
import * as motion from 'motion'

vi.mock('@Context/headerContext.hooks')
vi.mock('@Hooks/useLenisScrollLock')

vi.mock('motion', () => ({
  frame: {
    update: vi.fn()
  },
  cancelFrame: vi.fn()
}))

function useLayoutScrollWithNullLenis() {
  const hook = useLayoutScroll()
  hook.lenisRef.current = {
    lenis: undefined,
    wrapper: null,
    content: null
  } as unknown as LenisRef
  return hook
}

function renderLayoutScrollWithLenisRef(lenisRefValue: LenisRef) {
  return renderHook(() => {
    const hook = useLayoutScroll()
    hook.lenisRef.current = lenisRefValue
    return hook
  })
}

describe('useLayoutScroll', () => {
  beforeEach(() => {
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: false,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
    vi.mocked(motion.frame.update).mockClear()
    vi.mocked(motion.cancelFrame).mockClear()
    vi.mocked(lenisLockHook.useLenisScrollLock).mockClear()
  })

  it('should return lenisRef', () => {
    const { result } = renderHook(() => useLayoutScroll())
    expect(result.current.lenisRef).toBeDefined()
    expect(result.current.lenisRef.current).toBeNull()
  })

  it('should register frame update on mount', () => {
    renderHook(() => useLayoutScroll())
    expect(motion.frame.update).toHaveBeenCalled()
    expect(motion.frame.update).toHaveBeenCalledWith(expect.any(Function), true)
  })

  it('should sync closed menu state with shared scroll lock', () => {
    renderHook(() => useLayoutScroll())
    expect(lenisLockHook.useLenisScrollLock).toHaveBeenCalledWith(false)
  })

  it('should sync open menu state with shared scroll lock', () => {
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: true,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })

    renderHook(() => useLayoutScroll())
    expect(lenisLockHook.useLenisScrollLock).toHaveBeenCalledWith(true)
  })

  it('should cleanup frame update on unmount', () => {
    const { unmount } = renderHook(() => useLayoutScroll())
    unmount()
    expect(motion.cancelFrame).toHaveBeenCalled()
    expect(motion.cancelFrame).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should call lenis.raf on frame update', () => {
    const mockRaf = vi.fn()
    const { result } = renderHook(() => useLayoutScroll())

    result.current.lenisRef.current = {
      lenis: { raf: mockRaf, stop: vi.fn(), start: vi.fn() },
      wrapper: null,
      content: null
    } as unknown as LenisRef

    const updateCallback = vi.mocked(motion.frame.update).mock.calls[0]?.[0]

    act(() => {
      updateCallback?.({ timestamp: 123, delta: 0, isProcessing: false })
    })

    expect(mockRaf).toHaveBeenCalledWith(123)
  })

  it('should return early if lenis is undefined', () => {
    const { unmount } = renderHook(() => useLayoutScrollWithNullLenis())

    const updateCallback = vi.mocked(motion.frame.update).mock.calls[0]?.[0]
    expect(updateCallback).toEqual(expect.any(Function))

    expect(() => {
      updateCallback?.({ timestamp: 123, delta: 0, isProcessing: false })
    }).not.toThrow()

    expect(() => unmount()).not.toThrow()
  })
})
