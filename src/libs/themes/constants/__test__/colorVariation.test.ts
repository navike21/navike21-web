import {
  ERROR_COLOR,
  INFO_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR
} from '../colorVariation'

describe('colorVariation', () => {
  it('should be defined', () => {
    expect(ERROR_COLOR).toBeDefined()
    expect(INFO_COLOR).toBeDefined()
    expect(PRIMARY_COLOR).toBeDefined()
    expect(SECONDARY_COLOR).toBeDefined()
    expect(SUCCESS_COLOR).toBeDefined()
    expect(WARNING_COLOR).toBeDefined()
  })
})
