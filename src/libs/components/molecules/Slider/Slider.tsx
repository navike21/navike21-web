'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './Slider.module.scss'
import { generateUUID } from '@Utils/uuid'
import clsx from 'clsx'
import { useSlider } from './useSlider'
import { IconButton } from '@Components/atoms/IconButton'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { ISliderOptions, ISliderProps } from './Slider.typed'
import Fade from 'embla-carousel-fade'
import AutoHeight from 'embla-carousel-auto-height'

export const Slider = ({ slides, options }: ISliderProps) => {
  const {
    autoplay = false,
    autoplayDelay = 5000,
    slidesPerView = 1,
    showArrows = true,
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

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    handleOnPrevButtonClick,
    handleOnNextButtonClick
  } = useSlider({ emblaApi })

  return (
    <div className={clsx(styles.embla)}>
      <div className={clsx(styles.embla__viewport)} ref={emblaRef}>
        <div
          className={clsx(styles.embla__container, {
            [styles.embla__container_falseLoop]:
              !loop && animationType === 'slide'
          })}
        >
          {slides.map(slide => (
            <div
              className={styles.embla__slide}
              style={{
                flex: `0 0 ${100 / slidesPerView}%`
              }}
              key={generateUUID()}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <>
          <div className={clsx(styles.embla__arrows, styles.embla__arrow_left)}>
            <IconButton
              type="button"
              onClick={handleOnPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <FaAngleLeft />
            </IconButton>
          </div>
          <div
            className={clsx(styles.embla__arrows, styles.embla__arrow_right)}
          >
            <IconButton
              type="button"
              onClick={handleOnNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <FaAngleRight />
            </IconButton>
          </div>
        </>
      )}
    </div>
  )
}
