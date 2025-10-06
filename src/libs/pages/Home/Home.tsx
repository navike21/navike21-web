import { Container, LinkButton, ParallaxImage } from '@Components/atoms'
import clsx from 'clsx'
import heroImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'

export const Home = () => {
  return (
    <>
      <div className={clsx('bg-slate-950 relative', 'md:bg-gray-100')}>
        <Container
          className={clsx(
            'flex items-center justify-between flex-wrap content-center z-10 relative',
            'h-dvh max-h-[900px]',
            'md:gap-8 md:flex-nowrap',
            'lg:gap-20'
          )}
        >
          <section
            className={clsx('w-full flex flex-col gap-4', 'md:w-6/12 md:gap-6')}
          >
            <h2
              className={clsx(
                'text-2xl font-semibold leading-tight text-white',
                'md:text-3xl md:text-black md:w-11/12',
                'lg:text-4xl',
                'xl:text-5xl'
              )}
            >
              Transformamos tus ideas en realidad digital
            </h2>
            <p
              className={clsx('w-full text-white', 'md:w-11/12 md:text-black')}
            >
              Somos expertos en desarrollo de software, diseño UX/UI y marketing
              digital. Creamos soluciones innovadoras que impulsan tu negocio al
              siguiente nivel.
            </p>
            <div
              className={clsx('flex flex-col gap-4', 'sm:flex-row sm:gap-5')}
            >
              <LinkButton href="/" icon="ArrowRight">
                Comenzar proyecto
              </LinkButton>
              <LinkButton href="/" icon="BriefcaseBusiness" variant="secondary">
                Ver portafolio
              </LinkButton>
            </div>
          </section>
        </Container>
        <ParallaxImage
          img={heroImage}
          className={clsx(
            'absolute top-0 right-0 h-full z-0 w-12/12 opacity-50 clip-diagonal',
            'md:w-6/12 md:opacity-100'
          )}
          alt="Abstract shiny blue presentation background"
        />
      </div>
      <div className="h-dvh">Holi</div>
    </>
  )
}
