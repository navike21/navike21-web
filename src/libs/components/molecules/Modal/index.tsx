'use client'

import { IconComponent } from '@Components/atoms'
import { useLenisScrollLock } from '@Hooks/useLenisScrollLock'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { createPortal } from 'react-dom'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import type { ModalProps } from './Modal.types'
import {
  getAlignmentClasses,
  getOverlayVariants,
  getPanelVariants,
  getSizeClasses
} from './useModal'
import { presenceContainerVariants } from './Modal.constants'

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
