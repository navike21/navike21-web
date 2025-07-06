import { Content } from '@Components/atoms'
import { Title } from '@Components/molecules'
import clsx from 'clsx'
import React from 'react'

export const RecentWorks = () => {
  return (
    <div className="bg-slate-950">
      <Content
        className={clsx(
          'sectionContent flex-col flex gap-16',
          'md:flex-row md:items-center md:gap-0 md:justify-between'
        )}
      >
        <section
          className={clsx('flex flex-col gap-5 items-center', 'md:w-5/12')}
        >
          <Title
            subtitle="Trabajos recientes"
            title="Lo último en **nuestros proyectos**"
          />
          <p className="paragraph-xs">
            Aquí puedes ver algunos de nuestros trabajos más recientes, donde
            hemos aplicado nuestras habilidades y conocimientos para crear
            soluciones efectivas y atractivas.
          </p>
        </section>
        <div
          className={clsx(
            'hidden',
            'w-px h-52 bg-gradient-primary-vertical mask-fade-vertical',
            'md:block'
          )}
        />
        <section
          className={clsx(
            'grid grid-cols-2 gap-3',
            'sm:grid-cols-4 sm:gap-6',
            'md:w-6/12 md:gap-4',
            'lg:grid-cols-4 lg:gap-4 lg:w-6/12'
          )}
        >
          s
        </section>
      </Content>
    </div>
  )
}
