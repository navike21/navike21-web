import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useInputField } from './inputField.hooks'

describe('useInputField', () => {
  it('returns default values for text type', () => {
    const { result } = renderHook(() => useInputField({ type: 'text' }))

    expect(result.current.idField).toBeDefined()
    expect(result.current.showPassword).toBe(false)
    expect(result.current.typeField).toBe('text')
    expect(typeof result.current.handleClassSlot).toBe('function')
    expect(typeof result.current.handleChangeTypePassword).toBe('function')
  })

  it('returns correct typeField for password when showPassword is false', () => {
    const { result } = renderHook(() => useInputField({ type: 'password' }))

    expect(result.current.typeField).toBe('password')
  })

  it('returns correct typeField for password when showPassword is true', () => {
    const { result } = renderHook(() => useInputField({ type: 'password' }))

    act(() => {
      result.current.handleChangeTypePassword()
    })

    expect(result.current.showPassword).toBe(true)
    expect(result.current.typeField).toBe('text')
  })

  it('toggles showPassword correctly', () => {
    const { result } = renderHook(() => useInputField({ type: 'password' }))

    expect(result.current.showPassword).toBe(false)

    act(() => {
      result.current.handleChangeTypePassword()
    })

    expect(result.current.showPassword).toBe(true)

    act(() => {
      result.current.handleChangeTypePassword()
    })

    expect(result.current.showPassword).toBe(false)
  })

  it('generates unique idField', () => {
    const { result: result1 } = renderHook(() =>
      useInputField({ type: 'text' })
    )
    const { result: result2 } = renderHook(() =>
      useInputField({ type: 'text' })
    )

    expect(result1.current.idField).not.toBe(result2.current.idField)
  })

  it('handleClassSlot returns correct classes for text type left position', () => {
    const { result } = renderHook(() => useInputField({ type: 'text' }))

    const classes = result.current.handleClassSlot('text', 'left')
    expect(classes).toContain('px-3')
    expect(classes).toContain(
      'flex items-center justify-left min-w-5 text-xs text-slate-900 font-semibold h-10'
    )
    expect(classes).toContain('[&>svg]:size-5')
  })

  it('handleClassSlot returns correct classes for email type left position', () => {
    const { result } = renderHook(() => useInputField({ type: 'email' }))

    const classes = result.current.handleClassSlot('email', 'left')
    expect(classes).toContain('pr-3')
    expect(classes).not.toContain('px-3')
  })

  it('handleClassSlot returns correct classes for password type right position', () => {
    const { result } = renderHook(() => useInputField({ type: 'password' }))

    const classes = result.current.handleClassSlot('password', 'right')
    expect(classes).toContain('pl-3 pr-3')
  })

  it('handleClassSlot returns correct classes for text type right position', () => {
    const { result } = renderHook(() => useInputField({ type: 'text' }))

    const classes = result.current.handleClassSlot('text', 'right')
    expect(classes).toContain('px-3')
  })

  it('defaults to text type when no type provided', () => {
    const { result } = renderHook(() => useInputField({}))

    expect(result.current.typeField).toBe('text')
  })
})
