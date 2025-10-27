import { createContext, useContext } from 'react'

interface IHeaderContext {
  isSolid: boolean
  toggleMenu: boolean
  setIsSolid: (value: boolean) => void
  setToggleMenu: (value: boolean) => void
}

export const HeaderContext = createContext<IHeaderContext | undefined>(undefined)

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider')
  }
  return context
}
