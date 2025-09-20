'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode
} from 'react'

interface IHeaderContext {
  isSolid: boolean
  toggleMenu: boolean
  setIsSolid: (value: boolean) => void
  setToggleMenu: (value: boolean) => void
}

interface IHeaderProviderProps {
  children: ReactNode
}

const HeaderContext = createContext<IHeaderContext | undefined>(undefined)

export const HeaderProvider = ({ children }: IHeaderProviderProps) => {
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

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider')
  }
  return context
}
