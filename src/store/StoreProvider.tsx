'use client'

import { ReactNode, useRef } from 'react'
import { makeStore, TAppStore } from './store'
import { Provider } from 'react-redux'

type TProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: TProps) => {
  const storeRef = useRef<TAppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
