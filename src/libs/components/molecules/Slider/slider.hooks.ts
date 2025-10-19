import type { EmblaCarouselType } from 'embla-carousel'
import type { TUseDotButtonType, TUsePrevNextButtonsType } from './slider.types'
import { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): TUsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const handleOnSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const api = emblaApi
    // call the handler asynchronously to avoid synchronous setState in the effect body
    const rafId = requestAnimationFrame(() => handleOnSelect(api))
    api.on('reInit', handleOnSelect).on('select', handleOnSelect)

    return () => {
      cancelAnimationFrame(rafId)
      api.off('reInit', handleOnSelect).off('select', handleOnSelect)
    }
  }, [emblaApi, handleOnSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): TUseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const api = emblaApi
    // call the handlers asynchronously to avoid synchronous setState in the effect body
    const rafId = requestAnimationFrame(() => {
      onInit(api)
      onSelect(api)
    })

    api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)

    return () => {
      cancelAnimationFrame(rafId)
      api.off('reInit', onInit).off('reInit', onSelect).off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}
