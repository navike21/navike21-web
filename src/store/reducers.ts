import { configReducer } from '@Themes/config'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducers = combineReducers({
  config: configReducer
})
