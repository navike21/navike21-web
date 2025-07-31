'use client'

import { Content } from '@Components/atoms'
import {
  AnimatedLogoCloud,
  HeroSectionSubPage,
  IconTextGrid,
  SplitSectionWithImage,
  StatsHighlights,
  Title
} from '@Components/molecules'
import clsx from 'clsx'
import { useAboutUs } from './useAboutUs'

export const AboutUs = () => {
  const { pillars, logoClients, metrics, heroImage, historyImage } =
    useAboutUs()
  return (
    <>
      <HeroSectionSubPage
        title="Personas que crean **tecnología con propósito**"
        description="Somos un equipo que transforma ideas en experiencias digitales significativas. Creemos en el poder de la colaboración, el aprendizaje continuo y la responsabilidad."
        backgroundImage={heroImage}
        startPositionImage="top"
      />
      <div className={clsx('bg-slate-950')}>
        <Content
          className={clsx(
            'sectionContent flex-col flex gap-16',
            'md:items-center md:gap-24 md:justify-between'
          )}
        >
          <section className={clsx('flex flex-col gap-12 items-center w-full')}>
            <Title
              title={'Nuestros **6 pilares** principales'}
              align="center"
            />
            <IconTextGrid items={pillars} />
          </section>

          <StatsHighlights metrics={metrics} />

          <section className={clsx('flex flex-col gap-12 items-start w-full')}>
            <Title
              subtitle={'Nuestra historia:'}
              title={'Construyendo con intención desde **el día uno.**'}
            />

            <SplitSectionWithImage
              image={historyImage}
              isGrayScale
              layoutRatio="40-60"
            >
              <>
                <p>
                  navike21 no nació de una estrategia ni de un plan corporativo.
                  Nació de la necesidad de crear con propósito, de resolver
                  problemas reales a través de la tecnología, desde los primeros
                  proyectos como desarrollador independiente hasta el trabajo
                  con empresas de mayor escala.
                </p>
                <p>
                  Lo que empezó como un nombre personal fue creciendo, junto con
                  la experiencia, los aprendizajes y las ganas de construir algo
                  más grande. No ha sido un camino fácil, pero sí constante:
                  entre desafíos, decisiones en solitario y pequeñas victorias,
                  navike21 fue tomando forma como un espacio que valora a las
                  personas, la responsabilidad y el aprendizaje continuo.
                </p>
                <p>
                  Hoy seguimos en ese camino. Porque no creemos en lo terminado,
                  sino en lo que evoluciona. Esta historia está viva. Y la
                  construimos con cada cliente, cada colaborador y cada línea de
                  código que creamos con intención.
                </p>
              </>
            </SplitSectionWithImage>
          </section>
        </Content>
      </div>
      <div>
        <Content className="sectionContent flex flex-col gap-16">
          <AnimatedLogoCloud logos={logoClients} />
        </Content>
      </div>
    </>
  )
}
