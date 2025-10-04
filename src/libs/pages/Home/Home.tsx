import { Container, ParallaxImage } from '@components/atoms'
import clsx from 'clsx'
import heroImage from '@assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'

export const Home = () => {
  return (
    <>
      <div className={clsx('bg-gray-100 relative')}>
        <Container
          className={clsx(
            'flex items-center justify-between flex-wrap content-center z-10 relative',
            'h-dvh max-h-[900px]',
            'md:gap-8 md:flex-nowrap',
            'lg:gap-20'
          )}
        >
          <section className={clsx('w-full flex flex-col gap-4', 'md:w-6/12')}>
            <h2
              className={clsx(
                'text-3xl font-semibold leading-tight',
                'md:text-4xl',
                'lg:text-5xl'
              )}
            >
              Transformamos tus ideas en realidad digital
            </h2>
            <p className="w-11/12">
              Somos expertos en desarrollo de software, diseño UX/UI y marketing
              digital. Creamos soluciones innovadoras que impulsan tu negocio al
              siguiente nivel.
            </p>
          </section>
        </Container>
        <ParallaxImage
          img={heroImage}
          className="absolute top-0 right-0 w-6/12 h-full z-0 clip-diagonal"
          alt="Abstract shiny blue presentation background"
        />
      </div>
      <div className="h-dvh">Holi</div>
    </>
  )
}
