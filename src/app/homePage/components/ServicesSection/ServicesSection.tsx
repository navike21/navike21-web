'use client'

import { SectionContent } from '@Styles/SectionContent'
import {
  InformationServicesSection,
  ItemServicesSection,
  ServicesSectionContent,
  ServicesSectionMain
} from './ServicesSection.style'
import { useOptionsBrowserStore } from '@Store/optionBrowser'
import { servicesTranslations } from '@Translations/services'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { Title } from '@Components/atoms/Title'
import { Paragraph } from '@Components/atoms/Paragraph'
import { useMuiTheme } from '@Hooks/useMuiTheme'
import { EService } from '@Enums/services'
import { ReactNode } from 'react'
import { MdOutlineCode } from 'react-icons/md'
import { BsMegaphone } from 'react-icons/bs'
import {
  PiDeviceMobileCameraLight,
  PiDevices,
  PiPaintBrush,
  PiShoppingCart
} from 'react-icons/pi'
import { IoMailOutline } from 'react-icons/io5'
import { TbSearch } from 'react-icons/tb'

export const ServicesSection = () => {
  const { language } = useOptionsBrowserStore()
  const servicesTranslationsInfo = servicesTranslations[language]
  const { servicesMenu } = usePrincipalMenu()

  const {
    homePage: { description, title },
    pages
  } = servicesTranslationsInfo(servicesMenu, 'image')

  const { mediaQuery } = useMuiTheme()

  type TIconServices = {
    [key in EService]: ReactNode
  }

  const iconServices: TIconServices = {
    [EService.WEB_DEVELOPMENT]: <PiDevices />,
    [EService.CUSTOM_SOFTWARE]: <MdOutlineCode />,
    [EService.DIGITAL_MARKETING]: <BsMegaphone />,
    [EService.UX_UI]: <PiPaintBrush />,
    [EService.ECOMMERCE]: <PiShoppingCart />,
    [EService.MOBILE_APP]: <PiDeviceMobileCameraLight />,
    [EService.EMAIL_MARKETING]: <IoMailOutline />,
    [EService.SEO]: <TbSearch />
  }

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
