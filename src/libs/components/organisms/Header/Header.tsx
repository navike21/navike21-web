'use client'

import { Container, LinkTag, Logo } from '@Components/atoms'
import { BREAKPOINTS_MD, MAX_HEIGHT_HEADER, SMALL } from '@Constants/shared'
import { AppBar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/shared/useSizeScreen'
import { ThemeMode } from '../ThemeMode'
import { Lang } from '../Lang'
import { MenuResponsive } from '../MenuResponsive'

const stylesHeader = {
  height: MAX_HEIGHT_HEADER
}
export const Header = () => {
  const { width: widthScreen } = useSizeScreen()

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
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
  )
}
