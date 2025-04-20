import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServicesTranslations } from './servicesTranslations.types'
import {
  customSoftwareServiceDe,
  customSoftwareServiceEn,
  customSoftwareServiceEs,
  customSoftwareServiceFr,
  customSoftwareServiceIt,
  customSoftwareServiceJp,
  customSoftwareServiceKo,
  customSoftwareServicePt,
  customSoftwareServiceRu,
  customSoftwareServiceZh
} from './listServices/customSoftware'
import {
  digitalMarketingDe,
  digitalMarketingEn,
  digitalMarketingEs,
  digitalMarketingFr,
  digitalMarketingIt,
  digitalMarketingJp,
  digitalMarketingKo,
  digitalMarketingPt,
  digitalMarketingRu,
  digitalMarketingZh
} from './listServices/digitalMarketing'
import {
  webDevelopmentDe,
  webDevelopmentEn,
  webDevelopmentEs,
  webDevelopmentFr,
  webDevelopmentIt,
  webDevelopmentJp,
  webDevelopmentKo,
  webDevelopmentPt,
  webDevelopmentRu,
  webDevelopmentZh
} from './listServices/webDevelopment'
import {
  ecommerceDe,
  ecommerceEn,
  ecommerceEs,
  ecommerceFr,
  ecommerceIt,
  ecommerceJp,
  ecommerceKo,
  ecommercePt,
  ecommerceRu,
  ecommerceZh
} from './listServices/ecommerce'
import {
  emailingDe,
  emailingEn,
  emailingEs,
  emailingFr,
  emailingIt,
  emailingJp,
  emailingKo,
  emailingPt,
  emailingRu,
  emailingZh
} from './listServices/emailing'
import {
  mobileAppDe,
  mobileAppEn,
  mobileAppEs,
  mobileAppFr,
  mobileAppIt,
  mobileAppJp,
  mobileAppKo,
  mobileAppPt,
  mobileAppRu,
  mobileAppZh
} from './listServices/mobileApp'
import {
  seoDe,
  seoEn,
  seoEs,
  seoFr,
  seoIt,
  seoJp,
  seoKo,
  seoPt,
  seoRu,
  seoZh
} from './listServices/seo'
import {
  uxUiDe,
  uxUiEn,
  uxUiEs,
  uxUiFr,
  uxUiIt,
  uxUiJp,
  uxUiKo,
  uxUiPt,
  uxUiRu,
  uxUiZh
} from './listServices/uxUi'
import { ELanguage } from '@Enums/languages'

export const servicesTranslationsDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentDe(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceDe(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingDe(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiDe(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceDe(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppDe(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingDe(servicesMenu, coverImage),
    [EService.SEO]: seoDe(servicesMenu, coverImage)
  },
  homePage: {
    title: 'Was bieten wir an?',
    description:
      'Von Webentwicklung bis hin zu digitalen Marketingstrategien – bei navike21 entwickeln wir innovative Lösungen, um dein Unternehmen auf das nächste Level zu bringen.'
  }
})

export const servicesTranslationsEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentEn(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceEn(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingEn(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiEn(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceEn(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppEn(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingEn(servicesMenu, coverImage),
    [EService.SEO]: seoEn(servicesMenu, coverImage)
  },
  homePage: {
    title: 'What Do We Offer?',
    description:
      'From web development to digital marketing strategies, at navike21 we create innovative solutions to take your business to the next level.'
  }
})

export const servicesTranslationsEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentEs(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceEs(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingEs(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiEs(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceEs(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppEs(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingEs(servicesMenu, coverImage),
    [EService.SEO]: seoEs(servicesMenu, coverImage)
  },
  homePage: {
    title: '¿Qué Ofrecemos?',
    description:
      'Desde desarrollo web hasta estrategias de marketing digital, en navike21 creamos soluciones innovadoras para llevar tu negocio al siguiente nivel.'
  }
})

export const servicesTranslationsFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentFr(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceFr(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingFr(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiFr(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceFr(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppFr(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingFr(servicesMenu, coverImage),
    [EService.SEO]: seoFr(servicesMenu, coverImage)
  },
  homePage: {
    title: 'Que proposons-nous?',
    description:
      'Du développement web aux stratégies de marketing digital, chez navike21, nous créons des solutions innovantes pour faire passer votre entreprise au niveau supérieur.'
  }
})

export const servicesTranslationsIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentIt(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceIt(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingIt(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiIt(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceIt(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppIt(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingIt(servicesMenu, coverImage),
    [EService.SEO]: seoIt(servicesMenu, coverImage)
  },
  homePage: {
    title: 'Cosa offriamo?',
    description:
      'Dallo sviluppo web alle strategie di marketing digitale, in navike21 creiamo soluzioni innovative per portare la tua attività al livello successivo.'
  }
})

export const servicesTranslationsJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentJp(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceJp(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingJp(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiJp(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceJp(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppJp(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingJp(servicesMenu, coverImage),
    [EService.SEO]: seoJp(servicesMenu, coverImage)
  },
  homePage: {
    title: '私たちが提供するものは？',
    description:
      'ウェブ開発からデジタルマーケティング戦略まで、navike21ではあなたのビジネスを次のレベルへ導く革新的なソリューションを提供します。'
  }
})

export const servicesTranslationsKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentKo(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceKo(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingKo(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiKo(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceKo(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppKo(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingKo(servicesMenu, coverImage),
    [EService.SEO]: seoKo(servicesMenu, coverImage)
  },
  homePage: {
    title: '우리는 무엇을 제공하나요?',
    description:
      '웹 개발부터 디지털 마케팅 전략까지, navike21은 귀하의 비즈니스를 한 단계 끌어올릴 혁신적인 솔루션을 만듭니다.'
  }
})

export const servicesTranslationsPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentPt(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServicePt(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingPt(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiPt(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommercePt(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppPt(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingPt(servicesMenu, coverImage),
    [EService.SEO]: seoPt(servicesMenu, coverImage)
  },
  homePage: {
    title: 'O que oferecemos?',
    description:
      'Do desenvolvimento web às estratégias de marketing digital, na navike21 criamos soluções inovadoras para levar o seu negócio ao próximo nível.'
  }
})

export const servicesTranslationsRu = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentRu(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceRu(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingRu(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiRu(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceRu(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppRu(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingRu(servicesMenu, coverImage),
    [EService.SEO]: seoRu(servicesMenu, coverImage)
  },
  homePage: {
    title: 'Что мы предлагаем?',
    description:
      'От веб-разработки до стратегий цифрового маркетинга — в navike21 мы создаем инновационные решения, чтобы вывести ваш бизнес на новый уровень.'
  }
})

export const servicesTranslationsZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  pages: {
    [EService.WEB_DEVELOPMENT]: webDevelopmentZh(servicesMenu, coverImage),
    [EService.CUSTOM_SOFTWARE]: customSoftwareServiceZh(
      servicesMenu,
      coverImage
    ),
    [EService.DIGITAL_MARKETING]: digitalMarketingZh(servicesMenu, coverImage),
    [EService.UX_UI]: uxUiZh(servicesMenu, coverImage),
    [EService.ECOMMERCE]: ecommerceZh(servicesMenu, coverImage),
    [EService.MOBILE_APP]: mobileAppZh(servicesMenu, coverImage),
    [EService.EMAIL_MARKETING]: emailingZh(servicesMenu, coverImage),
    [EService.SEO]: seoZh(servicesMenu, coverImage)
  },
  homePage: {
    title: '我们提供什么？',
    description:
      '从网站开发到数字营销策略，navike21 提供创新解决方案，助您将业务提升到新的高度。'
  }
})

export const servicesTranslations = {
  [ELanguage.DE]: servicesTranslationsDe,
  [ELanguage.EN]: servicesTranslationsEn,
  [ELanguage.ES]: servicesTranslationsEs,
  [ELanguage.FR]: servicesTranslationsFr,
  [ELanguage.IT]: servicesTranslationsIt,
  [ELanguage.JP]: servicesTranslationsJp,
  [ELanguage.KO]: servicesTranslationsKo,
  [ELanguage.PT]: servicesTranslationsPt,
  [ELanguage.RU]: servicesTranslationsRu,
  [ELanguage.ZH]: servicesTranslationsZh
}
