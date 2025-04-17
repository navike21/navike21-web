import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'UX/UI-Design',
  descriptionLite:
    'Wir verwandeln das Nutzererlebnis durch ansprechende, funktionale und benutzerfreundliche Schnittstellen, mit Fokus auf vereinfachte Abläufe und verbesserte Interaktion.',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `UX/UI-Design | ${COMPANY_NAME}`,
      description:
        'Wir verbessern das Nutzererlebnis mit attraktiven und funktionalen Interfaces, indem wir Abläufe vereinfachen und die Interaktion optimieren.',
      keywords: [
        'UX-Design',
        'UI-Design',
        'Benutzererlebnis',
        'Benutzeroberfläche',
        'interaktive Prototypen',
        'Webdesign',
        'Responsive Design',
        'UX/UI-Optimierung'
      ],
      ogTitle: `UX/UI-Design | ${COMPANY_NAME}`,
      ogDescription:
        'Verbessere das Nutzererlebnis mit einem ansprechenden und funktionalen UX/UI-Design, das die Interaktion mit deinem Produkt optimiert.',
      ogImage: coverImage,
      twitterTitle: `UX/UI-Design | ${COMPANY_NAME}`,
      twitterDescription:
        'Verwandle die Interaktion mit deinem Produkt durch ein UX/UI-Design, das auf Einfachheit und Effektivität setzt.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Kreatives UX/UI-Design',
      description:
        'Wir entwickeln Designlösungen, die das Nutzererlebnis verbessern, Abläufe vereinfachen und die Interaktion mit deinem Produkt oder Service optimieren.'
    },
    description: {
      title: 'Maßgeschneiderte UX/UI-Lösungen',
      description:
        'Mit einem tiefen Verständnis deiner Geschäftsabläufe schlagen wir UX/UI-Lösungen vor, die die Interaktion mit deinem Produkt vereinfachen und das gesamte Erlebnis verbessern.',
      description2:
        'Von der Idee bis zum finalen Design konzentrieren wir uns darauf, klare, intuitive und zugängliche Erlebnisse zu schaffen, die mit deinen Geschäftszielen im Einklang stehen.'
    },
    features: {
      title: 'Was beinhaltet unser Service?',
      items: [
        {
          title: 'Recherche und Analyse von Abläufen',
          description:
            'Wir analysieren deine aktuellen Geschäftsabläufe und identifizieren Verbesserungsmöglichkeiten, um das Nutzererlebnis zu vereinfachen.'
        },
        {
          title: 'Funktionales Interface-Design',
          description:
            'Wir gestalten visuell ansprechende Interfaces, die deine Markenidentität widerspiegeln und eine reibungslose Navigation gewährleisten.'
        },
        {
          title: 'Interaktive Prototypen',
          description:
            'Wir entwickeln interaktive Prototypen, um unsere Lösungsvorschläge vor der Umsetzung zu validieren und effiziente, benutzerfreundliche Abläufe sicherzustellen.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Recherche und Geschäftsverständnis',
        description:
          'Wir tauchen tief in dein Geschäft ein, um Ziele und aktuelle Abläufe zu verstehen und das Nutzererlebnis zu optimieren, ohne die Essenz deines Produkts zu verlieren.'
      },
      {
        title: 'Ablaufanalyse und UX-Lösungen',
        description:
          'Wir analysieren Workflows und schlagen UX-Lösungen vor, die die Navigation erleichtern, Barrieren abbauen und die Effizienz jeder Interaktion maximieren.'
      },
      {
        title: 'Visuelles Design und Prototyping',
        description:
          'Wir gestalten visuelle Konzepte im Einklang mit deiner Markenidentität und entwickeln interaktive Prototypen, um das Nutzererlebnis vor der Implementierung zu testen.'
      },
      {
        title: 'Validierung und Feinschliff',
        description:
          'Wir führen User-Tests durch, um sicherzustellen, dass das Design intuitiv ist und den Erwartungen entspricht – und optimieren Details basierend auf dem Feedback.'
      }
    ],
    recentWorks: {
      title: 'Neueste Projekte',
      description:
        'Entdecke einige unserer Projekte, in denen wir das Nutzererlebnis durch fokussiertes UX/UI-Design auf einfache und effektive Abläufe verbessert haben.'
    },
    callToAction: {
      title: 'Bereit, das Nutzererlebnis zu transformieren?',
      description:
        'Lass uns gemeinsam ein Nutzererlebnis schaffen, das deine Prozesse vereinfacht und die Interaktion mit deinem Produkt verbessert. Sprich mit uns über dein nächstes UX/UI-Projekt.',
      textButton: 'Starte dein UX/UI-Projekt'
    }
  }
})
