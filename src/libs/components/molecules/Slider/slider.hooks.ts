import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ISliderOptions } from './slider.types'
import Autoplay from 'embla-carousel-autoplay'
import AutoHeight from 'embla-carousel-auto-height'
import useEmblaCarousel from 'embla-carousel-react'

export const useSlider = (options: ISliderOptions) => {
  const {
    autoplay = false,
    interval = 4000,
    loop = true,
    fade = false,
    dots = true,
    arrows = true,
    slidesToShow: defaultSlidesToShow = 1,
    responsive = []
  } = options

  // Embla Plugins
  const plugins = useMemo(() => {
    const list = []
    if (autoplay)
      list.push(Autoplay({ delay: interval, stopOnInteraction: true }))
    list.push(AutoHeight())
    return list
  }, [autoplay, interval])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, plugins)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  // Calcular slidesToShow dinámico (solo en cliente)
  const getActiveSlidesToShow = useCallback(() => {
    if (typeof window === 'undefined') return defaultSlidesToShow
    const width = window.innerWidth
    const sorted = [...responsive].sort((a, b) => a.breakpoint - b.breakpoint)
    let active = defaultSlidesToShow
    for (const r of sorted) {
      if (width >= r.breakpoint) {
        const v = r.settings?.slidesToShow
        if (typeof v === 'number') active = v
      }
    }
    return active
  }, [defaultSlidesToShow, responsive])

  const [slidesToShow, setSlidesToShow] = useState(defaultSlidesToShow)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => setSlidesToShow(getActiveSlidesToShow())
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getActiveSlidesToShow])

  // Si el componente aún no está montado en cliente, no variar estilos dinámicos
  const slideBasis = mounted
    ? `${100 / Math.max(1, slidesToShow)}%`
    : `${100 / defaultSlidesToShow}%`

  return {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollSnaps,
    slideBasis,
    mounted,
    fade,
    dots,
    arrows
  }
}
