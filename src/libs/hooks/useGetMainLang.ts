import { useAppSelector } from './useAppSelector'

export const useGetMainLang = () => {
  const { language } = useAppSelector(state => state.config)

  return { language }
}
