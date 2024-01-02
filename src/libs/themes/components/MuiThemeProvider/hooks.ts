import { LIGHT } from '@Constants/shared'
import { useColorMode } from '@Hooks/useColorMode'
import { useAppSelector } from '@Store/hooks'
import { darkTheme, lightTheme } from '@Themes/config'

export const useConfigStateTheme = () => {
  const { primaryColor, themeMode } = useAppSelector(({ config }) => config)

  const colorMode = useColorMode()

  //* If themeMode is LIGHT, then return lightTheme, else return darkTheme
  return (themeMode || colorMode) === LIGHT
    ? lightTheme(primaryColor)
    : darkTheme(primaryColor)
}
