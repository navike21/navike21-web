import { EService } from '@Enums/services'

export type TServiceFeature = {
  title: string
  description: string
}

export type TServiceFlowWorkItem = {
  title: string
  description: string
}

export type TServiceCallToAction = {
  title: string
  description: string
  textButton: string
}
export type TServiceMetaTag = {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export type TServicePageSections = {
  metaTag: TServiceMetaTag
  hero: {
    title: string
    description: string
  }
  description: {
    title: string
    description: string
    description2?: string
  }
  features: {
    title: string
    items: TServiceFeature[]
  }
  flowWork: TServiceFlowWorkItem[]
  recentWorks: {
    title: string
    description: string
  }
  callToAction: TServiceCallToAction
}

export type TServiceTranslation = {
  key: EService
  title: string
  descriptionLite: string
  path: string
  slug: string
  pageSections: TServicePageSections
}

export type TServicesTranslations = {
  pages: {
    [key in EService]: TServiceTranslation
  }
  homePage: {
    title: string
    description: string
  }
}
