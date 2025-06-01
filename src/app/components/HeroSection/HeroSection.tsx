import { BackgroundParallax, Content } from '@Components/atoms'
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
        <Content className="h-full flex items-end-safe">
          <div className="px-5 py-14">
            <p>
              Creamos soluciones digitales que impulsan tu negocio, con
              tecnología de vanguardia
            </p>
          </div>
        </Content>
      </BackgroundParallax>
      <div className="h-[calc(100dvh-68px)] w-full">
        <div>mensaje</div>
      </div>
    </Slider>
  )
}
