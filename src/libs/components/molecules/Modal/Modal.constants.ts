import type { Variants } from 'motion/react'

const MODAL_EXIT_DURATION_MS = 200
export const MODAL_EXIT_DURATION_SECONDS = MODAL_EXIT_DURATION_MS / 1000
const MODAL_OVERLAY_ENTER_DURATION_MS = 200
export const MODAL_OVERLAY_ENTER_DURATION_SECONDS =
  MODAL_OVERLAY_ENTER_DURATION_MS / 1000

export const presenceContainerVariants: Variants = {
  hidden: {},
  visible: {},
  exit: {
    transition: {
      when: 'afterChildren'
    }
  }
}
