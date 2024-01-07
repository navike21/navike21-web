import { useAppSelector } from '@Store/hooks'

export const useMainLang = () => {
  const { language } = useAppSelector(state => state.config)

  return language
}
