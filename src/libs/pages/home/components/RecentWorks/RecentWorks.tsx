'use client'

import { Content } from '@Components/atoms'
import {
  SliderMobileDevice,
  SplitSectionWithImage
} from '@Components/molecules'
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
          image={
            <SliderMobileDevice
              className="w-7/12 z-10"
              images={imagesDeviceProject}
            />
          }
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
