import { describe, expect, it } from 'vitest'

import type { NextRequest } from 'next/server'

import { proxy } from './proxy'

describe('proxy', () => {
  it('sets security headers', () => {
    const request = {} as unknown as NextRequest

    const response = proxy(request)

    expect(response.headers.get('X-Frame-Options')).toBe('DENY')
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff')
    expect(response.headers.get('X-XSS-Protection')).toBe('1; mode=block')
    expect(response.headers.get('Referrer-Policy')).toBe(
      'strict-origin-when-cross-origin'
    )
  })
})
