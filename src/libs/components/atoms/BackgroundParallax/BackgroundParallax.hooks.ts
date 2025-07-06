import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TPosition } from './BackgroundParallax.types'

export const useBackgroundParallax = (startPosition: TPosition) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const parallaxSpeed = -0.5 // ajusta para más o menos efecto

  const positions: Record<TPosition, string> = {
    top: '0%',
    center: '50%',
    bottom: '100%'
  }

  const initialPosition = positions[startPosition] || '50%'

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        backgroundPosition: `center ${parseFloat(initialPosition) + parallaxSpeed * 100}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }
  }, [initialPosition, parallaxSpeed])

  return { parallaxRef, initialPosition }
}
