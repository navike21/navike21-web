import { useAppSelector } from '@Store/hooks'

export const useGetMainLang = () => {
  const { language } = useAppSelector(state => state.config)

  return { language }
}
