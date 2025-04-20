import { styled } from '@mui/material'
import Link from 'next/link'

export const ServicesSectionMain = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    // backgroundColor: 'var(--mui-palette-grey-900)',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%'
  }
}))

export const ServicesSectionContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'grid',
    gap: theme.spacing(4),
    gridTemplateColumns: '1fr',
    justifyItems: 'start',
    paddingTop: theme.typography.pxToRem(0),
    paddingBottom: theme.typography.pxToRem(30)
  },

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    paddingTop: theme.typography.pxToRem(0),
    paddingBottom: theme.typography.pxToRem(100)
  }
}))

export const InformationServicesSection = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(14),
    paddingTop: theme.typography.pxToRem(30),
    paddingBottom: theme.typography.pxToRem(30),
    textAlign: 'left',
    h2: {
      textAlign: 'left',
      width: '90%'
    },
    h4: {
      textAlign: 'left'
    },
    p: {
      textAlign: 'left'
    }
  }
}))

export const ItemServicesSection = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    color: 'var(--mui-palette-common-white)',
    textDecoration: 'none',
    backgroundColor: 'var(--mui-palette-grey-900)',
    padding: theme.typography.pxToRem(35),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(14),
    svg: {
      fontSize: theme.typography.pxToRem(35),
      color: 'var(--mui-palette-primary-main)'
    },
    h6: {
      textAlign: 'left'
    },
    p: {
      textAlign: 'left'
    }
  }
}))
