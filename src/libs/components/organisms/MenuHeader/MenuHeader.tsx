'use client'

import { LinkTag } from '@Components/atoms'
import { useMainLang } from '@Hooks/shared/useMainLang'
import { useMainPrimaryColor } from '@Hooks/shared/useMainPrimaryColor'
import { dataMenuHeader } from '@Lang/header'
import { usePathname } from 'next/navigation'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { TColor } from '@Types/shared'
import { useAppSelector } from '@Store/hooks'
import { BLACK, LIGHT, WHITE } from '@Constants/shared'

type TExcludeColors<tCode extends string | number | symbol> = tCode extends
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  ? never
  : tCode

type TColorsExcluded = TExcludeColors<TColor>

const stylesHeader = {
  listStyle: 'none',
  margin: 0
}

export const MenuHeader = () => {
  const lang = useMainLang()
  const primaryColor = useMainPrimaryColor()
  const pathname = usePathname()
  const mainMenu = dataMenuHeader[lang]

  const { themeMode } = useAppSelector(state => state.config)

  const handleRemoveTextColorString = (color: string): TColorsExcluded =>
    color.replace(/Color/g, '') as TColorsExcluded

  const handleActiveLink = (path: string): TColorsExcluded => {
    if (path === pathname) {
      return handleRemoveTextColorString(primaryColor)
    }
    if (themeMode === LIGHT) {
      return BLACK
    }
    return WHITE
  }

  return (
    <Grid component="ul" container spacing={3} sx={stylesHeader}>
      {mainMenu.map(({ id, path, text }) => (
        <Grid component="li" key={id}>
          <LinkTag href={path} color={handleActiveLink(path)}>
            {text}
          </LinkTag>
        </Grid>
      ))}
    </Grid>
  )
}
