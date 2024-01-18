import { LIGHT } from '@Constants/shared'
import { useAppSelector } from '@Store/hooks'
import { darkTheme, lightTheme } from '@Themes/config'

export const useConfigStateTheme = () => {
  const { primaryColor, themeMode } = useAppSelector(({ config }) => config)

  //* If themeMode is LIGHT, then return lightTheme, else return darkTheme
  return themeMode === LIGHT
    ? lightTheme(primaryColor)
    : darkTheme(primaryColor)
}
