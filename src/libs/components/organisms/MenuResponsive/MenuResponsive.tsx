'use client'

import { Icon } from '@Components/atoms'
import { BREAKPOINTS_MD } from '@Constants/shared'
import {
  useHandleMenuResponsive,
  useMainLang,
  useMenuResponsive,
  useSizeScreen
} from '@Hooks/shared'
import { Divider, Drawer, IconButton, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { dataActions } from '@Lang/shared'

const stylesDrawer = {
  gap: 2,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  paddingBottom: 2,
  minWidth: 270,
  height: '100%'
}

const styleMainMenuTitle = {
  fontSize: 18
}

export const MenuResponsive = () => {
  const menuResponsive = useMenuResponsive()
  const lang = useMainLang()
  const { handleCloseMenu, handleOpenMenu } = useHandleMenuResponsive()
  const { width: widthScreen } = useSizeScreen()

  const { mainMenu: mainMenuTitle } = dataActions[lang]

  return (
    <>
      {widthScreen < BREAKPOINTS_MD && (
        <IconButton id="menuResponsive" onClick={handleOpenMenu}>
          <Icon
            library="materialDesign"
            iconName={{
              materialDesign: 'MdMenu'
            }}
            size="medium"
          />
        </IconButton>
      )}
      <Drawer anchor="right" open={menuResponsive} onClose={handleCloseMenu}>
        <Grid
          container
          sx={stylesDrawer}
          direction="column"
          justifyContent="space-between"
        >
          <Grid container gap={1} direction="column">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" align="center" sx={styleMainMenuTitle}>
                {mainMenuTitle}
              </Typography>
              <IconButton id="menuResponsive" onClick={handleCloseMenu}>
                <Icon
                  library="materialDesign"
                  iconName={{
                    materialDesign: 'MdClose'
                  }}
                  size="medium"
                />
              </IconButton>
            </Grid>
            <Divider />
            <MenuHeader isResponsive />
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
}
