'use client'

import { TBadgeColor } from '@Components/atoms/Badge/Badge'
import { TCardItem } from '@Components/molecules'
import { teamBusinessPeopleStackingHands } from '@Constants/backgroundImages'
import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { categories, projects } from '@Translations/common'
import { TCategory } from '@Types/categories'
import {
  CUSTOM_SOFTWARE,
  ECOMMERCE,
  EMAIL_MARKETING,
  LANDING_PAGES,
  MOBILE_APPS,
  SEO_SEM,
  UI_UX_DESIGN,
  WEB_SITES
} from '@Constants/categories'

type TColorCategory = {
  [key in TCategory]: TBadgeColor
}

const colorCategory: TColorCategory = {
  [WEB_SITES]: 'info',
  [ECOMMERCE]: 'success',
  [CUSTOM_SOFTWARE]: 'warning',
  [MOBILE_APPS]: 'error',
  [LANDING_PAGES]: 'brand',
  [UI_UX_DESIGN]: 'info',
  [SEO_SEM]: 'success',
  [EMAIL_MARKETING]: 'warning'
}

export const useProjects = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const projectsData: TCardItem[] = projects[currentLang].map(
    ({ id, title, description, category, gallery }) => {
      const homeKey = Object.keys(gallery).find(
        key =>
          key.toLowerCase().endsWith('cover') ||
          key.toLowerCase().endsWith('home')
      )
      let image = ''
      if (homeKey) {
        const img = gallery[homeKey].lg
        image = typeof img === 'string' ? img : img.src
      }

      const categoriesData = category.map(cat =>
        categories[currentLang].find(c => c.id === cat)
      )

      return {
        id: `${id}`,
        category: categoriesData.map(cat => ({
          title: cat?.title ?? '',
          color: colorCategory[cat?.id as TCategory] ?? 'info'
        })),
        title,
        description,
        image
      }
    }
  )

  return {
    heroImage: teamBusinessPeopleStackingHands.lg.src,
    projects: projectsData
  }
}
