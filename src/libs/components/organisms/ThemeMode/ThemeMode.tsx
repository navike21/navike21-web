'use client'

import { Icon } from '@Components/atoms'
import { DARK, LIGHT } from '@Constants/shared'
import { useMainLang, useThemeMode } from '@Hooks/shared'
import { useChangeThemeMode } from '@Hooks/shared/useChangeThemeMode'
import { dataActions } from '@Lang/shared'
import { TThemeMode } from '@Types/shared'
import { IconButton, Tooltip } from '@mui/material'

export const ThemeMode = () => {
  const changeThemeMode = useChangeThemeMode()
  const themeMode = useThemeMode()
  const lang = useMainLang()

  const { themeMode: themeModeText } = dataActions[lang]

  const handleChangeThemeMode = (themeMode: TThemeMode) =>
    changeThemeMode(themeMode)

  return (
    <Tooltip title={themeModeText}>
      <IconButton
        onClick={() => {
          handleChangeThemeMode(themeMode === LIGHT ? DARK : LIGHT)
        }}
      >
        <Icon
          library="materialDesign"
          iconName={{
            materialDesign: themeMode === LIGHT ? 'MdSunny' : 'MdDarkMode'
          }}
          size="medium"
        />
      </IconButton>
    </Tooltip>
  )
}
