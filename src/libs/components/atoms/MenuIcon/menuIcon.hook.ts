import { useHeaderContext } from '@context/HeaderContext'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

type TEase = gsap.EaseFunction | gsap.EaseString

export const useMenuIcon = () => {
  const { toggleMenu } = useHeaderContext()
  const topLine = useRef<SVGLineElement>(null)
  const middleLine = useRef<SVGLineElement>(null)
  const bottomLine = useRef<SVGLineElement>(null)

  const DURATION = 0.5
  const EASE: TEase = 'expo'

  useGSAP(
    () => {
      if (toggleMenu) {
        gsap.to(topLine.current, {
          duration: DURATION,
          y: 8,
          rotation: 45,
          transformOrigin: 'center',
          ease: EASE
        })
        gsap.to(middleLine.current, {
          duration: DURATION,
          opacity: 0,
          ease: EASE
        })
        gsap.to(bottomLine.current, {
          duration: DURATION,
          y: -8,
          rotation: -45,
          transformOrigin: 'center',
          ease: EASE
        })
      } else {
        gsap.to(topLine.current, {
          duration: DURATION,
          y: 0,
          rotation: 0,
          ease: EASE
        })
        gsap.to(middleLine.current, {
          duration: DURATION,
          opacity: 1,
          ease: EASE
        })
        gsap.to(bottomLine.current, {
          duration: DURATION,
          y: 0,
          rotation: 0,
          ease: EASE
        })
      }
    },
    { dependencies: [toggleMenu] }
  )

  return {
    topLine,
    middleLine,
    bottomLine
  }
}
