import { PaletteMode } from '@mui/material'

import { LIGHT } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'
import { configTheme } from '@Themes/constants'

export const lightTheme = (color: TColorVariant): Object => ({
  ...configTheme,
  palette: {
    mode: LIGHT as PaletteMode,
    primary: getPrincipalColor(color)
  }
})
