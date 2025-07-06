import { Content, LinkButton } from '@Components/atoms'
import { Title } from '@Components/molecules'
import clsx from 'clsx'

import iphone from '@Assets/images/devices/iphone.svg'
import Image from 'next/image'
import { clients } from '@Constants/clients'

export const RecentWorks = () => {
  const { images: { mobile } = {} } = clients[0]
  return (
    <div className="bg-slate-950">
      <Content
        className={clsx(
          'sectionContent flex-col flex gap-16',
          'md:flex-row md:items-center md:gap-0 md:justify-between'
        )}
      >
        <section
          className={clsx('flex flex-col gap-5 items-start', 'md:w-5/12')}
        >
          <Title
            subtitle="Trabajos recientes"
            title="Lo último en **nuestros proyectos**"
          />
          <p className="paragraph-xs">
            Aquí puedes ver algunos de nuestros trabajos más recientes, donde
            hemos aplicado nuestras habilidades y conocimientos para crear
            soluciones efectivas y atractivas.
          </p>
          <LinkButton
            href="/nosotros"
            className={clsx('mt-4 w-full', 'sm:w-fit')}
          >
            Ver más proyectos
          </LinkButton>
        </section>
        <div
          className={clsx(
            'hidden',
            'w-px h-52 bg-gradient-primary-vertical mask-fade-vertical',
            'md:block'
          )}
        />
        <section
          className={clsx(
            'relative flex justify-center items-center',
            'before:inset-0 before:bg-[radial-gradient(circle,rgba(56,189,248,1)_0%,rgba(56,189,248,0)_80%)] before:rounded-3xl before:blur-3xl before:z-0',
            'before:absolute before:top-0 before:left-0 before:right-2/12 before:bottom-2/12',
            'after:inset-0 after:bg-[radial-gradient(circle,rgba(130,0,219,1)_0%,rgba(130,0,219,0)_80%)] after:rounded-3xl after:blur-3xl after:z-0',
            'after:absolute after:top-2/12 after:left-2/12 after:right-0 after:bottom-0'
          )}
        >
          <div className="w-8/12 relative z-10">
            <Image
              src={iphone}
              alt="iPhone 12"
              className="w-full relative z-10"
            />
            <div className="absolute top-[1%] bottom-2 left-0 right-0 m-auto w-11/12 h-auto bg-white pt-[13%] rounded-3xl overflow-hidden">
              <Image
                src={mobile?.[0].src ?? ''}
                width={mobile?.[0].width}
                height={mobile?.[0].height}
                alt="iPhone 12"
                className="w-full h-full object-cover z-0 object-left-top"
                quality={100}
              />
            </div>
          </div>
        </section>
      </Content>
    </div>
  )
}
