'use client'

import { BackgroundParallax, Content, TextRotate } from '@Components/atoms'
import { manWorkingNight } from '@Constants/backgroundsImages'
import clsx from 'clsx'

export const HeroSection = () => {
  const words = [
    'webs',
    'apps móviles',
    'ecommerce',
    'software a medida',
    'landing pages',
    'UX/UI'
  ]

  return (
    <div
      className={clsx(
        'w-full h-dvh bg-gray-950 flex items-center justify-center relative overflow-hidden max-h-dvh',
        'md:aspect-4/3',
        'lg:aspect-4/2 lg:h-auto'
      )}
    >
      <BackgroundParallax
        backgroundImage={manWorkingNight.src}
        className="absolute left-0 right-0 top-0 bottom-0"
        overlay
      />
      <Content className="relative flex items-center justify-start">
        <h2
          className={clsx(
            'z-10 font-bold text-left relative title-xl text-white transition-all',
            'sm:w-8/12',
            'md:title-2xl',
            'lg:title-2xl lg:w-6/12',
            '2xl:title-3xl'
          )}
        >
          Transformamos ideas en {''}
          <TextRotate words={words} className="text-gradient-primary" />
        </h2>
      </Content>
    </div>
  )
}
