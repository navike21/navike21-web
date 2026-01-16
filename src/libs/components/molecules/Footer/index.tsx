import { Container, Divider, IconComponent, Logo } from '@Components/atoms'
import clsx from 'clsx'
import { useFooter } from './footer.hooks'
import { ItemFooter, LinkFooter } from './ItemFooter'

export const Footer = () => {
  const {
    structure: {
      textFooter,
      servicesTitle,
      legalAreaTitle,
      contactTitle,
      rightsReserved
    },
    itemsInformation: { services, legalArea, contactInfo, socialMedia }
  } = useFooter()
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
          <Logo logoColor="gradient" showText textColor="white" size="sm" />
          <p className="text-sm">{textFooter}</p>
        </ItemFooter>
        <ItemFooter title={servicesTitle}>
          <ul className={clsx('flex flex-col gap-3')}>
            {services.map(({ id, title, slug }) => (
              <li key={id} className="text-sm">
                <LinkFooter href={slug}>{title}</LinkFooter>
              </li>
            ))}
          </ul>
        </ItemFooter>
        <ItemFooter title={legalAreaTitle}>
          <ul className={clsx('flex flex-col gap-3')}>
            {legalArea.map(({ slug, title }) => (
              <li key={slug} className="text-sm">
                <LinkFooter href={slug}>{title}</LinkFooter>
              </li>
            ))}
          </ul>
        </ItemFooter>
        <ItemFooter title={contactTitle}>
          <ul className={clsx('flex flex-col gap-3')}>
            {contactInfo.map(({ key, value, href }) => (
              <li key={key} className="text-sm">
                <LinkFooter href={href}>{value}</LinkFooter>
              </li>
            ))}
          </ul>
        </ItemFooter>
      </Container>
      <Divider color="gradient" />
      <Container
        className={clsx(
          'flex flex-col items-center justify-center gap-4 pb-10',
          'md:flex-row-reverse md:justify-between'
        )}
      >
        <aside className="flex items-center gap-2">
          {socialMedia.map(({ icon, name, url }) => (
            <LinkFooter
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
            </LinkFooter>
          ))}
        </aside>
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} navike21 - {rightsReserved}
        </p>
      </Container>
    </footer>
  )
}
