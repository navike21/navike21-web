import { Content } from '@Components/atoms'
import { clients } from '@Constants/clients'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import { Crown } from 'lucide-react'

export const Clients = () => {
  return (
    <section className={clsx('bg-slate-900')}>
      <Content
        className={clsx(
          'sectionContent flex-col flex gap-16',
          'md:flex-row md:items-center md:gap-0 md:justify-between'
        )}
      >
        <div className={clsx('flex flex-col gap-5 items-center', 'md:w-4/12')}>
          <hgroup className="flex flex-col gap-3 items-center">
            <h4 className={clsx('title-xs text-center w-full', 'sm:text-left')}>
              ¿Te sumas?
            </h4>
            <h2
              className={clsx(
                'title-xl text-center',
                'text-white',
                'sm:text-left'
              )}
            >
              Ellos{' '}
              <span className="text-gradient-primary">confían en nosotros</span>
            </h2>
          </hgroup>
          <p className={clsx('text-left paragraph-xs')}>
            Así como ellos, tú también puedes confiar en nosotros para llevar tu
            proyecto al siguiente nivel.
          </p>
        </div>
        <div
          className={clsx(
            'hidden',
            'w-px h-52 bg-gradient-primary-vertical mask-fade-vertical',
            'md:block'
          )}
        />
        <div
          className={clsx(
            'grid grid-cols-2 gap-3',
            'sm:grid-cols-4 sm:gap-6',
            'md:w-7/12 md:gap-4',
            'lg:grid-cols-4 lg:gap-4 lg:w-6/12'
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
      </Content>
    </section>
  )
}
