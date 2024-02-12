'use client'

import { Container, Icon, LinkTag, Logo } from '@Components/atoms'
import { BREAKPOINTS_MD, DARK, LIGHT, SMALL } from '@Constants/shared'
import { AppBar, IconButton, Tooltip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/shared/useSizeScreen'
import { useMainLang } from '@Hooks/shared/useMainLang'
import { dataActions } from '@Lang/shared'
import { Fragment, useState } from 'react'
import { MenuConfig } from '../MenuConfig'
import { useThemeMode } from '@Hooks/shared'
import { useChangeThemeMode } from '@Hooks/shared/useChangeThemeMode'
import { TThemeMode } from '@Types/shared'

const stylesHeader = {
  height: 80
}
export const Header = () => {
  const { width: widthScreen } = useSizeScreen()
  const lang = useMainLang()
  const themeMode = useThemeMode()
  const changeThemeMode = useChangeThemeMode()

  const [modalStates, setModalStates] = useState({
    settings: false
  })

  const { themeMode: themeModeText } = dataActions[lang]

  const handleOpenSettings = () =>
    setModalStates({ ...modalStates, settings: true })

  const handleCloseSettings = () =>
    setModalStates({ ...modalStates, settings: false })

  const handleChangeThemeMode = (themeMode: TThemeMode) =>
    changeThemeMode(themeMode)

  return (
    <Fragment>
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
                <Tooltip title={themeModeText}>
                  <IconButton
                    onClick={() => {
                      handleChangeThemeMode(themeMode === LIGHT ? DARK : LIGHT)
                    }}
                  >
                    <Icon
                      library="materialDesign"
                      iconName={{
                        materialDesign:
                          themeMode === LIGHT ? 'MdSunny' : 'MdDarkMode'
                      }}
                      size="medium"
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <MenuConfig open={modalStates.settings} onClose={handleCloseSettings} />
    </Fragment>
  )
}
