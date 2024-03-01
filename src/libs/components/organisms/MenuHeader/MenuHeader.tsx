'use client'

import { LinkTag } from '@Components/atoms'
import { useMainLang } from '@Hooks/shared/useMainLang'
import { dataMenuHeader } from '@Lang/header'
import { usePathname } from 'next/navigation'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useAppSelector } from '@Store/hooks'
import { BLACK, LIGHT, WHITE } from '@Constants/shared'
import { useHandleMenuResponsive } from '@Hooks/shared'
import { useScrollTrigger, useTheme } from '@mui/material'

type TMenuHeaderProps = {
  isResponsive?: boolean
  window?: () => Window
}

const stylesHeader = {
  listStyle: 'none',
  margin: 0,
  padding: 0
}

export const MenuHeader = ({
  window,
  isResponsive = false
}: TMenuHeaderProps) => {
  const themeMUI = useTheme()
  const lang = useMainLang()
  const pathname = usePathname()
  const { handleCloseMenu } = useHandleMenuResponsive()
  const { themeMode } = useAppSelector(state => state.config)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  const mainMenu = dataMenuHeader[lang]

  const handleActiveLink = (path: string) => {
    if (path === pathname) {
      return themeMUI.palette.primary.main
    }
    if (!trigger && !isResponsive) {
      return WHITE
    }
    if (themeMode === LIGHT) {
      return BLACK
    }
    return WHITE
  }

  return (
    <Grid
      component="ul"
      container
      gap={isResponsive ? 1 : 3}
      sx={stylesHeader}
      direction={isResponsive ? 'column' : 'row'}
    >
      {mainMenu.map(({ id, path, text }) => (
        <Grid component="li" key={id}>
          <LinkTag
            href={path}
            color={handleActiveLink(path)}
            onClick={handleCloseMenu}
          >
            {text}
          </LinkTag>
        </Grid>
      ))}
    </Grid>
  )
}
