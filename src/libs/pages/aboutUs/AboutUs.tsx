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
import { uuidV7 } from '@Utils/generateKeys'

export const AboutUs = () => {
  const {
    pillars,
    logoClients,
    metrics,
    heroImage,
    historyImage,
    heroSectionText,
    history
  } = useAboutUs()
  return (
    <>
      <HeroSectionSubPage
        title={heroSectionText.title}
        description={heroSectionText.description}
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
            <Title title={pillars.title} align="center" />
            <IconTextGrid items={pillars.items} />
          </section>

          <StatsHighlights metrics={metrics} />

          <section className={clsx('flex flex-col gap-12 items-start w-full')}>
            <Title subtitle={history.subTitle} title={history.title} />

            <SplitSectionWithImage
              image={historyImage}
              isGrayScale
              layoutRatio="40-60"
            >
              <>
                {history.description.map(paragraph => (
                  <p key={uuidV7()}>{paragraph}</p>
                ))}
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
