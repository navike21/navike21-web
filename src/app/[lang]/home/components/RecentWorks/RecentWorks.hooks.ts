'use client'

import { IImageMobileDevice } from '@Components/molecules'
import { clients } from '@Constants/clients'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { recentWorks } from '@Translations/pages'

export const useRecentWorks = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const { title, description, controlActionLink, controlActionText, subtitle } =
    recentWorks[currentLang]

  const imagesDeviceProject: IImageMobileDevice[] = clients
    .filter(({ images: { mobile = [] } = {} }) => mobile.length > 0)
    .slice(0, 4)
    .map(({ images: { mobile = [] } = {}, id }) => {
      return {
        image: mobile[0],
        alt: id
      }
    })

  return {
    title,
    description,
    controlActionLink,
    controlActionText,
    subtitle,
    imagesDeviceProject
  }
}
