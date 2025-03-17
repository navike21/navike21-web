import { Content } from '@Components/atoms/Content'
import { Paragraph } from '@Components/atoms/Paragraph'
import { styled, Theme } from '@mui/material'
import { motion } from 'motion/react'
import Link from 'next/link'

const heightHeader = (theme: Theme) => theme.typography.pxToRem(85)

export const HeaderElement = styled(motion.header)(({ theme }) => ({
  backgroundColor: 'var(--black-color-500)',
  backdropFilter: 'blur(1rem)',
  display: 'flex',
  left: 0,
  height: heightHeader(theme),
  justifyContent: 'center',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '100%',
  zIndex: 1000
}))

export const HeaderContent = styled(Content)(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative'
}))

export const HeaderLogo = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center'
}))

export const MenuIcon = styled(motion.svg)(({ theme }) => ({
  height: theme.typography.pxToRem(22),
  margin: theme.spacing(0.8),
  width: theme.typography.pxToRem(22),
  '& path': {
    stroke: 'var(--mui-palette-common-white)'
  }
}))

export const MenuIconPath = styled(motion.path)(() => ({
  stroke: 'var(--mui-palette-common-white)'
}))

export const MenuContainer = styled(motion.div)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    backgroundColor: 'var(--black-color-900)',
    backdropFilter: 'blur(1rem)',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    overflowY: 'auto',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 999,
    [`@media (orientation: landscape)`]: {
      alignItems: 'flex-start'
    }
  },
  [theme.breakpoints.up('md')]: {
    [`@media (orientation: landscape)`]: {
      alignItems: 'center'
    }
  }
}))

export const MenuContent = styled(Content)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  margin: `${heightHeader(theme)} 0`
}))

export const MotionDiv = styled(motion.div)(() => ({}))

export const MenuItem = styled(Link)(() => ({
  color: 'var(--mui-palette-common-white)',
  display: 'flex',
  fontFamily: 'var(--font-title)',
  position: 'relative',
  textDecoration: 'none',
  transition: 'background 0.3s ease-in-out',
  width: 'fit-content'
}))

export const MenuItemText = styled(Paragraph)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600,
    padding: theme.spacing(1.5, 0),
    transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
    '&::after': {
      content: '""',
      backgroundColor: 'var(--mui-palette-primary-main)',
      height: theme.typography.pxToRem(2.5),
      position: 'absolute',
      bottom: 0,
      width: '100%',
      left: 0,
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    '&:hover': {
      color: 'var(--mui-palette-primary-main)',
      transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
      '&::after': {
        width: '100%',
        transform: 'scaleX(1)',
        transformOrigin: 'left'
      }
    }
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(30)
  }
}))
