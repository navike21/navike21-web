'use client'

import { Content } from '@Components/atoms'
import { SplitSectionWithImage, StatsHighlights } from '@Components/molecules'
import clsx from 'clsx'
import { useAboutSection } from './AboutSection.hooks'

export const AboutSection = () => {
  const {
    title,
    subtitle,
    description,
    controlActionText,
    controlActionLink,
    metrics,
    imageAbout
  } = useAboutSection()

  return (
    <div className={clsx('bg-slate-950')}>
      <Content className={clsx('sectionContent flex flex-col gap-20')}>
        <div className="py-10">
          <SplitSectionWithImage
            image={imageAbout.src}
            title={title}
            subtitle={subtitle}
            description={description}
            showDivider
            controlAction={{
              text: `${controlActionText}`,
              href: controlActionLink
            }}
          />
        </div>

        <StatsHighlights metrics={metrics} />
      </Content>
    </div>
  )
}
