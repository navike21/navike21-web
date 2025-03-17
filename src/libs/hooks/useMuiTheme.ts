import {
  Breakpoints,
  Palette,
  Theme,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { TSizes } from '@Types/types/common'

type TBreakpoints = {
  [key in TSizes]: boolean
}

interface IUserThemeMui {
  breakpoints: Breakpoints
  mediaQuery: TBreakpoints
  palette: Palette
  spacing: Theme['spacing']
  pxToRem: (value: number) => string
}

export const useMuiTheme = (): IUserThemeMui => {
  const { breakpoints, palette, typography, spacing } = useTheme()

  return {
    breakpoints,
    mediaQuery: {
      ['xs']: useMediaQuery(breakpoints.up('xs')),
      ['sm']: useMediaQuery(breakpoints.up('sm')),
      ['md']: useMediaQuery(breakpoints.up('md')),
      ['lg']: useMediaQuery(breakpoints.up('lg')),
      ['xl']: useMediaQuery(breakpoints.up('xl'))
    },
    palette,
    pxToRem: typography.pxToRem,
    spacing
  }
}
