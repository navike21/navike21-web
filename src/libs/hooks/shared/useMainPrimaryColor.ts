import { useAppSelector } from '@Store/hooks'

export const useMainPrimaryColor = () => {
  const { primaryColor } = useAppSelector(({ config }) => config)
  return primaryColor
}
