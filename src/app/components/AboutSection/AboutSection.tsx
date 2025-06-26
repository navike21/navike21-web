import { Content, Counter, LinkButton } from '@Components/atoms'
import { teamPaperwork } from '@Constants/backgroundsImages'
import clsx from 'clsx'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <>
      <section className={clsx('bg-gray-100', 'dark:bg-slate-900')}>
        <Content
          className={clsx(
            'sectionContent grid items-center gap-10',
            'sm:grid-cols-3',
            'md:grid-cols-6'
          )}
        >
          <div
            className={clsx(
              'aspect-3/2 rounded-lg shadow-lg col-span-2 relative',
              'sm:col-span-1 sm:aspect-2/4',
              'md:aspect-1/2 md:col-span-2 md:max-h-96',
              'lg:col-span-3 lg:max-h-none lg:aspect-4/3'
            )}
          >
            <Image
              src={teamPaperwork.src}
              width={teamPaperwork.width}
              height={teamPaperwork.height}
              alt="About Section Background"
              className={clsx(
                'w-full h-full object-cover object-center rounded-lg relative z-10'
              )}
              quality={100}
            />
          </div>
          <div
            className={clsx(
              'col-span-2 flex flex-col gap-3',
              'md:col-span-4',
              'lg:col-span-3'
            )}
          >
            <div
              className={clsx(
                'flex flex-col gap-2 items-center',
                'sm:items-start'
              )}
            >
              <h4 className={clsx('title-xs text-center')}>
                Bienvenidos a navike21
              </h4>
              <h2
                className={clsx(
                  'title-lg text-center',
                  'dark:text-white',
                  'sm:text-left'
                )}
              >
                Mas que software,{' '}
                <span className="text-gradient-primary">
                  creamos soluciones
                </span>
              </h2>
            </div>
            <p className="paragraph-xs">
              Somos un equipo apasionado por la tecnología y el diseño,
              dedicados a crear soluciones innovadoras que mejoran la
              interacción en el mundo digital.
            </p>
            <LinkButton
              href="/nosotros"
              className={clsx('mt-4 w-full', 'sm:w-fit')}
            >
              Conoce más
            </LinkButton>
          </div>
        </Content>
      </section>
      <section className={clsx('bg-gray-100', 'dark:bg-black')}>
        <Content
          className={clsx(
            'sectionContent grid items-center gap-7',
            'sm:grid-cols-4 sm:gap-5',
            'md:grid-cols-4'
          )}
        >
          <div className="counter w-full flex items-center text-center flex-col gap-3">
            <div className="flex justify-center items-start">
              <Counter value={62} className="title-2xl text-white" />
              <span className="text-gradient-primary title-xl">+</span>
            </div>
            <p className="lg:px-6 xl:px-2">Proyectos completados</p>
          </div>
          <div className="counter w-full flex items-center text-center flex-col gap-3">
            <div className="flex justify-center items-start">
              <Counter value={10} className="title-2xl text-white" />
              <span className="text-gradient-primary title-xl">+</span>
            </div>
            <p className="lg:px-6 xl:px-2">Clientes satisfechos</p>
          </div>
          <div className="counter w-full flex items-center text-center flex-col gap-3">
            <div className="flex justify-center items-start">
              <Counter value={5} className="title-2xl text-white" />
              <span className="text-gradient-primary title-xl">+</span>
            </div>
            <p className="lg:px-6 xl:px-2">Años de experiencia</p>
          </div>
          <div className="counter w-full flex items-center text-center flex-col gap-3">
            <div className="flex justify-center items-start">
              <Counter value={100} className="title-2xl text-white" />
              <span className="text-gradient-primary title-xl">%</span>
            </div>
            <p className="lg:px-6 xl:px-2">Compromiso con la calidad</p>
          </div>
        </Content>
      </section>
    </>
  )
}
