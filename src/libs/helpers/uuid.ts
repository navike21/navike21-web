/**
 * Generate a UUID compatible with both server and client environments
 * @returns A valid UUID v4 string
 */
export const uuid = (): string => {
  // Server-side: use Node.js crypto
  if (typeof window === 'undefined') {
    return require('node:crypto').randomUUID() as string
  }

  // Client-side: use Web Crypto API (modern browsers)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  // Fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
