import { BackgroundParallax } from '@Components/atoms/BackgroundParallax'
import { Content } from '@Components/atoms/Content'
import { Paragraph } from '@Components/atoms/Paragraph'
import { Title } from '@Components/atoms/Title'
import { styled } from '@mui/material'

export const SlideHeroMain = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'var(--black-color)'
  }
}))

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
      minHeight: '180dvh'
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.typography.pxToRem(60),
    '@media all and (orientation: landscape)': {
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
  padding: `0 ${theme.typography.pxToRem(50)}`,
  transition: 'all 0.5s ease-in-out',
  textAlign: 'center'
}))

export const SlideHeroContentInner = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(15),
    marginTop: theme.typography.pxToRem(280),
    width: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: theme.typography.pxToRem(415),
    marginTop: theme.typography.pxToRem(200),
    width: '60%'
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
    color: 'var(--mui-palette-common-white)',
    '& span': {
      color: 'var(--mui-palette-primary-main)'
    }
  }
}))

export const SlideHeroParagraph = styled(Paragraph)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    color: 'var(--mui-palette-common-white)',
    fontSize: theme.typography.pxToRem(16),
    '& span': {
      fontWeight: 700
    }
  }
}))
