import type { NextConfig } from 'next'

const API_URL = process.env['API_URL'] ?? ''

const normalizeApiUrl = (url: string) => {
  if (!url) {
    return ''
  }

  if (/^https?:\/\//i.test(url)) {
    return url
  }

  const isLocalhost = /^(localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)(:\d+)?(\/|$)/i.test(
    url
  )

  return `${isLocalhost ? 'http' : 'https'}://${url}`
}

const nextConfig: NextConfig = {
  async rewrites() {
    const normalizedApiUrl = normalizeApiUrl(API_URL)

    if (!normalizedApiUrl) {
      return []
    }

    return [
      {
        source: '/api/:path*',
        destination: `${normalizedApiUrl}/:path*`
      }
    ]
  }
}

export default nextConfig
