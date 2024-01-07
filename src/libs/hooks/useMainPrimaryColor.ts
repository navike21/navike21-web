import { useAppSelector } from '@Store/hooks'

export const useMainPrimaryColor = () => {
  const { primaryColor } = useAppSelector(state => state.config)
  return primaryColor
}
