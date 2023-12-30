'use client'

import { Container, Logo } from '@Components/atoms'
import { SMALL } from '@Constants/shared'
import { useAppSelector } from '@Hooks/useAppSelector'
import { AppBar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const stylesHeader = {
  height: 80
}
export const Header = () => {
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
        </Grid>
      </Container>
    </AppBar>
  )
}
