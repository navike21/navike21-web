import { Content } from '@Components/atoms'
import { MasonryGrid } from '@Components/molecules'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import React from 'react'

export const Services = () => {
  const items = Array.from({ length: 20 }, (_, i) => (
    <span key={uuidV7()}>🍱 {i + 1}</span>
  ))

  return (
    <section className={clsx('bg-gray-100', 'dark:bg-gradient-primary')}>
      <Content className="sectionContent flex-col flex gap-16">
        <div className="flex flex-col gap-2 items-center">
          <h4 className={clsx('title-xs text-center text-white')}>
            Nuestros Servicios
          </h4>
          <h2 className="title-lg text-center text-white">
            De ideas a resultados confiables
          </h2>
        </div>
        <MasonryGrid
          items={items}
          columns={{ mobile: 2, tablet: 3, desktop: 5 }}
        />
      </Content>
    </section>
  )
}
