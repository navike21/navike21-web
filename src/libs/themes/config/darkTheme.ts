import { PaletteMode } from '@mui/material'

import { DARK } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'
import { configTheme } from '@Themes/constants'

export const darkTheme = (color: TColorVariant): Object => ({
  ...configTheme,
  palette: {
    mode: DARK as PaletteMode,
    primary: getPrincipalColor(color)
  }
})
