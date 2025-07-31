'use client'

import { Content } from '@Components/atoms'
import { SplitSectionWithImage } from '@Components/molecules'
import { clients } from '@Constants/clients'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import { Crown } from 'lucide-react'
import { useClients } from './Clients.hooks'

export const Clients = () => {
  const { title, description, subtitle } = useClients()

  return (
    <div className={clsx('bg-slate-950')}>
      <Content className="sectionContent">
        <SplitSectionWithImage
          image={
            <div
              className={clsx(
                'grid grid-cols-2 gap-3 z-20 relative',
                'sm:grid-cols-4 sm:gap-6',
                'md:gap-4',
                'lg:grid-cols-4 lg:gap-4'
              )}
            >
              {clients.map(({ logo, id, best }) => (
                <div
                  key={uuidV7()}
                  className={clsx(
                    'flex items-center justify-center p-5 bg-gray-800 rounded-sm shadow-sm aspect-square relative'
                  )}
                >
                  {best && (
                    <Crown className="absolute top-1 right-1 w-4 h-auto text-amber-400 fill-amber-400" />
                  )}
                  {logo({
                    className: clsx('w-full aspect-square text-white', {
                      'text-[#003399]': id === 'eurogourmet',
                      'text-[#FF5A00]': id === 'hammer-blocs',
                      'text-[#5B3C39]': id === 'tentaciones-gourmet'
                    })
                  })}
                </div>
              ))}
            </div>
          }
          title={title}
          subtitle={subtitle}
          description={description}
          showDivider
          reverseOrder
        />
      </Content>
    </div>
  )
}
