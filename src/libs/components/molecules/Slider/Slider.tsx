'use client'

import { generateUUID } from '@Utils/uuid'
import { useSlider } from './useSlider'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { ISliderOptions, ISliderProps } from './Slider.typed'
import { IconButton } from '@Components/atoms/IconButton'
import {
  Embla,
  EmblaArrowLeft,
  EmblaArrowRight,
  EmblaContainer,
  EmblaContentArrows,
  EmblaSlide,
  EmblaViewport
} from './Slider.styles'

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
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer loop={loop} animationType={animationType}>
          {slides.map(slide => (
            <EmblaSlide
              styleToItemsPerView={styleToItemsPerView}
              key={generateUUID()}
            >
              {slide}
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      {showControls && (
        <EmblaContentArrows>
          <EmblaArrowLeft>
            <IconButton
              type="button"
              onClick={handleOnPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <FaAngleLeft />
            </IconButton>
          </EmblaArrowLeft>
          <EmblaArrowRight>
            <IconButton
              type="button"
              onClick={handleOnNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <FaAngleRight />
            </IconButton>
          </EmblaArrowRight>
        </EmblaContentArrows>
      )}
    </Embla>
  )
}
