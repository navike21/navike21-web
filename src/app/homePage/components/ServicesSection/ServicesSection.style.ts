import { styled } from '@mui/material'

export const ServicesSectionMain = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%'
  }
}))
