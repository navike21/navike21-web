'use server'

import { cookies } from 'next/headers'

type TSetCookie = {
  name: string
  value: string
}

export const useCookies = () => {
  const createCookie = ({ name, value }: TSetCookie) => {
    cookies().set(name, value)
  }

  return { createCookie }
}
