import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Digitales Marketing',
  descriptionLite:
    'Wir stärken deine Marke im digitalen Umfeld mit maßgeschneiderten Strategien, effektiver Werbung und einer starken Präsenz in sozialen Netzwerken.',
  path: `${servicesMenu.path}/digitales-marketing`,
  slug: 'digitales-marketing',
  pageSections: {
    metaTag: {
      title: `Digitales Marketing | Strategien und Online-Werbung | ${COMPANY_NAME}`,
      description:
        'Stärke deine Marke mit digitalen Marketingstrategien, bezahlten Kampagnen, Social Media und optimierten Inhalten. Messbare Ergebnisse mit navike21.',
      ogTitle: `Digitales Marketing | Strategien und Online-Werbung | ${COMPANY_NAME}`,
      ogDescription:
        'Steigere deine Online-Präsenz mit maßgeschneiderten Kampagnen, Social Media und effektiver Werbung. Echte Ergebnisse mit navike21.',
      ogImage: coverImage,
      twitterTitle: `Digitales Marketing | Online-Strategien | ${COMPANY_NAME}`,
      twitterDescription:
        'Digitale Kampagnen, Social Media und Online-Werbung, die Ergebnisse liefern. Entdecke, was navike21 für deine Marke tun kann.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Digitale Strategien, die Ergebnisse liefern',
      description:
        'Wir entwerfen und führen digitale Kampagnen durch, die auf deine Geschäftsziele abgestimmt sind, um deine Sichtbarkeit zu erhöhen und die richtigen Kunden anzuziehen.'
    },
    description: {
      title: 'Individuelles Marketing für dein Unternehmen',
      description:
        'Wir analysieren deine aktuelle Situation und erstellen einen strategischen Marketingplan, der zu deinen Zielen, deinem Budget und deiner Zielgruppe passt. Unser Fokus liegt auf wirkungsvollem und messbarem Erfolg.',
      description2:
        'Wir werden zu deinem Partner für digitales Wachstum, überwachen laufend die Kampagnen und nehmen notwendige Anpassungen vor, um den ROI zu maximieren.'
    },
    features: {
      title: 'Was ist in unserem Service enthalten?',
      items: [
        {
          title: 'Werbung auf digitalen Plattformen',
          description:
            'Wir verwalten bezahlte Kampagnen auf Google Ads, Meta Ads, TikTok Ads und mehr, optimiert für hochwertigen Traffic und Conversions.'
        },
        {
          title: 'Social-Media-Management',
          description:
            'Wir entwickeln Content-Strategien und verwalten deine Profile, um eine loyale Community aufzubauen und deine Online-Präsenz zu stärken.'
        },
        {
          title: 'Content-Erstellung',
          description:
            'Wir gestalten visuelle Inhalte und schreiben überzeugende Texte, die deine Zielgruppe in jeder Phase des Funnels ansprechen.'
        },
        {
          title: 'Pixel-Installation und Messwerkzeuge',
          description:
            'Wir richten Tracking-Pixel für Facebook, TikTok, Google Ads und Adobe ein, um die Kampagnenleistung genau zu messen.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Analyse und Zieldefinition',
        description:
          'Wir bewerten deine aktuelle Online-Präsenz und definieren klare Ziele für dein digitales Marketing.'
      },
      {
        title: 'Strategische Planung',
        description:
          'Wir erstellen einen detaillierten Aktionsplan, der Plattformen, Inhalte, Budget und Kampagnenzeitplan umfasst.'
      },
      {
        title: 'Kampagnenumsetzung',
        description:
          'Wir setzen Kampagnen professionell um, mit gezieltem Targeting und kreativem Content.'
      },
      {
        title: 'Messung und Optimierung',
        description:
          'Wir überwachen die Ergebnisse in Echtzeit und passen Kampagnen an, um maximale Leistung zu erzielen.'
      }
    ],
    recentWorks: {
      title: 'Kampagnen, die den Unterschied machen',
      description:
        'Entdecke Beispiele, in denen unsere digitalen Strategien die Online-Präsenz von Marken verschiedener Branchen gestärkt haben.'
    },
    callToAction: {
      title: 'Bereit, deine Marke zu stärken?',
      description:
        'Lass uns über deine Ziele sprechen und gemeinsam eine digitale Marketingstrategie entwickeln, die Ergebnisse liefert.',
      textButton: 'Ich will mein Marketing verbessern'
    }
  }
})
