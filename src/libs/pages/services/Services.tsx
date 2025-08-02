'use client'

import { BackgroundParallax, Content, LinkButton } from '@Components/atoms'
import { Card, HeroSectionSubPage, Title } from '@Components/molecules'
import clsx from 'clsx'
import { useServices } from './useServices'

export const Services = () => {
  const {
    heroImage,
    currentLang,
    services,
    contactLink,
    imageContact,
    heroSectionText,
    servicesList,
    contactUs
  } = useServices()
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
      <div className="relative">
        <BackgroundParallax
          backgroundImage={imageContact}
          className={clsx('absolute inset-0 w-full h-full z-0 top-0 bottom-0')}
          startPosition="center"
          overlay
        />
        <Content
          className={clsx(
            'sectionContent flex-col flex gap-16 relative z-10',
            'md:items-center md:gap-24 md:justify-between '
          )}
        >
          <div
            className={clsx(
              'w-full pt-60',
              'md:grid md:grid-cols-2 md:gap-12 md:pt-0'
            )}
          >
            <section className="flex flex-col gap-4">
              <Title title={contactUs.title} align="left" />
              <p>{contactUs.description}</p>
              <LinkButton href={contactLink.href} className="mt-4">
                {contactLink.text}
              </LinkButton>
            </section>
            <span />
          </div>
        </Content>
      </div>
    </>
  )
}
