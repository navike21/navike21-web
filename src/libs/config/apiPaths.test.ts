import { describe, expect, it } from 'vitest'

import { API_PATHS } from './apiPaths'

describe('API_PATHS', () => {
  it('should expose SUBSCRIBER_REGISTER with the correct path', () => {
    expect(API_PATHS.SUBSCRIBER_REGISTER).toBe('/subscriber/register')
  })

  it('should be a readonly object (as const)', () => {
    // Assert the value is the exact literal type — structural check
    const paths: { readonly SUBSCRIBER_REGISTER: '/subscriber/register' } =
      API_PATHS
    expect(paths).toBe(API_PATHS)
  })
})
