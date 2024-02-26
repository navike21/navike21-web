import { useTheme } from '@mui/material'

export const useBreakPointMui = () => {
  const theme = useTheme()
  const handleBreakPointUpXs = () => theme.breakpoints.up('xs')
  const handleBreakPointUpSm = () => theme.breakpoints.up('sm')
  const handleBreakPointUpMd = () => theme.breakpoints.up('md')
  const handleBreakPointUpLg = () => theme.breakpoints.up('lg')
  const handleBreakPointUpXl = () => theme.breakpoints.up('xl')

  return {
    handleBreakPointUpXs,
    handleBreakPointUpSm,
    handleBreakPointUpMd,
    handleBreakPointUpLg,
    handleBreakPointUpXl
  }
}
