import { createSlice } from '@reduxjs/toolkit'
import { defaultStateConfig } from '../defaultState'
import {
  reducerChangeLanguage,
  reducerChangeThemeMode,
  reducerHandleMenuResponsive
} from '../actions'

export const configSlice = createSlice({
  name: 'config',
  initialState: defaultStateConfig,
  reducers: {
    changeLanguage: reducerChangeLanguage,
    changeThemeMode: reducerChangeThemeMode,
    handleMenuResponsive: reducerHandleMenuResponsive
  }
})

export const configReducer = configSlice.reducer
export const { changeLanguage, changeThemeMode, handleMenuResponsive } =
  configSlice.actions
