export const API_BASE_URL = process.env['NEXT_PUBLIC_API_URL'] ?? ''
export const SERVER_API_BASE_URL = process.env['API_URL'] ?? ''

export const API_ENDPOINTS = {
  SUBSCRIBER: '/subscriber',
  SUBSCRIBER_LIST: '/subscriber/list/'
} as const
