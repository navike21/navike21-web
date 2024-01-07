'use client'

import { Container, Icon, LinkTag, Logo } from '@Components/atoms'
import { BREAKPOINTS_MD, SMALL } from '@Constants/shared'
import { AppBar, IconButton, Tooltip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/useSizeScreen'
import { useMainLang } from '@Hooks/useMainLang'
import { dataActions } from '@Lang/shared'

const stylesHeader = {
  height: 80
}
export const Header = () => {
  const { width: widthScreen } = useSizeScreen()
  const lang = useMainLang()

  const { settings: settingsText } = dataActions[lang]

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
            >
              {widthScreen > BREAKPOINTS_MD && <MenuHeader />}
              <Tooltip title={settingsText}>
                <IconButton>
                  <Icon
                    library="materialDesign"
                    iconName={{ materialDesign: 'MdSettings' }}
                    size="medium"
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
