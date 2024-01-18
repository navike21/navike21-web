import { useAppSelector } from '@Store/hooks'

export const useThemeMode = () => {
  const { themeMode } = useAppSelector(({ config }) => config)

  return themeMode
}
