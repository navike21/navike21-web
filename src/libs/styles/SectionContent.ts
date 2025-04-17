import { Content } from '@Components/atoms/Content'
import { styled } from '@mui/material'

export const SectionContent = styled(Content)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(40),
    padding: `${theme.typography.pxToRem(100)} ${theme.typography.pxToRem(35)}`
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: theme.typography.pxToRem(50),
    alignItems: 'center'
  },
  [theme.breakpoints.up('md')]: {
    padding: `${theme.typography.pxToRem(80)} ${theme.typography.pxToRem(35)} 0`,
    gap: theme.typography.pxToRem(60),
    justifyContent: 'center'
  }
}))
