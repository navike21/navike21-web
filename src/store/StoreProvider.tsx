'use client'

import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore, persistor, TAppStore } from './store'

type TProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: TProps) => {
  const storeRef = useRef<TAppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  )
}
