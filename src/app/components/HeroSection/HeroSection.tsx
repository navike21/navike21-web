import { BackgroundParallax, Content } from '@Components/atoms'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import Slider from 'react-slick'
import { useHeroSection } from './HeroSection.hooks'

export const HeroSection = () => {
  const { infoSlider, settingsSlider } = useHeroSection()

  return (
    <div className="w-full">
      <Slider {...settingsSlider}>
        {infoSlider.map(slide => (
          <BackgroundParallax
            backgroundImage={slide.image}
            className={clsx('h-dvh w-full')}
            key={uuidV7()}
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
                    'flex flex-col title-md text-white',
                    'xs:title-lg',
                    'md:title-xl',
                    '2xl:title-2xl'
                  )}
                >
                  {slide.title.split('**')[0]}
                  <span className="text-primary-500">
                    {slide.title.split('**')[1]}
                  </span>
                </h2>
                <p className="text-white">{slide.description}</p>
              </div>
            </Content>
          </BackgroundParallax>
        ))}
      </Slider>
    </div>
  )
}
