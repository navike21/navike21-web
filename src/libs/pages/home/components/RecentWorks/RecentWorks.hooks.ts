'use client'

import { clients } from '@Constants/clients'
import { ES } from '@Constants/languages'
import { PROJECTS } from '@Constants/pages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { projects } from '@Translations/common'
import { recentWorks } from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

export const useRecentWorks = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const { title, description, controlActionText, subtitle } =
    recentWorks[currentLang]

  const imagesDeviceProject = clients.map(({ id }) => {
    const galleryProject = projects[currentLang].find(
      ({ clientId }) => clientId === id
    )?.gallery

    if (galleryProject) {
      const galleryCover = Object.keys(galleryProject).find(
        key => !key.toLowerCase().endsWith('cover')
      )

      if (galleryCover) {
        return galleryProject[galleryCover].lg
      }
    }
  })

  const controlActionLink = getInfoPage({
    key: PROJECTS,
    lang: currentLang
  }).href

  return {
    title,
    description,
    controlActionLink,
    controlActionText,
    subtitle,
    imagesDeviceProject: imagesDeviceProject.filter(
      item => item !== undefined
    )[0]
  }
}
