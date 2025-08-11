'use client'

import { HeroSectionSubPage } from '@Components/molecules'
import { useProjects } from './useProjects'
import clsx from 'clsx'
import { Content } from '@Components/atoms'
import MotionCardGrid from '@Components/molecules/MotionCardGrid/MotionCardGrid'

export const Projects = () => {
  const { heroImage, projects } = useProjects()
  return (
    <>
      <HeroSectionSubPage
        title={'Más que proyectos, **construimos resultados.**'}
        description={
          'Acompañamos a cada cliente desde la idea hasta la solución final, con visión, método y propósito.'
        }
        backgroundImage={heroImage}
        startPositionImage="center"
      />
      <div className={clsx('bg-slate-950')}>
        <Content
          className={clsx(
            'sectionContent flex-col flex gap-16',
            'md:items-center md:gap-24 md:justify-between'
          )}
        >
          <MotionCardGrid data={projects} />
        </Content>
      </div>
    </>
  )
}
