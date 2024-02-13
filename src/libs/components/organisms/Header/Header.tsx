'use client'

import { Container, Icon, LinkTag, Logo } from '@Components/atoms'
import {
  BREAKPOINTS_MD,
  DARK,
  LIGHT,
  SMALL,
  flags,
  langSupported
} from '@Constants/shared'
import {
  AppBar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MenuHeader } from '../MenuHeader'
import { useSizeScreen } from '@Hooks/shared/useSizeScreen'
import { useMainLang } from '@Hooks/shared/useMainLang'
import { dataActions } from '@Lang/shared'
import { Fragment, MouseEvent, useState } from 'react'
import { useChangeLang, useThemeMode } from '@Hooks/shared'
import { useChangeThemeMode } from '@Hooks/shared/useChangeThemeMode'
import { TLangSupported, TThemeMode } from '@Types/shared'
import Image from 'next/image'

const stylesHeader = {
  height: 80
}
export const Header = () => {
  const { width: widthScreen } = useSizeScreen()
  const lang = useMainLang()
  const themeMode = useThemeMode()
  const changeLangAction = useChangeLang()
  const changeThemeMode = useChangeThemeMode()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openLang = Boolean(anchorEl)

  const { themeMode: themeModeText, language: languageText } = dataActions[lang]

  const handleLang = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleCloseLang = () => {
    setAnchorEl(null)
  }
  const handleSelectLang = (code: TLangSupported) => {
    changeLangAction(code)
    handleCloseLang()
  }

  const handleChangeThemeMode = (themeMode: TThemeMode) =>
    changeThemeMode(themeMode)

  return (
    <Fragment>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Container>
          <Grid
            container
            sx={stylesHeader}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>
              <LinkTag href="/" color="white">
                <Logo size={SMALL} />
              </LinkTag>
            </Grid>
            <Grid>
              <Grid
                component="nav"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Menu */}
                {widthScreen > BREAKPOINTS_MD && <MenuHeader />}

                {/* Theme Mode */}
                <Tooltip title={themeModeText}>
                  <IconButton
                    onClick={() => {
                      handleChangeThemeMode(themeMode === LIGHT ? DARK : LIGHT)
                    }}
                  >
                    <Icon
                      library="materialDesign"
                      iconName={{
                        materialDesign:
                          themeMode === LIGHT ? 'MdSunny' : 'MdDarkMode'
                      }}
                      size="medium"
                    />
                  </IconButton>
                </Tooltip>

                {/* Lang */}
                <Tooltip title={languageText}>
                  <IconButton
                    id="lang"
                    onClick={handleLang}
                    aria-controls={openLang ? 'lang' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openLang ? 'true' : undefined}
                  >
                    <Image
                      src={flags[lang]}
                      alt={lang}
                      priority
                      width={25}
                      height={25}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="lang"
                  open={openLang}
                  onClose={handleCloseLang}
                  onClick={handleCloseLang}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {langSupported.map(({ code, name }) => (
                    <MenuItem
                      key={code}
                      disabled={code === lang}
                      selected={code === lang}
                      onClick={() => handleSelectLang(code)}
                    >
                      <>
                        <ListItemIcon>
                          <Image
                            src={flags[code]}
                            alt={code}
                            priority
                            width={25}
                            height={25}
                          />
                        </ListItemIcon>
                        <ListItemText>{name}</ListItemText>
                      </>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Fragment>
  )
}
