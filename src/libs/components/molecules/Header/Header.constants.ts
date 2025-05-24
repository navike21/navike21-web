import { Variants } from 'motion/react'

export const EASING: number[] = [0.77, 0, 0.175, 1]

export const ITEMS_VARIANTS: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: EASING,
      duration: 0.4
    }
  },
  closed: {
    y: -40,
    opacity: 0,
    transition: {
      ease: EASING,
      duration: 0.3
    }
  }
}
