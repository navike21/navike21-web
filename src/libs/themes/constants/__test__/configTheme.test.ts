import { configTheme } from '../configTheme'

describe('configTheme', () => {
  it('should return the correct values', () => {
    expect(configTheme).toBeDefined()
  })

  it('should include the correct values', () => {
    expect(configTheme).toHaveProperty('shape')
    expect(configTheme).toHaveProperty('typography')
  })
})
