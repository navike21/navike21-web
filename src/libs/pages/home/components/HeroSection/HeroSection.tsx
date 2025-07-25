'use client'

import {
  BackgroundParallax,
  LinkButton,
  Content,
  TextRotate
} from '@Components/atoms'
import { manWorkingNight } from '@Constants/backgroundImages'

import clsx from 'clsx'
import { useHeroSection } from './HeroSection.hooks'

export const HeroSection = () => {
  const {
    rotateWords,
    controlActionText,
    controlActionLink,
    description,
    principalText
  } = useHeroSection()

  return (
    <div
      className={clsx(
        'w-full h-dvh bg-gray-950 flex items-end justify-center relative overflow-hidden max-h-dvh',
        'md:aspect-4/3',
        'lg:aspect-4/2 lg:h-auto'
      )}
    >
      <BackgroundParallax
        backgroundImage={manWorkingNight.lg.src}
        className="absolute left-0 right-0 top-0 bottom-0"
        overlay
      />
      <Content
        className={clsx(
          'relative flex items-start justify-start flex-col gap-5 pb-14',
          'sm:pb-8',
          'lg:pb-12',
          'xl:pb-28'
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
          {principalText} {''}
          <TextRotate words={rotateWords} className="text-gradient-primary" />
        </h2>
        <p className={clsx('paragraph-xs', 'sm:w-8/12', 'lg:w-6/12')}>
          {description}
        </p>
        <LinkButton href={controlActionLink}>{controlActionText}</LinkButton>
      </Content>
    </div>
  )
}
