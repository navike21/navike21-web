import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TPosition } from './BackgroundParallax.types'

export const useBackgroundParallax = (startPosition: TPosition) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const parallaxSpeed = -0.5

  const positions: Record<TPosition, string> = {
    top: '0%',
    center: '50%',
    bottom: '100%'
  }

  const initialPosition = positions[startPosition] || '50%'

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          backgroundPosition: `center ${parseFloat(initialPosition) + parallaxSpeed * 100}%`,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            // Añadimos esto:
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        })
      }
    }, parallaxRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [initialPosition, parallaxSpeed])

  return { parallaxRef, initialPosition }
}
