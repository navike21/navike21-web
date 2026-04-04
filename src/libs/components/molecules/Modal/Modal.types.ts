import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

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
