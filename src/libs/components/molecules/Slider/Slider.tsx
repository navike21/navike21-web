'use client'

import { motion } from 'motion/react'
import clsx from 'clsx'
import type { ISliderProps } from './slider.types'
import { useSlider } from './slider.hooks'
import { NextButton, PrevButton } from './SliderArrowButton'
import { DotButton } from './SliderDotButton'

export function Slider({ options = {}, children }: Readonly<ISliderProps>) {
  const {
    emblaApi,
    emblaRef,
    selectedIndex,
    scrollSnaps,
    slideBasis,
    mounted,
    fade,
    dots,
    arrows
  } = useSlider(options)

  return (
    <div className="relative w-full">
      <div
        ref={emblaRef}
        className="overflow-hidden transition-[height] duration-500 ease-in-out"
      >
        <div className={clsx('flex')}>
          {children.map((child, index) => (
            <motion.div
              key={index}
              style={{ flex: `0 0 ${slideBasis}`, maxWidth: slideBasis }}
              className={clsx('flex items-center justify-center')}
              animate={fade ? { opacity: selectedIndex === index ? 1 : 0 } : {}}
              transition={{ duration: 0.45 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>

      <div className={clsx('flex w-full justify-between items-center px-4')}>
        {mounted && arrows && emblaApi && (
          <div className={clsx('flex gap-3')}>
            <PrevButton onClick={() => emblaApi.scrollPrev()} />
            <NextButton onClick={() => emblaApi.scrollNext()} />
          </div>
        )}

        {mounted && dots && (
          <div className="flex justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <DotButton
                key={i}
                isSelected={i === selectedIndex}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
