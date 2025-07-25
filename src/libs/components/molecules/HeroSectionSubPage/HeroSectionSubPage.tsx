import { BackgroundParallax, Content } from '@Components/atoms'
import { TPosition } from '@Components/atoms/BackgroundParallax/BackgroundParallax.types'
import clsx from 'clsx'
import React from 'react'

interface IHeroSectionSubPageProps {
  title: string
  description: string
  backgroundImage: string
  startPositionImage?: TPosition
}

export const HeroSectionSubPage = ({
  title,
  description,
  backgroundImage,
  startPositionImage = 'center'
}: IHeroSectionSubPageProps) => {
  return (
    <div
      className={clsx(
        'w-full aspect-4/3 bg-gray-950 flex items-end justify-center relative overflow-hidden max-h-[500px]',
        'md:aspect-4/2',
        'lg:aspect-5/2 lg:h-auto'
      )}
    >
      <BackgroundParallax
        backgroundImage={backgroundImage}
        className="absolute left-0 right-0 top-0 bottom-0"
        startPosition={startPositionImage}
        overlay
      />
      <Content
        className={clsx(
          'relative flex items-start justify-start flex-col gap-5 pb-14',
          'sm:pb-8',
          'lg:pb-20'
        )}
      >
        <h2
          className={clsx(
            'z-10 text-left relative title-lg text-white transition-all',
            'sm:w-8/12',
            'md:title-2xl',
            'lg:title-2xl lg:w-6/12',
            '2xl:title-3xl'
          )}
        >
          {title}
        </h2>
        <p className={clsx('paragraph-xs', 'sm:w-8/12', 'lg:w-6/12')}>
          {description}
        </p>
      </Content>
    </div>
  )
}
