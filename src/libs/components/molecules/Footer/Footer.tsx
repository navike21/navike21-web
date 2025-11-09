import { Container, Divider, IconComponent, Logo } from '@Components/atoms'
import clsx from 'clsx'
import Link from 'next/link'
import { useFooter } from './footer.hook'
import { ItemFooter } from './ItemFooter'

export const Footer = () => {
  const { services, legalArea, contactInfo, socialMedia } = useFooter()
  return (
    <footer className="bg-black flex flex-col gap-10 text-white">
      <Divider color="gradient" />
      <Container
        className={clsx(
          'grid grid-cols-2 gap-8',
          'md:grid-cols-3',
          'lg:grid-cols-5'
        )}
      >
        <ItemFooter className={clsx('md:col-span-3', 'lg:col-span-2')}>
          <Logo logoColor="white" showText textColor="white" size="sm" />
          <p className="text-sm">
            Somos una empresa dedicada a la creación de software con un enfoque
            en la calidad.
          </p>
        </ItemFooter>
        <ItemFooter title="Servicios">
          <ul className={clsx('flex flex-col gap-2')}>
            {services.map(service => (
              <li key={service.id} className="text-sm">
                {service.title}
              </li>
            ))}
          </ul>
        </ItemFooter>
        <ItemFooter title="Área Legal">
          <ul className={clsx('flex flex-col gap-2')}>
            {legalArea.map(page => (
              <li key={page.slug} className="text-sm">
                {page.title}
              </li>
            ))}
          </ul>
        </ItemFooter>
        <ItemFooter title="Conversemos">
          <ul className={clsx('flex flex-col gap-2')}>
            {contactInfo.map(([key, value]) => (
              <li key={key} className="text-sm">
                {value}
              </li>
            ))}
          </ul>
        </ItemFooter>
      </Container>
      <Divider color="light" />
      <Container
        className={clsx(
          'flex flex-col items-center justify-center gap-4 pb-10',
          'md:flex-row-reverse md:justify-between'
        )}
      >
        <aside className="flex items-center gap-2">
          {socialMedia.map(({ icon, name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent
                icon={icon}
                className={clsx(
                  'w-auto h-5 transition-all ease-in-out duration-500 text-white'
                )}
              />
            </Link>
          ))}
        </aside>
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} navike21. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  )
}
