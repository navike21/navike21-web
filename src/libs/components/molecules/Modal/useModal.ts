import type { Variants } from 'motion/react'
import {
  MODAL_EXIT_DURATION_SECONDS,
  MODAL_OVERLAY_ENTER_DURATION_SECONDS
} from './Modal.constants'
import type { Position, Size, Animation } from './Modal.types'
import type { ClassValue } from 'clsx'

export const getOverlayExitDelay = (animation: Animation) => {
  if (animation === 'none') return 0

  return MODAL_EXIT_DURATION_SECONDS
}

export const getOverlayVariants = (animation: Animation): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MODAL_OVERLAY_ENTER_DURATION_SECONDS,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: MODAL_EXIT_DURATION_SECONDS,
      delay: getOverlayExitDelay(animation),
      ease: 'easeIn'
    }
  }
})

export const getAlignmentClasses = (position: Position) => {
  if (position === 'top') return 'items-start justify-center'
  if (position === 'bottom') return 'items-end justify-center'
  if (position === 'left') return 'items-center justify-start'
  if (position === 'right') return 'items-center justify-end'

  return 'items-center justify-center'
}

export const getSizeClasses = (size: Size): string | ClassValue => {
  if (size === 'small') return 'max-w-sm'
  if (size === 'medium') return 'max-w-xl'
  if (size === 'large') return 'max-w-5xl'

  return 'max-w-none w-full h-full max-h-none rounded-[2rem]'
}

export const getDirectionalOffset = (position: Position) => {
  if (position === 'top') return { x: 0, y: -32 }
  if (position === 'bottom') return { x: 0, y: 32 }
  if (position === 'left') return { x: -32, y: 0 }
  if (position === 'right') return { x: 32, y: 0 }

  return { x: 0, y: 24 }
}

export const getPanelVariants = (
  animation: Animation,
  position: Position
): Variants => {
  const directionalOffset = getDirectionalOffset(position)

  if (animation === 'none') {
    return {
      hidden: { opacity: 0, x: 0, y: 0, scale: 1 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0,
          delay: MODAL_OVERLAY_ENTER_DURATION_SECONDS
        }
      },
      exit: {
        opacity: 0,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0
        }
      }
    }
  }

  if (animation === 'scale') {
    const hiddenState = { opacity: 0, scale: 0.96, y: 16 }

    return {
      hidden: hiddenState,
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          delay: MODAL_OVERLAY_ENTER_DURATION_SECONDS,
          type: 'spring',
          stiffness: 380,
          damping: 30
        }
      },
      exit: {
        ...hiddenState,
        transition: {
          duration: MODAL_EXIT_DURATION_SECONDS,
          ease: 'easeIn'
        }
      }
    }
  }

  if (animation === 'slide') {
    const hiddenState = {
      opacity: 0,
      ...directionalOffset
    }

    return {
      hidden: hiddenState,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: MODAL_OVERLAY_ENTER_DURATION_SECONDS,
          type: 'spring',
          stiffness: 360,
          damping: 30
        }
      },
      exit: {
        ...hiddenState,
        transition: {
          duration: MODAL_EXIT_DURATION_SECONDS,
          ease: 'easeIn'
        }
      }
    }
  }

  if (animation === 'fade') {
    const hiddenState = { opacity: 0 }

    return {
      hidden: hiddenState,
      visible: {
        opacity: 1,
        transition: {
          duration: 0.22,
          delay: MODAL_OVERLAY_ENTER_DURATION_SECONDS,
          ease: 'easeOut'
        }
      },
      exit: {
        ...hiddenState,
        transition: {
          duration: MODAL_EXIT_DURATION_SECONDS,
          ease: 'easeIn'
        }
      }
    }
  }

  const hiddenState = { opacity: 0, y: 12 }

  return {
    hidden: hiddenState,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        delay: MODAL_OVERLAY_ENTER_DURATION_SECONDS,
        ease: 'easeOut'
      }
    },
    exit: {
      ...hiddenState,
      transition: {
        duration: MODAL_EXIT_DURATION_SECONDS,
        ease: 'easeIn'
      }
    }
  }
}
