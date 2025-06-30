'use client'

import { Button, Content } from '@Components/atoms'
import { MasonryGrid } from '@Components/molecules'
import { homePageScreen } from '@Constants/backgroundsImages'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export const Services = () => {
  return (
    <section className={clsx('bg-gray-100', 'dark:bg-slate-900')}>
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
          // filters={['frontend', 'backend', 'uiux', 'fullstack']}
          items={[
            {
              id: '1',
              category: 'frontend',
              content: (
                <div className={clsx('relative z-10', 'h-60 w-full ')}>
                  <Image
                    src={homePageScreen.src}
                    width={homePageScreen.width}
                    height={homePageScreen.height}
                    alt="Frontend Development"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div
                    className={clsx(
                      'bg-slate-900/50 rounded-xl',
                      'flex flex-col items-stretch justify-between gap-4',
                      'absolute inset-0 z-20 top-0 bottom-0 left-0 right-0'
                    )}
                  >
                    <h2
                      className={clsx(
                        'text-white title-sm px-5 pt-4',
                        'xs:title-md xs:w-3/4',
                        'md:w-9/12'
                      )}
                    >
                      Diseño y desarrollo de páginas web
                    </h2>
                    <div
                      className={clsx(
                        'rounded-b-xl backdrop-blur-xs bg-slate-900/60',
                        'px-5 py-4 flex justify-between items-center gap-4'
                      )}
                    >
                      <p className="text-white paragraph-xxs line-clamp-2">
                        Sitios web modernos, rápidos y totalmente
                        personalizados.
                      </p>
                      <Button size="small">Explorar</Button>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: '2',
              category: 'Ecommerce',
              content: (
                <div className={clsx('relative z-10', 'h-60 w-full ')}>
                  <Image
                    src={homePageScreen.src}
                    width={homePageScreen.width}
                    height={homePageScreen.height}
                    alt="Backend Development"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div
                    className={clsx(
                      'bg-slate-900/50 rounded-xl',
                      'flex flex-col items-stretch justify-between gap-4',
                      'absolute inset-0 z-20 top-0 bottom-0 left-0 right-0'
                    )}
                  >
                    <h2
                      className={clsx(
                        'text-white title-sm px-5 pt-4',
                        'sm:title-lg xs:w-3/4'
                      )}
                    >
                      Ecommerce
                    </h2>
                    <div
                      className={clsx(
                        'rounded-b-xl backdrop-blur-xs',
                        'px-5 py-4 flex justify-between items-center gap-4'
                      )}
                    >
                      <p className="text-white paragraph-xxs line-clamp-2">
                        Soluciones escalables y seguras para tu negocio.
                      </p>
                      <Button size="small">Explorar</Button>
                    </div>
                  </div>
                </div>
              )
            }
          ]}
          columns={{ mobile: 1, tablet: 3, desktop: 4 }}
        />
      </Content>
    </section>
  )
}
