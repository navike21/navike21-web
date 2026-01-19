import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useLayoutScroll } from './LayoutScroll.hooks'
import type { LenisRef } from '@Types/lenis-mock'
import * as HeaderContext from '@Context/headerContext.hooks'
import * as motion from 'motion'

vi.mock('@Context/headerContext.hooks')

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

  it('should cleanup frame update on unmount', () => {
    const { unmount } = renderHook(() => useLayoutScroll())
    unmount()
    expect(motion.cancelFrame).toHaveBeenCalled()
    expect(motion.cancelFrame).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should call lenis.raf on frame update', () => {
    const mockRaf = vi.fn()
    const { result } = renderHook(() => useLayoutScroll())
    // Simular instancia de lenis
    result.current.lenisRef.current = {
      lenis: { raf: mockRaf, stop: vi.fn(), start: vi.fn() },
      wrapper: null,
      content: null
    } as unknown as LenisRef
    // Obtener callback registrado
    const updateCallback = vi.mocked(motion.frame.update).mock.calls[0]?.[0]
    act(() => {
      updateCallback?.({ timestamp: 123, delta: 0, isProcessing: false })
    })
    expect(mockRaf).toHaveBeenCalledWith(123)
  })

  it('should stop lenis when toggleMenu is true', () => {
    const mockStop = vi.fn()
    const mockStart = vi.fn()
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: true,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
    const { result } = renderHook(() => useLayoutScroll())
    act(() => {
      result.current.lenisRef.current = {
        lenis: { raf: vi.fn(), stop: mockStop, start: mockStart },
        wrapper: null,
        content: null
      } as unknown as LenisRef
    })
    act(() => {
      // Forzar re-render para disparar el efecto
      result.current.lenisRef.current?.lenis?.stop()
    })
    expect(mockStop).toHaveBeenCalled()
  })

  it('should start lenis when toggleMenu is false', () => {
    const mockStop = vi.fn()
    const mockStart = vi.fn()
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: false,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
    const { result } = renderHook(() => useLayoutScroll())
    act(() => {
      result.current.lenisRef.current = {
        lenis: { raf: vi.fn(), stop: mockStop, start: mockStart },
        wrapper: null,
        content: null
      } as unknown as LenisRef
    })
    act(() => {
      result.current.lenisRef.current?.lenis?.start()
    })
    expect(mockStart).toHaveBeenCalled()
  })

  it('should cleanup and restart lenis on unmount when menu is toggled', () => {
    const mockStop = vi.fn()
    const mockStart = vi.fn()
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: true,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
    const { unmount } = renderLayoutScrollWithLenisRef({
      lenis: { raf: vi.fn(), stop: mockStop, start: mockStart },
      wrapper: null,
      content: null
    } as unknown as LenisRef)
    unmount()
    expect(mockStart).toHaveBeenCalled()
  })

  it('should return early if lenis is undefined', () => {
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: true,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
    const { unmount } = renderHook(() => useLayoutScrollWithNullLenis())

    const updateCallback = vi.mocked(motion.frame.update).mock.calls[0]?.[0]
    expect(updateCallback).toEqual(expect.any(Function))
    expect(() => {
      updateCallback?.({ timestamp: 123, delta: 0, isProcessing: false })
    }).not.toThrow()

    // No debe lanzar error
    expect(() => unmount()).not.toThrow()
  })

  it('should automatically start lenis when menu is closed', async () => {
    const toggleState = { value: false }
    vi.mocked(HeaderContext.useHeaderContext).mockImplementation(() => ({
      toggleMenu: toggleState.value,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    }))

    const mockStart = vi.fn()
    const mockStop = vi.fn()

    renderLayoutScrollWithLenisRef({
      lenis: { raf: vi.fn(), stop: mockStop, start: mockStart },
      wrapper: null,
      content: null
    } as unknown as LenisRef)

    await waitFor(() => {
      expect(mockStart).toHaveBeenCalledTimes(1)
    })
    expect(mockStop).not.toHaveBeenCalled()
  })

  it('should automatically stop lenis when menu opens', async () => {
    const toggleState = { value: false }
    vi.mocked(HeaderContext.useHeaderContext).mockImplementation(() => ({
      toggleMenu: toggleState.value,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    }))

    const mockStart = vi.fn()
    const mockStop = vi.fn()

    const { rerender } = renderLayoutScrollWithLenisRef({
      lenis: { raf: vi.fn(), stop: mockStop, start: mockStart },
      wrapper: null,
      content: null
    } as unknown as LenisRef)

    await waitFor(() => {
      expect(mockStart).toHaveBeenCalledTimes(1)
    })

    act(() => {
      toggleState.value = true
      rerender()
    })

    await waitFor(() => {
      expect(mockStop).toHaveBeenCalledTimes(1)
    })
  })
})
