import { CLIENTS } from '@Constants/clients'
import clsx from 'clsx'

interface IClientsProps {}

export const Clients = ({}: IClientsProps) => {
  return (
    <div
      className={clsx(
        'clients-area flex flex-col items-center gap-10',
        'md:flex-row md:gap-20 md:justify-center'
      )}
    >
      <section>
        <h2
          className={clsx(
            'text-center text-3xl font-semibold w-full',
            'md:text-left',
            'lg:text-4xl'
          )}
        >
          ¿Te sumas?
        </h2>
        <h2
          className={clsx(
            'text-center text-xl font-medium w-full',
            'md:text-left',
            'lg:text-2xl'
          )}
        >
          Así como ellos que confían en nosotros
        </h2>
      </section>
      <section
        className={clsx(
          'grid grid-cols-2 gap-6 w-full',
          'sm:grid-cols-3',
          'md:grid-cols-5',
          'lg:grid-cols-6'
        )}
      >
        {CLIENTS.map(({ logo: Logo, id, url }) => {
          return (
            <div
              key={id}
              className={clsx(
                'max-w-32 w-full aspect-square col-span-1 m-auto',
                'lg:max-w-28'
              )}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <Logo className="w-auto h-full" />
              </a>
            </div>
          )
        })}
      </section>
    </div>
  )
}
