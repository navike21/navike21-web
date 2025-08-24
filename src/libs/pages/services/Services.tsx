'use client'

import { Content } from '@Components/atoms'
import { Card, HeroSectionSubPage, Title } from '@Components/molecules'
import clsx from 'clsx'
import { useServices } from './useServices'
import { ContactSectionBanner } from '@Components/bannerSections'

export const Services = () => {
  const { heroImage, currentLang, services, heroSectionText, servicesList } =
    useServices()
  return (
    <>
      <HeroSectionSubPage
        title={heroSectionText.title}
        description={heroSectionText.description}
        backgroundImage={heroImage}
        startPositionImage="top"
      />
      <div className={clsx('bg-slate-950')}>
        <Content
          className={clsx(
            'sectionContent flex-col flex gap-16',
            'md:items-center md:gap-24 md:justify-between'
          )}
        >
          <Title
            subtitle={servicesList.title}
            title={servicesList.description}
            className={clsx('w-full', 'md:w-1/2')}
            align="center"
          />
          <div
            className={clsx(
              'grid grid-cols-1 gap-8',
              'sm:grid-cols-2',
              'md:grid-cols-3',
              'lg:gap-8',
              'xl:grid-cols-4 xl:gap-5'
            )}
          >
            {services.map(({ id, image, language }) => (
              <Card
                key={id}
                title={language[currentLang].title}
                description={language[currentLang].description}
                image={image}
                href={language[currentLang].slug}
                className={clsx('w-full h-80', 'lg:aspect-2/3 lg:h-auto')}
              />
            ))}
          </div>
        </Content>
      </div>
      <ContactSectionBanner />
    </>
  )
}
