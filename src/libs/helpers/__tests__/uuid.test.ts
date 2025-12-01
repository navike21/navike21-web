import { describe, it, expect } from 'vitest'
import { uuid } from '../uuid'

describe('uuid helper', () => {
  it('should generate a valid UUID v4', () => {
    const generatedUuid = uuid()

    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    expect(generatedUuid).toMatch(uuidV4Regex)
  })

  it('should generate unique UUIDs', () => {
    const uuid1 = uuid()
    const uuid2 = uuid()
    const uuid3 = uuid()

    expect(uuid1).not.toBe(uuid2)
    expect(uuid2).not.toBe(uuid3)
    expect(uuid1).not.toBe(uuid3)
  })

  it('should return a string', () => {
    const generatedUuid = uuid()
    expect(typeof generatedUuid).toBe('string')
  })

  it('should have the correct length (36 characters including hyphens)', () => {
    const generatedUuid = uuid()
    expect(generatedUuid).toHaveLength(36)
  })
})
