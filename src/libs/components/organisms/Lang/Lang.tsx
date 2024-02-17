'use client'

import { flags, langSupported } from '@Constants/shared'
import { useChangeLang, useMainLang } from '@Hooks/shared'
import { dataActions } from '@Lang/shared'
import { TLangSupported } from '@Types/shared'
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'

export const Lang = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const lang = useMainLang()
  const changeLangAction = useChangeLang()

  const openLang = Boolean(anchorEl)
  const { language: languageText } = dataActions[lang]

  const handleLang = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleCloseLang = () => {
    setAnchorEl(null)
  }
  const handleSelectLang = (code: TLangSupported) => {
    changeLangAction(code)
    handleCloseLang()
  }

  return (
    <>
      <Tooltip title={languageText}>
        <IconButton
          id="lang"
          onClick={handleLang}
          aria-controls={openLang ? 'lang' : undefined}
          aria-haspopup="true"
          aria-expanded={openLang ? 'true' : undefined}
        >
          <Image src={flags[lang]} alt={lang} priority width={25} height={25} />
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
        elevation={2}
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
    </>
  )
}
