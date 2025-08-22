'use client'

import { Content } from '@Components/atoms'
import { SplitSectionWithImage } from '@Components/molecules'
import { useRecentWorks } from './RecentWorks.hooks'
import Image from 'next/image'

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
            <Image
              src={imagesDeviceProject}
              alt={title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-2xl object-cover relative z-10"
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
