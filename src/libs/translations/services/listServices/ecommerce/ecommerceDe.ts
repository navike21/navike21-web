import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'E-Commerce',
  descriptionLite:
    'Wir erstellen maßgeschneiderte Online-Shops, optimiert für Konversionen und individuell an Ihr Unternehmen angepasst – mit integrierten Lösungen für Zahlung, Versand und Lagerverwaltung.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `E-Commerce | Maßgeschneiderte Online-Shops | ${COMPANY_NAME}`,
      description:
        'Wir entwickeln individuelle Online-Shops mit ansprechendem Design, umfassender Funktionalität und Fokus auf Konversion. Lösungen mit WooCommerce oder komplett maßgeschneiderte Entwicklungen.',
      ogTitle: `E-Commerce | Maßgeschneiderte Online-Shops | ${COMPANY_NAME}`,
      ogDescription:
        'Steigern Sie Ihre Verkäufe mit einem Online-Shop, der genau auf Ihr Unternehmen zugeschnitten ist. Von WooCommerce bis hin zu individuellen Lösungen – wir entwickeln Shops, die verkaufen.',
      ogImage: coverImage,
      twitterTitle: `E-Commerce | Online-Shops | ${COMPANY_NAME}`,
      twitterDescription:
        'Online-Shops, die skalieren – maßgeschneidert, funktional und konversionsstark. Starten Sie Ihr E-Commerce mit navike21.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Maßgeschneiderter E-Commerce',
      description:
        'Wir entwickeln individuelle Online-Shops mit ansprechendem Design, benutzerfreundlicher Navigation und optimaler Performance zur Maximierung Ihrer Verkäufe. Alle notwendigen Funktionen sind integriert, damit Ihr Shop wachsen kann.'
    },
    description: {
      title: 'E-Commerce-Lösungen für Ihr Unternehmen',
      description:
        'Von der Erstellung Ihres Online-Shops bis hin zur Wartung und Optimierung bieten wir einen ganzheitlichen Ansatz, der alle Aspekte des E-Commerce abdeckt. Wir sorgen dafür, dass Ihr Shop einfach zu verwalten und skalierbar ist, wenn Ihr Unternehmen wächst.',
      description2:
        'Wir bieten zwei Entwicklungsoptionen für Ihren Online-Shop: Eine vorgefertigte Lösung mit **WordPress und WooCommerce** oder eine vollständig **individuelle Entwicklung von Grund auf**. Für maßgeschneiderte Entwicklungen empfehlen wir ein geeignetes technisches Profil, da diese langfristig mehr Flexibilität und Skalierbarkeit bieten.'
    },
    features: {
      title: 'Was ist in unserem Service enthalten?',
      items: [
        {
          title: 'Individuelles Design und Entwicklung von Online-Shops',
          description:
            'Wir gestalten einzigartige, maßgeschneiderte Online-Shops mit attraktivem Design, intuitiver Navigation und Fokus auf Konversion – genau abgestimmt auf Ihre Geschäftsziele.'
        },
        {
          title: 'Produkt- und Lagerverwaltung',
          description:
            'Wir entwickeln intuitive und skalierbare Systeme zur Verwaltung von Produkten, Preisen, Lagerbeständen und Aktionen – einfach zu bedienen und anpassbar.'
        },
        {
          title: 'Integration von Facebook-, Google- und TikTok-Pixeln',
          description:
            'Wir integrieren Tracking-Pixel für Werbekampagnen auf Facebook, Google Ads und TikTok, damit Sie Ihre Marketingmaßnahmen analysieren und optimieren können.'
        },
        {
          title: 'Wartung & Updates (Zusatzservice)',
          description:
            'Laufende Wartung und Updates Ihres Online-Shops – einschließlich neuer Funktionen, Datenbankaktualisierungen und Sicherheit – bieten wir als Zusatzservice an.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Anforderungsanalyse für den Online-Shop',
        description:
          'Zu Beginn führen wir eine umfassende Analyse durch, um Ihre Geschäftsziele, Produkte, Zielgruppen und Erwartungen zu verstehen. Wir definieren Einkaufsprozesse, Zahlungsoptionen und erforderliche Funktionen.'
      },
      {
        title: 'Design und Prototyping des Shops',
        description:
          'Wir entwerfen ein visuelles Konzept, das Ihre Marke widerspiegelt und auf Nutzererlebnis optimiert ist. Mithilfe interaktiver Prototypen validieren wir das Design vor Beginn der Entwicklung.'
      },
      {
        title: 'Entwicklung des Online-Shops',
        description:
          'Wir entwickeln den Shop auf Basis bewährter Plattformen wie WordPress mit WooCommerce oder als vollständig maßgeschneiderte Lösung – je nach Wunsch und technischem Bedarf.'
      },
      {
        title: 'Tests & Qualitätssicherung',
        description:
          'Wir testen den Shop umfassend, um sicherzustellen, dass alle Funktionen – Warenkorb, Zahlungsabwicklung, Produktverwaltung – fehlerfrei funktionieren, bevor der Shop live geht.'
      },
      {
        title: 'Bereitstellung des Online-Shops',
        description:
          'Wir veröffentlichen den Shop auf einem sicheren Server und stellen sicher, dass er auf allen Geräten optimal funktioniert – responsive Design für Desktop und Mobilgeräte inklusive.'
      },
      {
        title: 'Schulung & Wissensweitergabe',
        description:
          'Wir schulen Ihr Team in der Verwaltung von Produkten, Aktionen, Lagerbeständen und der allgemeinen Shop-Pflege – damit Sie unabhängig vom technischen Support bleiben.'
      },
      {
        title: 'Support & Laufende Wartung (Zusatzservice)',
        description:
          'Technischer Support und Wartung als separater Service – inklusive Software-Updates, Lagerverwaltung und kontinuierlicher Optimierung Ihres Shops.'
      }
    ],
    recentWorks: {
      title: 'Abgeschlossene Projekte',
      description:
        'Entdecken Sie unsere neuesten Projekte und erfahren Sie, wie wir Strategie, Technologie und Umsetzung kombinieren, um herausragende E-Commerce-Ergebnisse zu liefern.'
    },
    callToAction: {
      title: 'Bereit für Ihren eigenen Online-Shop?',
      description:
        'Lassen Sie uns darüber sprechen, wie wir gemeinsam einen effizienten, skalierbaren und konversionsstarken Online-Shop für Ihr Unternehmen aufbauen können.',
      textButton: 'Jetzt Shop starten'
    }
  }
})
