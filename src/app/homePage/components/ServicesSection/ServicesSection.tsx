'use client'

import { SectionContent } from '@Styles/SectionContent'
import {
  InformationServicesSection,
  ItemServicesSection,
  ServicesSectionContent,
  ServicesSectionMain
} from './ServicesSection.style'
import { Title } from '@Components/atoms/Title'
import { Paragraph } from '@Components/atoms/Paragraph'
import { iconServices } from '@Constants/iconServices'
import { useServicesSection } from './ServicesSection.hook'

export const ServicesSection = () => {
  const { description, mediaQuery, pages, title } = useServicesSection()

  return (
    <ServicesSectionMain>
      <SectionContent>
        <ServicesSectionContent>
          <InformationServicesSection>
            <Title variant={mediaQuery.sm ? 'h2' : 'h4'}>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </InformationServicesSection>
          {Object.values(pages).map(({ descriptionLite, title, key, path }) => (
            <ItemServicesSection key={key} href={path}>
              {iconServices[key]}
              <Title variant="h6">{title}</Title>
              <Paragraph>{descriptionLite}</Paragraph>
            </ItemServicesSection>
          ))}
        </ServicesSectionContent>
      </SectionContent>
    </ServicesSectionMain>
  )
}
