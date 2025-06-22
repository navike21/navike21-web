import { Logo, Content } from '@Components/atoms'
import { SOCIAL_MEDIA } from '@Constants/socialMedia'
import { clsx } from 'clsx'

export const Footer = () => (
  <>
    <div className={clsx('bg-gray-950 py-12 relative z-30 text-slate-400')}>
      <Content
        className={clsx(
          'gap-10 grid grid-cols-1 items-start',
          'sm:grid-cols-2',
          'md:grid-cols-3',
          'lg:grid-cols-5 lg:gap-5'
        )}
      >
        <section
          className={clsx(
            'flex flex-col gap-4 items-center justify-center w-full',
            'sm:col-span-2',
            'md:col-span-3',
            'lg:col-span-2'
          )}
        >
          <div
            className={clsx(
              'title-xs text-white flex gap-3 items-center justify-start w-full',
              'md:title-sm'
            )}
          >
            <Logo className="w-10" /> navike21
          </div>
          <div className="paragraph-xs w-full">
            Somos una empresa dedicada a la creación de software con un enfoque
            en la calidad.
          </div>
        </section>

        <section className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="title-xs w-full text-white">Servicios</div>
          <ul className="gap-2 grid grid-cols-1 w-full">
            <li className="paragraph-xs">Desarrollo Web</li>
            <li className="paragraph-xs">Desarrollo de Apps Móviles</li>
            <li className="paragraph-xs">Ecommerce</li>
            <li className="paragraph-xs">Software a Medida</li>
            <li className="paragraph-xs">Landing Pages</li>
            <li className="paragraph-xs">UX/UI</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="title-xs w-full text-white">Área legal</div>
          <ul className="gap-2 grid grid-cols-1 w-full">
            <li className="paragraph-xs">Libro de reclamaciones</li>
            <li className="paragraph-xs">Términos y condiciones</li>
            <li className="paragraph-xs">Política de privacidad</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="title-xs w-full text-white">Contacto</div>
          <ul className="gap-2 grid grid-cols-1 w-full">
            <li className="paragraph-xs">
              <a
                href="mailto:contacto@navike21.com"
                className="hover:text-white transition-all ease-in-out"
              >
                contacto@navike21.com
              </a>
            </li>
            <li className="paragraph-xs">
              <a
                href="tel:+51989505027"
                className="hover:text-white transition-all ease-in-out"
              >
                +51 989 505 027
              </a>
            </li>
            <li className="paragraph-xs">
              <a
                href="https://www.navike21.com"
                className="hover:text-white transition-all ease-in-out"
              >
                www.navike21.com
              </a>
            </li>
          </ul>
        </section>
      </Content>
    </div>

    <div
      className={clsx('border-t border-gray-700 bg-gray-950 py-10', 'sm:py-6')}
    >
      <Content
        className={clsx(
          'flex flex-col gap-6 items-center justify-between',
          'sm:flex-row',
          'sm:grid-cols-2'
        )}
      >
        <aside className="flex gap-4 items-center justify-center">
          {Object.values(SOCIAL_MEDIA)
            .filter(({ active }) => active)
            .map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-all duration-300"
              >
                {icon({
                  className: 'w-5 h-5'
                })}
              </a>
            ))}
        </aside>
        <div className="paragraph-xs text-center text-white">
          © 2025 navike21 | Todos los derechos reservados.
        </div>
      </Content>
    </div>
  </>
)
