import { type PayloadAction, type CaseReducer } from '@reduxjs/toolkit'
import { TLangSupported } from '@Types/shared/lang'
import { TConfig } from '../types'

export const reducerChangeLanguage: CaseReducer<
  TConfig,
  PayloadAction<TLangSupported>
> = (state, action) => {
  state.language = action.payload
}
