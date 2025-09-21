import { useEffect } from 'react'

export const useDisableScroll = (active: boolean): void => {
  useEffect(() => {
    if (!active) return

    const preventScroll = (event: Event) => {
      event.preventDefault()
    }

    // Deshabilitar scroll en desktop
    document.body.style.overflow = 'hidden'

    // Deshabilitar scroll táctil en mobile
    document.addEventListener('touchmove', preventScroll, { passive: false })

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [active])
}
