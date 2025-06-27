'use client'

import { Content } from '@Components/atoms'
import { MasonryGrid } from '@Components/molecules'
import clsx from 'clsx'
import React from 'react'

export const Services = () => {
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
          filters={['frontend', 'backend', 'uiux', 'fullstack']}
          items={[
            {
              id: '1',
              category: 'frontend',
              content: <div>Holi</div>
            },
            {
              id: '2',
              category: 'backend',
              content: <div>Holi2</div>
            },
            {
              id: '3',
              category: 'uiux',
              content: <div>Holi3</div>
            },
            {
              id: '4',
              category: 'frontend',
              content: <div>Holi4</div>
            },
            {
              id: '5',
              category: 'backend',
              content: <div>Holi5</div>
            },
            {
              id: '6',
              category: 'uiux',
              content: <div>Holi6</div>
            },
            {
              id: '7',
              category: 'frontend',
              content: <div>Holi7</div>
            },
            {
              id: '8',
              category: 'fullstack',
              content: <div>Holi8</div>
            },
            {
              id: '9',
              category: 'backend',
              content: <div>Holi9</div>
            },
            {
              id: '10',
              category: 'backend',
              content: <div>Holi10</div>
            },
            {
              id: '11',
              category: 'fullstack',
              content: <div>Holi11</div>
            },
            {
              id: '12',
              category: 'fullstack',
              content: <div>Holi12</div>
            },
            {
              id: '13',
              category: 'uiux',
              content: <div>Holi13</div>
            },
            {
              id: '14',
              category: 'frontend',
              content: <div>Holi14</div>
            },
            {
              id: '15',
              category: 'backend',
              content: <div>Holi15</div>
            },
            {
              id: '16',
              category: 'uiux',
              content: <div>Holi16</div>
            }
          ]}
          columns={{ mobile: 2, tablet: 3, desktop: 4 }}
          itemHeight="h-[220px]"
        />
      </Content>
    </section>
  )
}
