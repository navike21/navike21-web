import { Content } from '@Components/atoms'
import { clients } from '@Constants/clients'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import { Crown } from 'lucide-react'

export const Clients = () => {
  return (
    <section className={clsx('dark:bg-slate-900')}>
      <Content className="sectionContent flex-col flex gap-16">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="title-lg text-center text-gradient-primary">
            Ellos confían en nosotros
          </h2>
          <p className={clsx('text-left paragraph-xs', 'md:text-center')}>
            Así como ellos, tú también puedes confiar en nosotros para llevar tu
            proyecto al siguiente nivel.
          </p>
        </div>
        <div
          className={clsx(
            'grid grid-cols-3 gap-3',
            'sm:grid-cols-5 sm:gap-6',
            'lg:grid-cols-7'
          )}
        >
          {clients.map(({ logo, id, best }) => (
            <div
              key={uuidV7()}
              className={clsx(
                'flex items-center justify-center p-5 bg-white rounded-sm shadow-sm aspect-square relative',
                'dark:bg-gray-800'
              )}
            >
              {best && (
                <Crown className="absolute top-1 right-1 w-4 h-auto text-amber-400 fill-amber-400" />
              )}
              {logo({
                className: clsx('w-full aspect-square dark:text-white', {
                  'text-[#003399]': id === 'eurogourmet',
                  'text-[#FF5A00]': id === 'hammer-blocs',
                  'text-[#5B3C39]': id === 'tentaciones-gourmet'
                })
              })}
            </div>
          ))}
        </div>
      </Content>
    </section>
  )
}
