import { Easing, Variants } from 'motion/react'

export const EASING: Easing[] = ['easeInOut', 'easeIn', 'easeOut', 'linear']

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
