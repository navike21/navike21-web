import { createSlice } from '@reduxjs/toolkit'
import { defaultStateConfig } from '../defaultState'
import { reducerChangeLanguage, reducerChangeThemeMode } from '../actions'

export const configSlice = createSlice({
  name: 'config',
  initialState: defaultStateConfig,
  reducers: {
    changeLanguage: reducerChangeLanguage,
    changeThemeMode: reducerChangeThemeMode
  }
})

export const configReducer = configSlice.reducer
export const { changeLanguage, changeThemeMode } = configSlice.actions
