'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import {
  allBeRightReserved,
  footerDescription,
  IPage,
  pages,
  services
} from '@Translations/pages'

export const useFooter = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  /**
   * Generates the footer menu structure based on the current language.
   * It retrieves the services page information and constructs the menu items.
   * Each service is linked to its respective page in the current language.
   */

  const { language: servicesLanguage } = pages.find(
    ({ id }) => id === 'services'
  ) as IPage

  const { slug: slugServicesPage, title: servicesTitle } =
    servicesLanguage[currentLang]

  const itemsServices = services.map(({ language }) => {
    const { title: serviceTitle, slug: slugService } = language[currentLang]
    return {
      text: serviceTitle,
      href: `/${currentLang}/${slugServicesPage}/${slugService}`
    }
  })

  /**
   * Constructs the footer menu structure with the contact information.
   * Each section contains a title and a list of items with their respective links.
   */

  const { language: contactLanguage } = pages.find(
    ({ id }) => id === 'contact'
  ) as IPage

  const { title: contactTitle } = contactLanguage[currentLang]

  const itemsContact = [
    {
      text: 'contacto@navike21.com',
      href: 'mailto:contacto@navike21.com'
    },
    {
      text: '+51 989 505 027',
      href: 'tel:+51989505027'
    },
    {
      text: 'www.navike21.com',
      href: 'https://www.navike21.com'
    }
  ]

  /**
   * Constructs the footer menu structure with the legal area information.
   * Each section contains a title and a list of items with their respective links.
   */

  const { language: legalLanguage } = pages.find(
    ({ id }) => id === 'legal'
  ) as IPage

  const { title: legalTitle, subPages: legalSubPages = [] } =
    legalLanguage[currentLang]
  const itemsLegal = legalSubPages.map(({ title, slug }) => ({
    text: title,
    href: `/${currentLang}/${slug}`
  }))

  /**
   * Generate the footer menu structure.
   */

  const footerMenuStructure = [
    {
      title: servicesTitle,
      items: itemsServices
    },
    {
      title: contactTitle,
      items: itemsContact
    },
    {
      title: legalTitle,
      items: itemsLegal
    }
  ]

  return {
    footerMenuStructure,
    footerDescription: footerDescription[currentLang],
    allBeRightReserved: allBeRightReserved[currentLang]
  }
}
