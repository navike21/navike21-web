'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton } from './SliderArrowButton'
import { DotButton } from './SliderDotButton'
import { usePrevNextButtons, useDotButton } from './slider.hooks'
import { uuid } from '@Helpers/uuid'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type TSliderProps = {
  slides: number[]
  options?: EmblaOptionsType
}

export const Slider = ({ slides, options }: TSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      for (const [snapIndex, scrollSnap] of emblaApi
        .scrollSnapList()
        .entries()) {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex] ?? []

        for (const slideIndex of slidesInSnap) {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) continue

          if (engine.options.loop) {
            for (const loopItem of engine.slideLooper.loopPoints) {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            }
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          const slideNode = emblaApi.slideNodes()[slideIndex]
          if (slideNode) slideNode.style.opacity = opacity
        }
      }
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
    <div className="max-w-[48rem] mx-auto [--slide-height:19rem] [--slide-spacing:1rem] [--slide-size:70%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[var(--slide-spacing)]">
          {slides.map(index => (
            <div
              key={index}
              className="flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] transform-gpu"
            >
              <img
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
                className="block w-full h-[var(--slide-height)] object-cover rounded-[1.8rem]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center -mr-[calc((2.6rem-1.4rem)/2)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={uuid()}
              onClick={() => onDotButtonClick(index)}
              isSelected={index === selectedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
