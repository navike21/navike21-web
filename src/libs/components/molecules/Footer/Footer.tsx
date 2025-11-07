import { Container, Divider, Logo } from '@Components/atoms'
import { legalArea } from '@I18n/common/legalArea'
import { servicesList } from '@I18n/common/services'
import clsx from 'clsx'

export const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-10 text-white">
      <Divider color="gradient" />
      <Container className={clsx('grid grid-cols-2 gap-8')}>
        <section className={clsx('col-span-2 flex flex-col gap-4')}>
          <Logo logoColor="white" showText textColor="white" size="sm" />
          <p className="text-sm">
            Somos una empresa dedicada a la creación de software con un enfoque
            en la calidad.
          </p>
        </section>
        <section className={clsx('col-span-2 flex flex-col gap-4')}>
          <h2 className="text-md uppercase font-bold tracking-wide">
            Servicios
          </h2>
          <ul className={clsx('flex flex-col gap-2')}>
            {servicesList['es'].map(service => (
              <li key={service.id} className="text-sm">
                {service.title}
              </li>
            ))}
          </ul>
        </section>
        <section className={clsx('col-span-2 flex flex-col gap-4')}>
          <h2 className="text-md uppercase font-bold tracking-wide">
            Área Legal
          </h2>
          <ul className={clsx('flex flex-col gap-2')}>
            {legalArea['es']
              .filter(page => page.showInFooter)
              .map(page => (
                <li key={page.slug} className="text-sm">
                  {page.title}
                </li>
              ))}
          </ul>
        </section>
      </Container>
    </footer>
  )
}
