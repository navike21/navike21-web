import { useEffect, useRef, useState } from 'react'
import { EStage } from './Header.types'
import { useMotionValueEvent, useScroll } from 'motion/react'

export const useHeader = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [menuState, setMenuState] = useState(false)
  const [stage, setStage] = useState<EStage>(EStage.CLOSED)
  const [visible, setVisible] = useState<boolean>(false)

  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  const handleToggle = () => {
    if (menuState) {
      setStage(EStage.CLOSING)
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
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
    ref,
    visible,
    showImageAndBackground,
    showMenuItems,
    handleToggle
  }
}
