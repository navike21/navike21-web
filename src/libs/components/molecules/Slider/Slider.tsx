'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import type { SliderProps } from './Slider.types'
import { uuid } from '@Helpers/uuid'
import { NextButton, PrevButton } from './SliderArrowButton'
import clsx from 'clsx'
import type { SplideProps } from '@splidejs/react-splide'

export const Slider = ({ children, options }: SliderProps) => {
  const optionsWithDefaults: SplideProps['options'] = {
    classes: {
      pagination: 'splide__pagination flex gap-2 mt-4 justify-center'
    },
    ...options
  }
  return (
    <Splide hasTrack={false} options={optionsWithDefaults}>
      <div className="flex flex-col">
        <SplideTrack>
          {Array.isArray(children) ? (
            children.map(child => {
              return <SplideSlide key={uuid()}>{child}</SplideSlide>
            })
          ) : (
            <SplideSlide>{children}</SplideSlide>
          )}
        </SplideTrack>
        <div className="flex w-full justify-between items-center mt-4">
          <div className={clsx('splide__arrows', 'flex gap-3')}>
            <PrevButton className="splide__arrow splide__arrow--prev" />
            <NextButton className="splide__arrow splide__arrow--next" />
          </div>
          <ul className="splide__pagination" />
        </div>
      </div>
    </Splide>
  )
}
