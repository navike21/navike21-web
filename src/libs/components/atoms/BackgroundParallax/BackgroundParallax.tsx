'use client'

import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef
} from 'react'
import styles from './BackgroundParallax.module.scss'
import clsx from 'clsx'

type TPosition = 'top' | 'center' | 'bottom'

export interface IBackgroundParallaxProps
  extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string
  children: ReactNode
  overlay?: boolean
  startPosition?: TPosition
}

export const BackgroundParallax = ({
  backgroundImage,
  children,
  className,
  overlay = false,
  startPosition = 'top'
}: IBackgroundParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const parallaxSpeed = 0.3

  const positions: Record<TPosition, string> = {
    top: '0%',
    center: '50%',
    bottom: '100%'
  }

  const initialPosition = positions[startPosition] ?? '50%'

  const handleScroll = useCallback(() => {
    const offsetY = window.scrollY
    if (parallaxRef.current) {
      parallaxRef.current.style.backgroundPosition = `center calc(${initialPosition} + ${
        offsetY * parallaxSpeed
      }px)`
    }
  }, [initialPosition, parallaxSpeed])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className={clsx(styles.backgroundContent, className, {
        [styles.backgroundContent_overlay]: overlay
      })}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center ${initialPosition}`
      }}
      ref={parallaxRef}
    >
      {children}
    </div>
  )
}
