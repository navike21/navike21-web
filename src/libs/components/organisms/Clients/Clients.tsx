import clsx from 'clsx'
import { useClients } from './Clients.hooks'

export const Clients = () => {
  const { clientsList, subtitleClients, titleClients } = useClients()
  return (
    <div
      className={clsx(
        'clients-area flex flex-col items-center gap-10',
        'lg:flex-row md:gap-20 md:justify-center'
      )}
    >
      <section>
        <h2
          className={clsx(
            'text-center text-3xl font-semibold w-full',
            'lg:text-4xl lg:text-left'
          )}
        >
          {titleClients}
        </h2>
        <h2
          className={clsx(
            'text-center text-xl font-medium w-full',
            'md:text-left',
            'lg:text-2xl'
          )}
        >
          {subtitleClients}
        </h2>
      </section>
      <section
        className={clsx(
          'grid grid-cols-2 gap-6 w-full',
          'sm:grid-cols-3',
          'md:grid-cols-4',
          'lg:gap-4',
          'xl:grid-cols-5'
        )}
      >
        {clientsList.map(({ logo: Logo, id }) => (
          <div
            key={id}
            className={clsx(
              'w-full aspect-3/2 m-auto shadow-md h-full rounded-md flex items-center justify-center',
              {
                'row-span-2': id === 'beats',
                'xl:row-span-2 xl:col-span-2': id === 'beats'
              }
            )}
          >
            <div
              rel="noopener noreferrer"
              className={clsx('flex items-center justify-center p-6', {
                'w-full h-full': id !== 'beats',
                'h-10/12 w-10/12': id === 'beats'
              })}
            >
              <Logo className="w-auto h-full" />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
