import { Content } from '@Components/atoms'
import { clients } from '@Constants/clients'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import React from 'react'

export const Clients = () => {
  return (
    <div className={clsx('dark:bg-gray-900')}>
      <Content
        className={clsx('flex flex-col gap-12', 'py-16 md:px-10 lg:px-20')}
      >
        <div className="flex flex-col gap-2 items-center">
          <h2 className="title-md text-center text-primary-500">
            Ellos confían en nosotros
          </h2>
          <p className="text-center paragraph-xs">
            Así como ellos, tú también puedes confiar en nosotros para llevar tu
            proyecto al siguiente nivel.
          </p>
        </div>
        <div
          className={clsx(
            'grid grid-cols-3 gap-3',
            'sm:grid-cols-4 sm:gap-6',
            'lg:grid-cols-6'
          )}
        >
          {clients.map(({ logo, id }) => (
            <div
              key={uuidV7()}
              className={clsx(
                'flex items-center justify-center p-5 bg-white rounded-lg shadow-md aspect-square',
                'dark:bg-gray-800'
              )}
            >
              {logo({
                className: clsx('w-full aspect-square', {
                  'text-[#003399] dark:text-white': id === 'eurogourmet',
                  'text-[#FF5A00] dark:text-white': id === 'hammer-blocs',
                  'text-[#5B3C39] dark:text-white': id === 'tentaciones-gourmet'
                })
              })}
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}
