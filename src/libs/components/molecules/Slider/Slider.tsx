'use client'

import styles from './Slider.module.scss'
import { generateUUID } from '@Utils/uuid'
import clsx from 'clsx'
import { useSlider } from './useSlider'
import { IconButton } from '@Components/atoms/IconButton'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { ISliderOptions, ISliderProps } from './Slider.typed'
import { Content } from '@Components/atoms/Content'

export const Slider = ({ slides, options }: ISliderProps) => {
  const {
    showControls = true,
    loop = false,
    animationType = 'slide'
  } = options as ISliderOptions

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    styleToItemsPerView,
    emblaRef,
    handleOnPrevButtonClick,
    handleOnNextButtonClick
  } = useSlider({ options })

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
                flex: `0 0 ${styleToItemsPerView}%`
              }}
              key={generateUUID()}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {showControls && (
        <Content className={clsx(styles.embla__content_arrow)}>
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
        </Content>
      )}
    </div>
  )
}
