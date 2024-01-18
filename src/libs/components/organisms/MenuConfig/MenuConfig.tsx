'use client'

import { Icon } from '@Components/atoms'
import { useMainLang } from '@Hooks/useMainLang'
import { dataActions } from '@Lang/shared'
import { Drawer, IconButton, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { SectionMenu } from './SectionMenu'
import { useChangeThemeMode } from '@Hooks/useChangeThemeMode'
import { DARK, LIGHT } from '@Constants/shared'

type TMenuConfig = {
  open: boolean
  onClose: () => void
}

const stylesDrawer = {
  gap: 2,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  paddingBottom: 2
}

const subTitle = {
  fontSize: 12,
  opacity: 0.5
}

export const MenuConfig = ({ open, onClose }: TMenuConfig) => {
  const lang = useMainLang()
  const { settings: settingsText, themeMode: themeModeText } = dataActions[lang]

  const { changeThemeModeAction } = useChangeThemeMode()

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={stylesDrawer}>
      <Grid container sx={stylesDrawer} direction="column">
        <SectionMenu>
          <Typography variant="h5">{settingsText}</Typography>
          <IconButton onClick={onClose}>
            <Icon
              library="materialDesign"
              iconName={{ materialDesign: 'MdClose' }}
              size="medium"
            />
          </IconButton>
        </SectionMenu>
        <SectionMenu>
          <Typography variant="body1" sx={subTitle}>
            {themeModeText}
          </Typography>
          <Grid width="100%">
            <IconButton onClick={() => changeThemeModeAction(LIGHT)}>
              <Icon
                library="fontAwesome"
                iconName={{ fontAwesome: 'FaSun' }}
                size="medium"
              />
            </IconButton>
            <IconButton onClick={() => changeThemeModeAction(DARK)}>
              <Icon
                library="fontAwesome"
                iconName={{ fontAwesome: 'FaMoon' }}
                size="medium"
              />
            </IconButton>
          </Grid>
        </SectionMenu>
      </Grid>
    </Drawer>
  )
}
