'use client'

import { IAnimatedLogo, IStat } from '@Components/molecules'
import {
  historyNavike,
  teamYoungBusinessOfficeFocusIsBusinessman
} from '@Constants/backgroundImages'
import { clients } from '@Constants/clients'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { counterMetrics } from '@Translations/pages'
import {
  ChartNoAxesCombined,
  Cpu,
  Handshake,
  HeartPlus,
  LucideIcon,
  Sparkles,
  Users
} from 'lucide-react'

interface IPillar {
  icon: LucideIcon
  title: string
  description: string
}

export const useAboutUs = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const pillars: IPillar[] = [
    {
      icon: Cpu,
      title: 'Tecnología con propósito',
      description:
        'No desarrollamos por moda, sino para resolver problemas reales y mejorar la vida de las personas.'
    },
    {
      icon: Users,
      title: 'Personas en el centro',
      description:
        'Cada línea de código parte de la empatía. Valoramos a quienes usan, crean y confían en nuestras soluciones.'
    },
    {
      icon: Handshake,
      title: 'Compromiso que se cumple',
      description:
        'Nos tomamos en serio cada entrega. La responsabilidad es parte del ADN de todo el equipo.'
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Crecimiento constante',
      description:
        'Aprendemos, iteramos, mejoramos. Porque no creemos en lo perfecto, sino en lo que evoluciona.'
    },
    {
      icon: Sparkles,
      title: 'Calidad sin atajos',
      description:
        'Diseñamos con intención. El detalle, la estabilidad y la experiencia del usuario son prioridad.'
    },
    {
      icon: HeartPlus,
      title: 'Cercanía real',
      description:
        'Nos gusta hablar claro, colaborar de forma honesta y construir relaciones duraderas.'
    }
  ]

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
    pillars,
    logoClients,
    metrics,
    heroImage: teamYoungBusinessOfficeFocusIsBusinessman.lg.src,
    historyImage: historyNavike.sm.src
  }
}
