import { describe, expect, it } from 'vitest'
import { hasTextClassColor } from '../hasTextClassColor'

describe('hasTextClassColor', () => {
  it('returns false when className is undefined', () => {
    expect(hasTextClassColor()).toBe(false)
  })

  it('returns false when className is an empty string', () => {
    expect(hasTextClassColor('')).toBe(false)
  })

  it('returns false when className does not contain text- classes', () => {
    expect(hasTextClassColor('bg-red-500')).toBe(false)
    expect(hasTextClassColor('flex items-center')).toBe(false)
    expect(hasTextClassColor('p-4 m-2')).toBe(false)
  })

  it('returns true when className contains a text- class', () => {
    expect(hasTextClassColor('text-red-500')).toBe(true)
    expect(hasTextClassColor('text-blue-600')).toBe(true)
    expect(hasTextClassColor('text-slate-500')).toBe(true)
  })

  it('returns true when className contains multiple classes including text-', () => {
    expect(hasTextClassColor('bg-red-500 text-blue-600')).toBe(true)
    expect(hasTextClassColor('flex items-center text-slate-500')).toBe(true)
    expect(hasTextClassColor('p-4 text-red-500 m-2')).toBe(true)
  })

  it('returns false when className contains classes that start with text but are not text- classes', () => {
    expect(hasTextClassColor('texture-bg')).toBe(false)
    expect(hasTextClassColor('textured-surface')).toBe(false)
  })

  it('handles multiple spaces correctly', () => {
    expect(hasTextClassColor('bg-red-500  text-blue-600')).toBe(true)
    expect(hasTextClassColor('  text-red-500  ')).toBe(true)
    expect(hasTextClassColor('flex   items-center')).toBe(false)
  })

  it('handles classes with hyphens correctly', () => {
    expect(hasTextClassColor('text-red-500')).toBe(true)
    expect(hasTextClassColor('text-blue-600')).toBe(true)
    expect(hasTextClassColor('text-slate-900')).toBe(true)
    expect(hasTextClassColor('text-indigo-500')).toBe(true)
  })
})
