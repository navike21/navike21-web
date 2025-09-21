import { useHeaderContext } from '@context/HeaderContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const { isSolid, toggleMenu, setIsSolid, setToggleMenu } = useHeaderContext()

  useGSAP(() => {
    const el = headerRef.current
    if (!el) return

    const scrollerEl = (window.__gsap_smoother?.content ?? undefined) as
      | Element
      | undefined

    ScrollTrigger.create({
      scroller: scrollerEl,
      trigger: document.body,
      start: 'top top',
      end: '+=2',
      scrub: true,
      onUpdate: self => {
        const solid = self.progress > 0.5
        setIsSolid(solid)

        if (solid) {
          el.classList.add('bg-white', 'shadow-xl', 'h-20')
          el.classList.remove('bg-transparent', 'h-28')
        } else {
          el.classList.add('bg-transparent', 'h-28')
          el.classList.remove('bg-white', 'shadow-xl', 'h-20')
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return {
    isSolid,
    toggleMenu,
    headerRef,
    setToggleMenu
  }
}
