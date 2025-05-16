import { Content } from '@Components/atoms/Content'
import { styled } from '@mui/material'

export const FooterElement = styled('footer')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'var(--mui-palette-common-black)',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4, 0)
  }
}))

export const FooterContent = styled(Content)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 0),
    position: 'relative'
  }
}))

export const FooterLogoSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: theme.typography.pxToRem(10)
  }
}))
