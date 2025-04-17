import { styled } from '@mui/material'
import Image from 'next/image'

export const AboutSectionMain = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%'
  }
}))

export const ImageAboutSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    border: theme.typography.pxToRem(1),
    borderColor: 'var(--mui-palette-background-default)',
    borderStyle: 'solid',
    borderWidth: theme.typography.pxToRem(8),
    display: 'flex',
    height: theme.typography.pxToRem(180),
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    '&::before': {
      backgroundColor: 'var(--mui-palette-primary-main)',
      content: '""',
      height: '40%',
      left: `-${theme.typography.pxToRem(10)}`,
      position: 'absolute',
      top: `-${theme.typography.pxToRem(10)}`,
      width: '50%',
      zIndex: -1
    },
    '&::after': {
      backgroundColor: 'var(--mui-palette-primary-main)',
      content: '""',
      height: '40%',
      right: `-${theme.typography.pxToRem(10)}`,
      position: 'absolute',
      bottom: `-${theme.typography.pxToRem(10)}`,
      width: '50%',
      zIndex: -1
    }
  },
  [theme.breakpoints.up('sm')]: {
    height: '65dvh',
    minWidth: theme.typography.pxToRem(220),
    maxHeight: theme.typography.pxToRem(500),
    maxWidth: theme.typography.pxToRem(400)
  }
}))

export const ImageAbout = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    zIndex: 2
  }
}))

export const ImageYears = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'var(--mui-palette-common-white)',
    display: 'flex',
    color: 'var(--black-color)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    gap: theme.typography.pxToRem(5),
    zIndex: 3,
    bottom: theme.typography.pxToRem(8),
    right: theme.typography.pxToRem(8),
    padding: theme.typography.pxToRem(15),
    width: theme.typography.pxToRem(110),
    height: theme.typography.pxToRem(110),
    h2: {
      fontSize: theme.typography.pxToRem(28),
      textAlign: 'center',
      margin: 0,
      textIndent: theme.typography.pxToRem(24)
    },
    p: {
      fontSize: theme.typography.pxToRem(11),
      textAlign: 'center',
      margin: 0,
      fontWeight: 600,
      lineHeight: 1,
      textTransform: 'uppercase'
    }
  },
  [theme.breakpoints.up('sm')]: {
    width: theme.typography.pxToRem(170),
    height: theme.typography.pxToRem(170),
    padding: theme.typography.pxToRem(45),
    h2: {
      fontSize: theme.typography.pxToRem(40)
    },
    p: {
      fontSize: theme.typography.pxToRem(14)
    }
  }
}))

export const InfoAboutSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(30),
    textAlign: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
    h6: {
      textAlign: 'left',
      color: 'var(--mui-palette-grey-400)'
    },
    h4: {
      textAlign: 'left'
    },
    h3: {
      textAlign: 'left'
    },
    p: {
      textAlign: 'left'
    }
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.typography.pxToRem(400)
  }
}))

export const InfoAboutSectionText = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(14)
  }
}))

export const InfoAboutNavike21 = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 'auto',
    gap: theme.typography.pxToRem(10),
    maxWidth: theme.typography.pxToRem(290)
  }
}))

export const InfoAboutNavike21Item = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(5),
    width: '45%',
    textAlign: 'center',
    h2: {
      textIndent: theme.typography.pxToRem(22),
      span: {
        color: 'var(--mui-palette-primary-main)'
      }
    },
    p: {
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(12)
    }
  }
}))
