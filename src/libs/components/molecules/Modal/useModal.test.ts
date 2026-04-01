import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useModal } from './useModal'

describe('useModal', () => {
  it('should be closed by default', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isOpen).toBe(false)
  })

  it('should respect the initialOpen option', () => {
    const { result } = renderHook(() => useModal({ initialOpen: true }))

    expect(result.current.isOpen).toBe(true)
  })

  it('should open and close the modal', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.openModal()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.closeModal()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('should trigger onClose when closeModal is called', () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useModal({ initialOpen: true, onClose })
    )

    act(() => {
      result.current.closeModal()
    })

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(result.current.isOpen).toBe(false)
  })

  it('should trigger onClose when toggleModal closes the modal', () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useModal({ initialOpen: true, onClose })
    )

    act(() => {
      result.current.toggleModal()
    })

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(result.current.isOpen).toBe(false)
  })
})
