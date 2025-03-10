import { Palette, useMediaQuery, useTheme } from '@mui/material'
import { TSizes } from '@Types/types/common'

type TBreakpoints = {
  [key in TSizes]: boolean
}

interface IUserThemeMui {
  breakpoints: TBreakpoints
  palette: Palette
  pxToRem: (value: number) => string
}

export const useMuiTheme = (): IUserThemeMui => {
  const { breakpoints, palette, typography } = useTheme()

  return {
    breakpoints: {
      ['xs']: useMediaQuery(breakpoints.up('xs')),
      ['sm']: useMediaQuery(breakpoints.up('sm')),
      ['md']: useMediaQuery(breakpoints.up('md')),
      ['lg']: useMediaQuery(breakpoints.up('lg')),
      ['xl']: useMediaQuery(breakpoints.up('xl'))
    },
    palette,
    pxToRem: typography.pxToRem
  }
}
