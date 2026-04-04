'use client'

import { IconComponent } from '@Components/atoms'
import { useLenisScrollLock } from '@Hooks/useLenisScrollLock'
import clsx, { type ClassValue } from 'clsx'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { createPortal } from 'react-dom'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode
} from 'react'
import Image, { type StaticImageData } from 'next/image'

export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center'
export type Size = 'small' | 'medium' | 'large' | 'full'
export type Animation = 'fade' | 'slide' | 'scale' | 'none'
export type ImagePosition = 'left' | 'right'

export interface ModalProps {
  className?: string
  children?: ReactNode
  position?: Position
  size?: Size
  animation?: Animation
  defaultOpen?: boolean
  isOpen?: boolean
  onClose?: () => void
  showCloseButton?: boolean
  title?: string
  image?: StaticImageData | string
  imagePosition?: ImagePosition
}

const MODAL_EXIT_DURATION_MS = 200
const MODAL_EXIT_DURATION_SECONDS = MODAL_EXIT_DURATION_MS / 1000
const MODAL_OVERLAY_ENTER_DURATION_MS = 200
const MODAL_OVERLAY_ENTER_DURATION_SECONDS =
  MODAL_OVERLAY_ENTER_DURATION_MS / 1000

const presenceContainerVariants: Variants = {
  hidden: {},
  visible: {},
  exit: {
    transition: {
      when: 'afterChildren'
    }
  }
}

const getOverlayExitDelay = (animation: Animation) => {
  if (animation === 'none') return 0

  return MODAL_EXIT_DURATION_SECONDS
}

const getOverlayVariants = (animation: Animation): Variants => ({
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

const getAlignmentClasses = (position: Position) => {
  if (position === 'top') return 'items-start justify-center'
  if (position === 'bottom') return 'items-end justify-center'
  if (position === 'left') return 'items-center justify-start'
  if (position === 'right') return 'items-center justify-end'

  return 'items-center justify-center'
}

const getSizeClasses = (size: Size): string | ClassValue => {
  if (size === 'small') return 'max-w-sm'
  if (size === 'medium') return 'max-w-xl'
  if (size === 'large') return 'max-w-5xl'

  return 'max-w-none w-full h-full max-h-none rounded-[2rem]'
}

const getDirectionalOffset = (position: Position) => {
  if (position === 'top') return { x: 0, y: -32 }
  if (position === 'bottom') return { x: 0, y: 32 }
  if (position === 'left') return { x: -32, y: 0 }
  if (position === 'right') return { x: 32, y: 0 }

  return { x: 0, y: 24 }
}

const getPanelVariants = (
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

export const Modal = ({
  className,
  children,
  position = 'center',
  size = 'medium',
  animation = 'fade',
  defaultOpen = false,
  isOpen,
  onClose,
  showCloseButton = true,
  title,
  image,
  imagePosition = 'left'
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const isModalOpenRef = useRef(defaultOpen)
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)
  const [isScrollLocked, setIsScrollLocked] = useState(defaultOpen)
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  const titleId = useId()
  const isControlled = typeof isOpen === 'boolean'
  const isModalOpen = isControlled ? isOpen : internalIsOpen
  const shouldWaitForExitAnimation = animation !== 'none'

  useLenisScrollLock(isScrollLocked)

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(false)
    }

    onClose?.()
  }, [isControlled, onClose])

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  useEffect(() => {
    isModalOpenRef.current = isModalOpen

    if (isModalOpen) {
      setIsScrollLocked(true)
      return
    }

    if (!shouldWaitForExitAnimation) {
      setIsScrollLocked(false)
    }
  }, [isModalOpen, shouldWaitForExitAnimation])

  useEffect(() => {
    if (!isModalOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen, handleClose])

  useEffect(() => {
    if (!isModalOpen) return

    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    requestAnimationFrame(() => {
      modalRef.current?.focus()
    })

    return () => {
      previousActiveElement?.focus()
    }
  }, [isModalOpen])

  const handleExitComplete = useCallback(() => {
    if (isModalOpenRef.current) return

    setIsScrollLocked(false)
  }, [])

  const modalContent = (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isModalOpen ? (
        <motion.div
          className={clsx(
            'fixed inset-0 z-50 flex p-4 sm:p-6 pointer-events-none',
            getAlignmentClasses(position)
          )}
          variants={presenceContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            type="button"
            className="absolute inset-0 pointer-events-auto bg-slate-950/62 backdrop-blur-xs"
            aria-label="Close modal"
            onClick={handleClose}
            variants={getOverlayVariants(animation)}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            tabIndex={-1}
            data-lenis-prevent=""
            data-lenis-prevent-wheel=""
            data-lenis-prevent-touch=""
            className={clsx(
              'w-[95%] flex gap-3.5',
              'grid grid-cols-2',
              'bg-white text-slate-950',
              'relative z-10 pointer-events-auto overflow-y-auto overscroll-contain outline-none',
              'max-h-[calc(100dvh-2rem)] rounded-md sm:max-h-[calc(100dvh-3rem)]',
              'sm:grid-cols-5 sm:gap-0',
              'lg:w-full',
              getSizeClasses(size),
              className
            )}
            variants={getPanelVariants(animation, position)}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={event => {
              event.stopPropagation()
            }}
          >
            {image && (
              <Image
                src={image}
                alt="Modal image"
                width={2000}
                className={clsx(
                  'w-full h-full object-cover hidden object-center',
                  'sm:col-span-2 sm:block',
                  imagePosition === 'left' ? 'order-first' : 'order-last'
                )}
              />
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={handleClose}
                aria-label="Cerrar modal"
                className={clsx(
                  'absolute cursor-pointer top-3 right-3 text-slate-500 transition-all ease-in-out z-20',
                  'hover:text-slate-700 hover:bg-slate-100 outline-none ',
                  'focus:outline-none focus:ring-2 focus:ring-slate-400',
                  'w-9 h-9 flex items-center justify-center rounded-sm'
                )}
              >
                <IconComponent
                  icon="RiCloseLine"
                  className="cursor-pointer w-8 h-8"
                />
              </button>
            )}
            <div
              className={clsx(
                'flex flex-col gap-4 bg-white py-9 px-9 z-10 col-span-2',
                'sm:col-span-3 sm:px-12',
                'md:px-16'
              )}
            >
              {title && (
                <div className={clsx('w-full pb-3 border-b border-slate-200')}>
                  <h2
                    id={titleId}
                    className={clsx(
                      'text-lg font-semibold leading-tight text-slate-950 w-[90%]',
                      'md:text-2xl md:w-[85%]',
                      'lg:text-3xl lg:w-[79%]'
                    )}
                  >
                    {title}
                  </h2>
                </div>
              )}

              <div className={clsx('')}>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )

  if (!portalTarget) return null

  return createPortal(modalContent, portalTarget)
}

export { useModal } from './useModal'
