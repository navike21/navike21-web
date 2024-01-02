import { DARK, LIGHT, DEFAULT } from '../themeMode'

describe('themeMode', () => {
  it('should have the correct values', () => {
    expect(DARK).toEqual('dark')
    expect(LIGHT).toEqual('light')
    expect(DEFAULT).toEqual('light')
  })
})
