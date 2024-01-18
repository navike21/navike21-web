'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

type TProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: TProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
)
