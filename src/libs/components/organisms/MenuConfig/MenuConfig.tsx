'use client'

import { Icon } from '@Components/atoms'
import { dataActions } from '@Lang/shared'
import {
  Drawer,
  Button,
  IconButton,
  Typography,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { MouseEvent } from 'react'
import { SectionMenu } from './SectionMenu'
import { DARK, LIGHT } from '@Constants/shared'
import { useMainLang, useThemeMode } from '@Hooks/shared'
import { useChangeThemeMode } from '@Hooks/shared/useChangeThemeMode'
import { TThemeMode } from '@Types/shared'

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
  opacity: 0.8
}

const stylesButton = {
  padding: 2
  // borderRadius: 0
}
const stylesButtonWrapp = {
  // borderRadius: 0
}

export const MenuConfig = ({ open, onClose }: TMenuConfig) => {
  const changeThemeMode = useChangeThemeMode()
  const themeMode = useThemeMode()
  const lang = useMainLang()

  const { settings: settingsText, themeMode: themeModeText } = dataActions[lang]

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newThemeMode: TThemeMode
  ) => changeThemeMode(newThemeMode)

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
            <ToggleButtonGroup
              sx={stylesButtonWrapp}
              value={themeMode}
              exclusive
              onChange={handleAlignment}
              size="small"
              color="primary"
            >
              <ToggleButton value="light" sx={stylesButton}>
                <Icon
                  library="fontAwesome"
                  iconName={{ fontAwesome: 'FaSun' }}
                  size="medium"
                  color={(themeMode === DARK && 'white') || 'primary'}
                />
              </ToggleButton>
              <ToggleButton value="dark" sx={stylesButton}>
                <Icon
                  library="fontAwesome"
                  iconName={{ fontAwesome: 'FaMoon' }}
                  size="medium"
                  color={(themeMode === DARK && 'white') || 'primary'}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </SectionMenu>
      </Grid>
    </Drawer>
  )
}
