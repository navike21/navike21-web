import { useEffect, useState } from 'react'
import { EStage } from './Header.types'

export const useHeader = () => {
  const [menuState, setMenuState] = useState(false)
  const [stage, setStage] = useState<EStage>(EStage.CLOSED)

  const handleToggle = () => {
    if (menuState) {
      setStage(EStage.CLOSING)
    } else {
      setMenuState(true)
      setStage(EStage.IMAGE)
    }
  }

  useEffect(() => {
    if (stage === EStage.IMAGE) {
      const timer = setTimeout(() => setStage(EStage.MENU_ITEMS), 400)
      return () => clearTimeout(timer)
    }

    if (stage === EStage.CLOSING) {
      const timer = setTimeout(() => {
        setStage(EStage.CLOSED)
        setMenuState(false)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [stage])

  const isOpen = menuState
  const showImageAndBackground =
    stage === EStage.IMAGE ||
    stage === EStage.MENU_ITEMS ||
    stage === EStage.CLOSING
  const showMenuItems = stage === EStage.MENU_ITEMS

  return {
    isOpen,
    showImageAndBackground,
    showMenuItems,
    handleToggle
  }
}
