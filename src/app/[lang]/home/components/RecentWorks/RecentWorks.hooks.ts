'use client'

import { IImageMobileDevice } from '@Components/molecules'
import { clients } from '@Constants/clients'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { recentWorks } from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

export const useRecentWorks = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const { title, description, controlActionText, subtitle } =
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

  const controlActionLink = getInfoPage({
    key: 'projects',
    lang: currentLang
  }).href

  return {
    title,
    description,
    controlActionLink,
    controlActionText,
    subtitle,
    imagesDeviceProject
  }
}
