'use client'

import { useHeaderContext } from '@context/HeaderContext'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { useRef } from 'react'

export const useHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const { isSolid, setIsSolid, toggleMenu, setToggleMenu } = useHeaderContext()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latestY => {
    const threshold = 100 // píxeles desde arriba
    const solid = latestY > threshold
    if (solid !== isSolid) {
      setIsSolid(solid)
    }
  })

  return {
    headerRef,
    isSolid,
    toggleMenu,
    setToggleMenu
  }
}
