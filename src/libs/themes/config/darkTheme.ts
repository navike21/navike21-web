import { PaletteMode } from '@mui/material'

import { DARK } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'

export const darkTheme = (color: TColorVariant): Object => ({
  palette: {
    mode: DARK as PaletteMode,
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
