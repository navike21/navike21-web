import { v4 as uuidv4 } from 'uuid'

export const useId = (prefix: string) => {
  const generateId = () => `${prefix}-${uuidv4()}`

  return { generateId }
}
