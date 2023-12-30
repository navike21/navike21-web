import { type PayloadAction, type CaseReducer } from '@reduxjs/toolkit'
import { TConfig } from '../types'
import { TThemeMode } from '@Types/shared'

export const reducerChangeThemeMode: CaseReducer<
  TConfig,
  PayloadAction<TThemeMode>
> = (state, action) => {
  state.themeMode = action.payload
}
