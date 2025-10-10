import heroImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { Container, ItemLinkCard, LinkButton } from '@Components/atoms'
import { ItemHeroSection } from '@Components/molecules'
import clsx from 'clsx'

export const Home = () => {
  return (
    <>
      <ItemHeroSection
        heroImage={heroImage}
        title="Transformamos tus ideas en realidad digital"
        description="Somos expertos en desarrollo de software, diseño UX/UI y marketing digital. Creamos soluciones innovadoras que impulsan tu negocio al siguiente nivel."
        controlActions={[
          {
            href: '/',
            icon: 'RiArrowRightLine',
            children: 'Comenzar proyecto'
          },
          {
            href: '/',
            icon: 'RiBriefcase3Fill',
            variant: 'secondary',
            children: 'Ver portafolio'
          }
        ]}
      />
      <section className="bg-gray-100">
        <Container className="py-20 flex flex-col gap-20">
          <div className={clsx('title-area flex flex-col gap-4')}>
            <h2 className={clsx('text-center text-4xl font-semibold')}>
              Nuestros Servicios
            </h2>
            <p className={clsx('text-center')}>
              Ofrecemos soluciones completas para todas tus necesidades
              digitales
            </p>
          </div>
          <div
            className={clsx(
              'services-area grid grid-cols-1 gap-6',
              'sm:grid-cols-2 sm:gap-10',
              'lg:grid-cols-3 lg:gap-4',
              'xl:grid-cols-4 xl:gap-5'
            )}
          >
            <ItemLinkCard
              href="/"
              title="Desarrollo de software"
              description="Soluciones personalizadas que impulsan tu negocio"
              icon="RiCodeFill"
            />
            <ItemLinkCard
              href="/"
              title="E-commerce"
              description="Tiendas online optimizadas para conversión"
              icon="RiShoppingCartLine"
            />
            <ItemLinkCard
              href="/"
              title="Apps Móviles"
              description="Aplicaciones nativas y multiplataforma"
              icon="RiSmartphoneLine"
            />
            <ItemLinkCard
              href="/"
              title="Marketing Digital"
              description="Estrategias que generan resultados"
              icon="RiMegaphoneLine"
            />
            <ItemLinkCard
              href="/"
              title="Diseño UX/UI"
              description="Diseños intuitivos y atractivos"
              icon="RiPaletteLine"
            />
            <ItemLinkCard
              href="/"
              title="SEO"
              description="Posicionamiento web efectivo"
              icon="RiSearchLine"
            />
            <ItemLinkCard
              href="/"
              title="Email Marketing"
              description="Campañas que conectan con tu audiencia"
              icon="RiMailLine"
            />
            <ItemLinkCard
              href="/"
              title="Consultoría"
              description="Asesoría estratégica para tu transformación digital"
              icon="RiBriefcase3Line"
            />
          </div>
          <LinkButton href="/" className="mx-auto" icon="RiArrowRightLine">
            Ver todos los servicios
          </LinkButton>
        </Container>
      </section>
    </>
  )
}
