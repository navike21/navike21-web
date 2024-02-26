import { useBreakPointMui } from '@Hooks/shared'
import { useTheme } from '@mui/material'

export const useStylesTitle = () => {
  const theme = useTheme()
  const { handleBreakPointUpXs, handleBreakPointUpSm, handleBreakPointUpMd } =
    useBreakPointMui()
  return {
    color: theme.palette.grey[50],
    [handleBreakPointUpXs()]: {
      fontSize: theme.typography.pxToRem(32),
      width: '80%',
      maxWidth: 400
    },
    [handleBreakPointUpSm()]: {
      fontSize: theme.typography.pxToRem(40),
      maxWidth: 500
    },
    [handleBreakPointUpMd()]: {
      fontSize: theme.typography.pxToRem(48),
      maxWidth: 600
    }
  }
}
