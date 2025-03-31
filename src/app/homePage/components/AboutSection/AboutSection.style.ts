import { styled } from '@mui/material'

export const AboutSectionMain = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'var(--mui-palette-common-white)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center'
  }
}))
