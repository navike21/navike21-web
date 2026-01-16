'use client'

import { type ReactNode, useCallback, useMemo, useState } from 'react'
import { HeaderContext } from './headerContext.hooks'

interface HeaderProviderProps {
  children: ReactNode
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [headerState, setHeaderState] = useState({
    isSolid: false,
    toggleMenu: false
  })

  const setIsSolid = useCallback(
    (value: boolean) => setHeaderState(prev => ({ ...prev, isSolid: value })),
    []
  )

  const setToggleMenu = useCallback(
    (value: boolean) =>
      setHeaderState(prev => ({ ...prev, toggleMenu: value })),
    []
  )

  const value = useMemo(
    () => ({
      isSolid: headerState.isSolid,
      toggleMenu: headerState.toggleMenu,
      setIsSolid,
      setToggleMenu
    }),
    [headerState.isSolid, headerState.toggleMenu, setIsSolid, setToggleMenu]
  )

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}
