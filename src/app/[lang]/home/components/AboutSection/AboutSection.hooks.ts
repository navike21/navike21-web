'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { aboutSection, counterMetrics } from '@Translations/pages'
import { teamYoungBusinessOfficeFocusIsBusinessman } from '@Constants/backgroundImages'

export const useAboutSection = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const { title, subtitle, description, controlActionText, controlActionLink } =
    aboutSection[currentLang]

  const metrics = counterMetrics.map(metric => ({
    ...metric,
    label: metric.label[currentLang]
  }))

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
