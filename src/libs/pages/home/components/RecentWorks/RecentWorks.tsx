'use client'

import { Content } from '@Components/atoms'
import { SplitSectionWithImage } from '@Components/molecules'
import { useRecentWorks } from './RecentWorks.hooks'

export const RecentWorks = () => {
  const {
    title,
    description,
    controlActionLink,
    controlActionText,
    subtitle,
    imagesDeviceProject
  } = useRecentWorks()

  return (
    <div className="bg-slate-950">
      <Content className="sectionContent">
        <SplitSectionWithImage
          image={imagesDeviceProject.src}
          blurDataURL={imagesDeviceProject.blurDataURL}
          title={title}
          subtitle={subtitle}
          description={description}
          controlAction={{
            text: `${controlActionText}`,
            href: controlActionLink
          }}
          showDivider
        />
      </Content>
    </div>
  )
}
