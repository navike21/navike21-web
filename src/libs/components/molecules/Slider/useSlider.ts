import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ISliderOptions } from './Slider.typed'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import AutoHeight from 'embla-carousel-auto-height'

export type TUseSliderProps = {
  options?: ISliderOptions
}

export const useSlider = ({ options }: TUseSliderProps) => {
  const {
    autoplay = false,
    autoplayDelay = 5000,
    slidesPerView = 1,
    loop = false,
    animationType = 'slide',
    autoHeight = false
  } = options as ISliderOptions

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: animationType === 'fade' || loop
    },
    [
      Autoplay({ delay: autoplayDelay, active: autoplay }),
      Fade({
        active: animationType === 'fade'
      }),
      AutoHeight({
        active: autoHeight
      })
    ]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const handleOnPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const handleOnNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    styleToItemsPerView: 100 / slidesPerView,
    emblaRef,
    handleOnPrevButtonClick,
    handleOnNextButtonClick
  }
}
