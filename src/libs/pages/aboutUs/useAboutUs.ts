'use client'

import { IAnimatedLogo, IStat } from '@Components/molecules'
import {
  historyNavike,
  teamYoungBusinessOfficeFocusIsBusinessman
} from '@Constants/backgroundImages'
import { clients } from '@Constants/clients'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import {
  counterMetrics,
  heroSectionAbout,
  historyNavike21,
  pillarsAboutUs,
  TPillar
} from '@Translations/pages'
import {
  ChartNoAxesCombined,
  Cpu,
  Handshake,
  HeartPlus,
  LucideIcon,
  Sparkles,
  Users
} from 'lucide-react'

interface IPillar extends TPillar {
  icon: LucideIcon
}

interface IPillarsAboutUs {
  title: string
  items: IPillar[]
}

export const useAboutUs = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const iconsPillars = {
    technologyWithPurpose: Cpu,
    peopleAtTheCenter: Users,
    commitmentFulfilled: Handshake,
    constantGrowth: ChartNoAxesCombined,
    qualityWithoutShortcuts: Sparkles,
    realProximity: HeartPlus
  }

  const pillarsWithIcons: IPillarsAboutUs = {
    ...pillarsAboutUs[currentLang],
    items: pillarsAboutUs[currentLang].items.map(pillar => ({
      ...pillar,
      icon:
        iconsPillars[pillar.id as keyof typeof iconsPillars] ||
        (Cpu as LucideIcon) // Default icon if not found
    }))
  }

  const logoClients: IAnimatedLogo[] = clients.map(({ logo, name, url }) => ({
    name: name,
    image: logo,
    url
  }))

  const metrics: IStat[] = counterMetrics.map(metric => ({
    ...metric,
    label: metric.label[currentLang]
  }))

  return {
    pillars: pillarsWithIcons,
    logoClients,
    metrics,
    heroImage: teamYoungBusinessOfficeFocusIsBusinessman.lg.src,
    historyImage: historyNavike.sm.src,
    heroSectionText: heroSectionAbout[currentLang],
    history: historyNavike21[currentLang]
  }
}
