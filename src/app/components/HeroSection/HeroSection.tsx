import { BackgroundParallax } from '@Components/atoms'
import { EAnimationType, Slider } from '@Components/molecules'
import { youngAttractiveWoman } from '@Constants/images'
import clsx from 'clsx'

export const HeroSection = () => {
  return (
    <Slider animationType={EAnimationType.FADE}>
      <BackgroundParallax
        className={clsx('h-[calc(100dvh-68px)] w-full')}
        backgroundImage={youngAttractiveWoman.src}
        overlay
      >
        <div>mensaje</div>
      </BackgroundParallax>
      <div className="h-[calc(100dvh-68px)] w-full">
        <div>mensaje</div>
      </div>
    </Slider>
  )
}
