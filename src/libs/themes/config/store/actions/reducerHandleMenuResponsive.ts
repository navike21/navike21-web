import { type PayloadAction, type CaseReducer } from '@reduxjs/toolkit'
import { TConfig } from '../types'

export const reducerHandleMenuResponsive: CaseReducer<
  TConfig,
  PayloadAction<boolean>
> = (state, action) => {
  state.menuResponsive = action.payload
}
