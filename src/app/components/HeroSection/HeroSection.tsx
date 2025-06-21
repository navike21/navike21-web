'use client'

import tentacionesHome from '@Assets/images/projects/tentaciones-gourmet/converted/home-thumb.webp'
import tentacionesStore from '@Assets/images/projects/tentaciones-gourmet/converted/store-thumb.webp'
import tentacionesStoreLocales from '@Assets/images/projects/tentaciones-gourmet/converted/locales-thumb.webp'
import carbyneHome from '@Assets/images/projects/carbyne-safety/converted/home-thumb.webp'
import carbyneAbout from '@Assets/images/projects/carbyne-safety/converted/about-us-thumb.webp'
import carbyneContact from '@Assets/images/projects/carbyne-safety/converted/contact-us-thumb.webp'
import circurela from '@Assets/images/projects/circurela/converted/home-thumb.webp'
import circurelaEvents from '@Assets/images/projects/circurela/converted/events-thumb.webp'
import circurelaMenu from '@Assets/images/projects/circurela/converted/menu-thumb.webp'
import colegioLaUnion from '@Assets/images/projects/colegio-la-union/converted/home-thumb.webp'
import colegioLaUnionAbout from '@Assets/images/projects/colegio-la-union/converted/about-us-thumb.webp'
import eurogourmet from '@Assets/images/projects/eurogourmet/converted/home-thumb.webp'
import eurogourmetBlog from '@Assets/images/projects/eurogourmet/converted/blog-thumb.webp'
import rkPower from '@Assets/images/projects/rk-power/converted/home-thumb.webp'
import rkPowerInfoDetail from '@Assets/images/projects/rk-power/converted/info-detail-thumb.webp'

import { ThreeDMarquee } from '@Components/molecules'
import { Content, FlipWords } from '@Components/atoms'
import clsx from 'clsx'

export const HeroSection = () => {
  const images = [
    carbyneHome.src,
    circurela.src,
    colegioLaUnion.src,
    eurogourmet.src,
    rkPower.src,
    tentacionesHome.src,
    carbyneAbout.src,
    circurelaEvents.src,
    colegioLaUnionAbout.src,
    eurogourmetBlog.src,
    rkPowerInfoDetail.src,
    tentacionesStore.src,
    carbyneContact.src,
    circurelaMenu.src,
    tentacionesStoreLocales.src
  ]

  const words = ['webs', 'apps', 'ecommerce', 'software', 'landing pages']

  return (
    <div
      className={clsx(
        'w-full h-dvh bg-gray-950 flex items-center justify-center relative overflow-hidden max-h-dvh',
        'md:aspect-4/3 md:h-auto',
        'lg:aspect-4/2'
      )}
    >
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
          Construimos {''}
          <FlipWords words={words} className="text-primary-500" /> a la medida
          de tu negocio<span className="text-primary-500">.</span>
        </h2>
      </Content>
      <ThreeDMarquee
        images={images}
        className="opacity-30 absolute left-0 right-0 top-0"
      />
    </div>
  )
}
