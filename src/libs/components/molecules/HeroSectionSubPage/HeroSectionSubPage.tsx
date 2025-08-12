import { BackgroundParallax, Content } from '@Components/atoms'
import { TPosition } from '@Components/atoms/BackgroundParallax/BackgroundParallax.types'
import { parseTitleWithHighlight } from '@Utils/parseTitleWithHighlight'
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
        'w-full aspect-4/6 bg-gray-950 flex items-end justify-center relative overflow-hidden max-h-dvh',
        'md:aspect-4/2 md:max-h-[500px]',
        'lg:aspect-5/3 lg:h-auto lg:max-h-dvh',
        '2xl:aspect-5/2 2xl:h-auto 2xl:max-h-[650px]'
      )}
    >
      <div
        className={clsx(
          'absolute left-0 right-0 top-0 -bottom-7 z-10',
          'bg-gradient-to-b from-slate-950/0 via-slate-950/0 to-slate-950'
        )}
      />
      <BackgroundParallax
        backgroundImage={backgroundImage}
        className="absolute left-0 right-0 top-0 bottom-0 z-0"
        startPosition={startPositionImage}
        overlay
      />
      <Content
        className={clsx(
          'relative flex items-start justify-start flex-col gap-5 pb-14 sectionContent z-20',
          'sm:pb-8',
          'lg:pb-12'
        )}
      >
        <h1
          className={clsx(
            'z-10 text-left relative title-lg text-white transition-all',
            'sm:w-8/12',
            'md:title-2xl md:w-10/12',
            'lg:title-2xl lg:w-6/12',
            '2xl:title-3xl 2xl:w-7/12'
          )}
        >
          {parseTitleWithHighlight(title)}
        </h1>
        <p
          className={clsx(
            'paragraph-xs text-white',
            'sm:w-8/12',
            'md:w-10/12',
            'lg:w-6/12'
          )}
        >
          {description}
        </p>
      </Content>
    </div>
  )
}
