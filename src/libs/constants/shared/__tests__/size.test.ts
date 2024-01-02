import {
  EXTRA_LARGE,
  EXTRA_SMALL,
  LARGE,
  MEDIUM,
  SMALL,
  MAX_WIDTH
} from '../size'

describe('size', () => {
  it('should return the correct values', () => {
    expect(EXTRA_LARGE).toBe('xtra-large')
    expect(EXTRA_SMALL).toBe('xtra-small')
    expect(LARGE).toBe('large')
    expect(MEDIUM).toBe('medium')
    expect(SMALL).toBe('small')
    expect(MAX_WIDTH).toBe(1152)
  })
})
