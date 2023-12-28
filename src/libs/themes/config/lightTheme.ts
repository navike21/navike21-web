import { PaletteMode } from '@mui/material'

import { LIGHT } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'

export const lightTheme = (color: TColorVariant): Object => ({
  palette: {
    mode: LIGHT as PaletteMode,
    primary: getPrincipalColor(color)
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontSize: 12,
    fontFamily: 'inherit'
  }
})
