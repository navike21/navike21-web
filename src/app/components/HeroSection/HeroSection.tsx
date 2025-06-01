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
        <Content
          className={clsx('h-full flex items-end-safe', 'xs:items-center')}
        >
          <div
            className={clsx(
              'flex flex-col gap-4 px-5 py-16',
              'xs:gap-3  xs:w-3/4',
              'md:w-1/2'
            )}
          >
            <h2
              className={clsx(
                'flex flex-col title-md ',
                'xs:title-lg',
                'md:title-xl',
                '2xl:title-2xl'
              )}
            >
              Software a medida,{' '}
              <span className="text-primary-500">diseñado para el éxito.</span>
            </h2>
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
