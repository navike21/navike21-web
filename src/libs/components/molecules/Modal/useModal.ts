'use client'

import { useCallback, useState } from 'react'

export interface UseModalOptions {
  initialOpen?: boolean
  onClose?: () => void
}

export interface UseModalReturn {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export const useModal = ({
  initialOpen = false,
  onClose
}: UseModalOptions = {}): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(currentIsOpen => {
      if (!currentIsOpen) return currentIsOpen

      onClose?.()
      return false
    })
  }, [onClose])

  const toggleModal = useCallback(() => {
    setIsOpen(currentIsOpen => {
      const nextIsOpen = !currentIsOpen

      if (!nextIsOpen) {
        onClose?.()
      }

      return nextIsOpen
    })
  }, [onClose])

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  }
}
