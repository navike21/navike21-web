'use client'

import { Container, LinkTag, Logo } from '@Components/atoms'
import {
  BREAKPOINTS_MD,
  LIGHT,
  MAX_HEIGHT_HEADER,
  SMALL
} from '@Constants/shared'
import { AppBar, useScrollTrigger, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/shared/useSizeScreen'
import { ThemeMode } from '../ThemeMode'
import { Lang } from '../Lang'
import { MenuResponsive } from '../MenuResponsive'
import { ReactElement, cloneElement } from 'react'
import { useThemeMode } from '@Hooks/shared'

type THeaderProps = {
  window?: () => Window
  children: ReactElement
}

function ElevationScroll({ children, window }: THeaderProps) {
  const themeMode = useThemeMode()
  const themeMUI = useTheme()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  const backgroundColorMode =
    themeMode === LIGHT
      ? themeMUI.palette.background.paper
      : themeMUI.palette.background.default

  const style = {
    backgroundColor: trigger ? backgroundColorMode : 'transparent',
    transition: themeMUI.transitions.create('background-color', {
      duration: themeMUI.transitions.duration.leavingScreen,
      easing: themeMUI.transitions.easing.easeOut
    })
  }

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style
  })
}

const stylesHeader = {
  height: MAX_HEIGHT_HEADER
}
export const Header = (props: THeaderProps) => {
  const { width: widthScreen } = useSizeScreen()

  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Container>
          <Grid
            container
            sx={stylesHeader}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>
              <LinkTag href="/" color="white">
                <Logo size={SMALL} />
              </LinkTag>
            </Grid>
            <Grid>
              <Grid
                component="nav"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
              >
                {widthScreen > BREAKPOINTS_MD && <MenuHeader />}
                <ThemeMode />
                <Lang />
                <MenuResponsive />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </ElevationScroll>
  )
}
