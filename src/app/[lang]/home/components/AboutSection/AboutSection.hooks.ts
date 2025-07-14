'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { aboutSection, counterMetrics } from '@Translations/pages'
import { teamYoungBusinessOfficeFocusIsBusinessman } from '@Constants/backgroundImages'
import { getInfoPage } from '@Utils/getInfoPage'
import { ABOUT_US } from '@Constants/pages'

export const useAboutSection = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const { title, subtitle, description, controlActionText } =
    aboutSection[currentLang]

  const metrics = counterMetrics.map(metric => ({
    ...metric,
    label: metric.label[currentLang]
  }))

  const controlActionLink = getInfoPage({
    key: ABOUT_US,
    lang: currentLang
  }).href

  return {
    title,
    subtitle,
    description,
    controlActionText,
    controlActionLink,
    metrics,
    imageAbout: teamYoungBusinessOfficeFocusIsBusinessman.md
  }
}
