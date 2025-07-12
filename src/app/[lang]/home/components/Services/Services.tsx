'use client'

import { Content } from '@Components/atoms'
import { Card, Title } from '@Components/molecules'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { services } from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

import clsx from 'clsx'

export const Services = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const { href } = getInfoPage({
    lang: currentLang,
    key: 'services'
  })

  return (
    <section className="relative">
      <Content className={clsx('sectionContent flex-col flex gap-16')}>
        <Title
          title="De ideas a **resultados confiables**"
          subtitle="Nuestros Servicios"
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
              href={`.${href}/${language[currentLang].slug}`}
              className={clsx('w-full h-80', 'lg:aspect-2/3 lg:h-auto')}
            />
          ))}
        </div>
      </Content>
    </section>
  )
}
