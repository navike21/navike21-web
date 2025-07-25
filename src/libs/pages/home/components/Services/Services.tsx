'use client'

import { Content } from '@Components/atoms'
import { Card, Title } from '@Components/molecules'
import clsx from 'clsx'
import { useServices } from './Services.hooks'

export const Services = () => {
  const { currentLang, services, title, subtitle } = useServices()

  return (
    <section className="relative">
      <Content className={clsx('sectionContent flex-col flex gap-16')}>
        <Title title={title} subtitle={subtitle} />
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
    </section>
  )
}
