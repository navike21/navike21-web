import { useAppSelector } from '@Store/hooks'

export const useMenuResponsive = () => {
  const { menuResponsive } = useAppSelector(({ config }) => config)

  return menuResponsive
}
