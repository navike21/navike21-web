export const API_BASE_URL = process.env['NEXT_PUBLIC_API_URL'] ?? ''
export const SERVER_API_BASE_URL = process.env['API_URL'] ?? ''

export const API_ENDPOINTS = {
  SUBSCRIBER_REGISTER: '/subscriber/register',
  SUBSCRIBER_LIST: '/subscriber/list/'
} as const
