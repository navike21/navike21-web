import heroImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { Container, IconComponent } from '@Components/atoms'
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
            icon: 'ArrowRight',
            children: 'Comenzar proyecto'
          },
          {
            href: '/',
            icon: 'BriefcaseBusiness',
            variant: 'secondary',
            children: 'Ver portafolio'
          }
        ]}
      />
      <section className="bg-gray-200">
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
              'services-area grid grid-cols-1 gap-10',
              'md:grid-cols-2 md:gap-16',
              'lg:grid-cols-4 lg:gap-8'
            )}
          >
            <div
              className={clsx(
                'bg-white',
                'service-item flex flex-col items-center gap-6',
                'shadow-md px-6 pt-7 rounded-lg'
              )}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full p-3">
                <IconComponent icon="Code" />
              </div>
              <h3 className="text-lg font-medium text-center">
                Desarrollo de software
              </h3>
              <p className="text-center text-sm pb-4">
                Soluciones personalizadas que impulsan tu negocio
              </p>
              <div className="w-28 h-0.5 bg-blue-500" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
