const normalizeApiUrl = (url: string) => {
  if (!url) {
    return ''
  }

  if (/^https?:\/\//i.test(url)) {
    return url
  }

  const isLocalhost =
    /^(localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)(:\d+)?(\/|$)/i.test(url)

  return `${isLocalhost ? 'http' : 'https'}://${url}`
}

export const API_BASE_URL = normalizeApiUrl(
  process.env['NEXT_PUBLIC_API_URL'] ?? ''
)
export const SERVER_API_BASE_URL = normalizeApiUrl(process.env['API_URL'] ?? '')
export const ENVIRONMENT = process.env['NODE_ENV'] ?? 'development'
