import { BUTTON, RESET, SUBMIT } from '../buttonsVariation'
describe('buttonVariation', () => {
  it('should return the correct values', () => {
    expect(BUTTON).toBe('button')
    expect(RESET).toBe('reset')
    expect(SUBMIT).toBe('submit')
  })
})
