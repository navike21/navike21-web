import { CLIENTS } from '@Constants/clients'
import clsx from 'clsx'

interface IClientsProps {}

export const Clients = ({}: IClientsProps) => {
  return (
    <div className={clsx('clients-area flex flex-col items-center gap-10')}>
      <section>¿Te sumas? Así como ellos que confían en nosotros</section>
      <section
        className={clsx(
          'grid grid-cols-2 gap-6 w-full',
          'sm:grid-cols-3',
          'md:grid-cols-4',
          'lg:grid-cols-6'
        )}
      >
        {CLIENTS.map(({ logo: Logo, id, url }) => {
          return (
            <div
              key={id}
              className="max-w-32 w-full aspect-square col-span-1 p-3"
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
