import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Mobile Apps',
  descriptionLite:
    'Wir entwickeln maßgeschneiderte Apps für Android und iOS, die flüssige und moderne Erlebnisse bieten.',
  path: `${servicesMenu.path}/mobile-apps`,
  slug: 'mobile-apps',
  pageSections: {
    metaTag: {
      title: `Entwicklung von Mobile Apps | ${COMPANY_NAME}`,
      description:
        'Wir erstellen maßgeschneiderte Apps für Android und iOS, die Leistung, modernes Design und exzellente Benutzererfahrung kombinieren.',
      keywords: [
        'Entwicklung von Mobile Apps',
        'maßgeschneiderte Apps',
        'React Native',
        'Flutter',
        'Android Apps',
        'iOS Apps',
        'Mobile UX/UI',
        'App Store Veröffentlichung',
        'Plattformübergreifende Entwicklung'
      ],
      ogTitle: `Maßgeschneiderte Mobile Apps | ${COMPANY_NAME}`,
      ogDescription:
        'Verwandle deine Idee in eine funktionale, moderne und skalierbare App. Wir erstellen Mobile Apps für Android und iOS mit außergewöhnlichem Design und Leistung.',
      ogImage: coverImage,
      twitterTitle: `Maßgeschneiderte Mobile Apps | ${COMPANY_NAME}`,
      twitterDescription:
        'Wir erstellen Apps für Android und iOS, die auf Benutzererfahrung, Geschwindigkeit und Qualität fokussiert sind. Starte deine App mit uns.',
      twitterImage: coverImage
    },

    hero: {
      title: 'Apps, die dein Geschäft in die Tasche des Nutzers bringen',
      description:
        'Wir erstellen maßgeschneiderte Mobile Apps, die Leistung, ansprechendes Design und eine makellose Benutzererfahrung kombinieren.'
    },
    description: {
      title: 'Maßgeschneiderte Mobile Lösungen',
      description:
        'Wir analysieren deine Anforderungen, entwerfen effektive Workflows und entwickeln eine App, die auf Skalierbarkeit, Benutzerfreundlichkeit und Effizienz ausgelegt ist.',
      description2:
        'Vom internen Service bis zum kommerziellen Produkt begleiten wir dich im gesamten Prozess der Ideengenerierung, des Designs und der Entwicklung.'
    },
    features: {
      title: 'Was ist in unserem Service enthalten?',
      items: [
        {
          title: 'Mobile UX/UI Design',
          description:
            'Wir erstellen das visuelle Interface und die Benutzererfahrung mit Fokus auf Zugänglichkeit und Einfachheit.'
        },
        {
          title: 'Native oder Plattformübergreifende Entwicklung',
          description:
            'Wir wählen die beste Technologie für dein Projekt: React Native, Flutter oder native Entwicklung, wenn nötig.'
        },
        {
          title: 'Integration mit APIs und Backends',
          description:
            'Wir verbinden die App mit deinem bestehenden System oder erstellen ein neues, indem wir Cloud-Dienste, Datenbanken oder Zahlungsplattformen integrieren.'
        },
        {
          title: 'Testen und Qualitätskontrolle',
          description:
            'Wir führen funktionale und Leistungstests durch, um sicherzustellen, dass die App auf verschiedenen Geräten und in verschiedenen Szenarien funktioniert.'
        },
        {
          title: 'Veröffentlichung in App-Stores',
          description:
            'Wir führen dich durch den Upload- und Veröffentlichungsprozess der App in Google Play Store und App Store.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Erkundung und Analyse',
        description:
          'Wir identifizieren die Projektziele, verstehen die Geschäftsprozesse und schlagen eine geeignete mobile Lösung vor.'
      },
      {
        title: 'UX/UI Prototyping',
        description:
          'Wir entwerfen ein funktionales und ansprechendes Interface mit einem Mobile-First-Ansatz und kontinuierlicher Validierung.'
      },
      {
        title: 'App-Entwicklung',
        description:
          'Wir programmieren die App mit modernen Technologien und gewährleisten Skalierbarkeit, Geschwindigkeit und Leistung.'
      },
      {
        title: 'Tests und Übergabe',
        description:
          'Wir führen Tests in verschiedenen Umgebungen durch, beheben Fehler und liefern dir die App zur Veröffentlichung.'
      }
    ],
    recentWorks: {
      title: 'Apps, die Erlebnisse transformieren',
      description:
        'Wir haben an mobilen Lösungen gearbeitet, die Nutzer effektiv mit Marken, Produkten und Dienstleistungen verbinden.'
    },
    callToAction: {
      title: 'Bereit für deine eigene App?',
      description:
        'Verwandle deine Idee in eine funktionale, schnelle und moderne App. Lass uns über das sprechen, was du entwickeln möchtest.',
      textButton: 'Ich möchte meine maßgeschneiderte App'
    }
  }
})
