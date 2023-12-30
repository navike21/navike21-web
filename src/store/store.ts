import { configReducer } from '@Themes/config'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      config: configReducer
    }
  })
}

export type TAppStore = ReturnType<typeof makeStore>
export type TRootState = ReturnType<TAppStore['getState']>
export type TAppDispatch = TAppStore['dispatch']
