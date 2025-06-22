import { useCallback, useEffect, useRef } from 'react'
import { TPosition } from './BackgroundParallax.types'

export const useBackgroundParallax = (startPosition: TPosition) => {
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

  return { parallaxRef, initialPosition }
}
