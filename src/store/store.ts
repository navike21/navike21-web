import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './reducers'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducers
  })
}

export type TAppStore = ReturnType<typeof makeStore>
export type TRootState = ReturnType<TAppStore['getState']>
export type TAppDispatch = TAppStore['dispatch']
