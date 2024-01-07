'use client'

import { Container, Logo } from '@Components/atoms'
import { BREAKPOINTS_MD, SMALL } from '@Constants/shared'
import { AppBar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/useSizeScreen'

const stylesHeader = {
  height: 80
}
export const Header = () => {
  const { width: widthScreen } = useSizeScreen()
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container>
        <Grid
          container
          sx={stylesHeader}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <Logo size={SMALL} />
          </Grid>
          <Grid>
            <Grid component="nav">
              {widthScreen > BREAKPOINTS_MD && <MenuHeader />}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
