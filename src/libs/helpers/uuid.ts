import { v4 as uuidv4 } from 'uuid'

/**
 * Generate a UUID v4
 * @returns A valid UUID v4 string
 */
export const uuid = (): string => {
  return uuidv4()
}
