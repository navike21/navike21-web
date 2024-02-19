type TSetCookie = {
  name: string
  value: string
  options?: {
    maxAge?: number
    expires?: Date
    path?: string
    domain?: string
    secure?: boolean
    httpOnly?: boolean
    sameSite?: 'Strict' | 'Lax' | 'None'
  }
}

export const cookies = {
  set: ({ name, value, options }: TSetCookie) => {
    const cookie = `${name}=${value};`
    // document.cookie = cookie
    // Validate document is defined
    if (typeof document !== 'undefined') {
      document.cookie = cookie
    }
  },
  get: (name: string) => {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';')
      const cookie = cookies.find(cookie => cookie.includes(name))
      if (cookie) {
        const [cookieName, cookieValue] = cookie.split('=')
        console.log(cookieName, cookieValue)
        return { name: cookieName, value: cookieValue }
      }
      return null
    }
  }
}
