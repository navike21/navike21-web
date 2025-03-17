import { BackgroundParallax } from '@Components/atoms/BackgroundParallax'
import { Content } from '@Components/atoms/Content'
import { Title } from '@Components/atoms/Title'
import { styled } from '@mui/material'

export const SlideHero = styled(BackgroundParallax)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100dvh',
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.typography.pxToRem(80),
    '@media all and (orientation: landscape)': {
      // paddingBottom: theme.typography.pxToRem(50),
      minHeight: '150dvh'
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.typography.pxToRem(60),
    '@media all and (orientation: landscape)': {
      // paddingBottom: theme.typography.pxToRem(25),
      minHeight: '160dvh'
    }
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.typography.pxToRem(80)
  }
}))

export const SlideHeroContent = styled(Content)(({ theme }) => ({
  alignItems: 'flex-start',
  color: 'var(--white-color-500)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: `0 ${theme.typography.pxToRem(35)}`,
  textAlign: 'center'
}))

export const SlideHeroContentInner = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(15),
    width: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    width: '60%',
    minWidth: theme.typography.pxToRem(415)
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
    minWidth: theme.typography.pxToRem(360),
    gap: theme.typography.pxToRem(20)
  }
}))

export const SlideHeroTitle = styled(Title)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(28)
  },
  [theme.breakpoints.up('xs')]: {
    '& span': {
      color: 'var(--mui-palette-primary-main)'
    }
  }
}))
