import { BOOSTRAP, FONT_AWESOME, MATERIAL_DESIGN } from '../iconLibrary'

describe('iconLibrary', () => {
  it('should return the correct values', () => {
    expect(BOOSTRAP).toBe('bootstrap')
    expect(FONT_AWESOME).toBe('fontAwesome')
    expect(MATERIAL_DESIGN).toBe('materialDesign')
  })
})
