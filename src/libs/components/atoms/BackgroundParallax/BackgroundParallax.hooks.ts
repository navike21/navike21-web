import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TPosition } from './BackgroundParallax.types'

export const useBackgroundParallax = (startPosition: TPosition) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const parallaxSpeed = 0.9

  const verticalAlignments: Record<TPosition, string> = {
    top: 'top',
    center: 'center',
    bottom: 'bottom'
  }

  const objectPosition = verticalAlignments[startPosition] || 'center'

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { y: -parallaxSpeed * 100 },
        {
          y: parallaxSpeed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      )
    }, imageRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [parallaxSpeed])

  return {
    imageRef,
    objectPosition
  }
}
