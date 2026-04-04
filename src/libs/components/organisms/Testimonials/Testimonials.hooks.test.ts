import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTestimonials } from './Testimonials.hooks'

describe('useTestimonials', () => {
  it('should expose base slider options', () => {
    const { result } = renderHook(() => useTestimonials())

    expect(result.current.OPTIONS).toMatchObject({
      perPage: 4,
      width: '100%',
      focus: 'center',
      arrows: false
    })
  })

  it('should configure responsive breakpoints', () => {
    const { result } = renderHook(() => useTestimonials())

    expect(result.current.OPTIONS?.breakpoints).toEqual({
      800: { perPage: 1 },
      1150: { perPage: 2 },
      1600: { perPage: 3 }
    })
  })
})
