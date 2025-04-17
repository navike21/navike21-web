import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'SEO-Optimierung',
  descriptionLite:
    'Wir verbessern die Sichtbarkeit deiner Website in Suchmaschinen, um mehr qualitativ hochwertigen organischen Traffic zu gewinnen.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `SEO-Optimierung | ${COMPANY_NAME}`,
      description:
        'Wir verbessern die Sichtbarkeit deiner Website in Suchmaschinen, um mehr qualitativ hochwertigen organischen Traffic zu gewinnen.',
      keywords: [
        'SEO',
        'Suchmaschinenoptimierung',
        'Web-Positionierung',
        'technisches SEO',
        'On-Page-SEO',
        'Schlüsselwortanalyse',
        'lokales SEO',
        'SEO-Berichte'
      ],
      ogTitle: `SEO-Optimierung | ${COMPANY_NAME}`,
      ogDescription:
        'Wir verbessern das Ranking deiner Website, damit du in den obersten Positionen der Suchmaschinen erscheinst.',
      ogImage: coverImage,
      twitterTitle: `SEO-Optimierung | ${COMPANY_NAME}`,
      twitterDescription:
        'Steigere deine Online-Sichtbarkeit und gewinne mehr organischen Traffic mit unseren maßgeschneiderten SEO-Dienstleistungen.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Lass dich zuerst finden',
      description:
        'Wir optimieren deine Online-Präsenz, damit deine Produkte oder Dienstleistungen in den ersten Suchergebnissen erscheinen.'
    },
    description: {
      title: 'Technisches und inhaltliches SEO',
      description:
        'Wir konzentrieren uns auf die Prüfung und Verbesserung der technischen Leistung deiner Website, während wir gleichzeitig den Inhalt anhand relevanter Schlüsselwörter optimieren.',
      description2:
        'Unser Ziel ist es, den organischen Traffic zu steigern und das Ranking deiner Marke in Suchmaschinen wie Google zu verbessern.'
    },
    features: {
      title: 'Was beinhaltet unser Service?',
      items: [
        {
          title: 'Technische SEO-Audit',
          description:
            'Wir überprüfen den technischen Zustand deiner Website: Geschwindigkeit, Struktur, Tags, URLs, Weiterleitungen, Indexierung und mehr.'
        },
        {
          title: 'On-Page-Optimierung',
          description:
            'Wir verbessern Titel, Meta-Beschreibungen, Header-Struktur und interne Verlinkungen nach Best Practices.'
        },
        {
          title: 'Schlüsselwortanalyse',
          description:
            'Wir identifizieren die relevantesten Suchbegriffe für dein Geschäft und integrieren sie auf natürliche Weise in deinen Inhalt.'
        },
        {
          title: 'Lokales SEO (optional)',
          description:
            'Wenn dein Geschäft lokal ist, verbessern wir deine Präsenz in Karten, Verzeichnissen und geolokalisierten Suchergebnissen.'
        },
        {
          title: 'Überwachung und Berichterstattung',
          description:
            'Wir liefern Berichte mit wichtigen Kennzahlen wie organischem Traffic, Keyword-Positionen und Website-Entwicklung.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Erste Diagnose',
        description:
          'Wir analysieren deine Website und erkennen technische Probleme, Inhaltslücken und Verbesserungspotenziale.'
      },
      {
        title: 'SEO-Strategie',
        description:
          'Wir entwickeln einen Plan, der auf das Geschäftsmodell, die Zielgruppe und relevante Suchanfragen ausgerichtet ist.'
      },
      {
        title: 'Kontinuierliche Optimierung',
        description:
          'Wir implementieren technische und inhaltliche Verbesserungen, überwachen die Ergebnisse und passen die Strategie bei Bedarf an.'
      },
      {
        title: 'Ergebnisse liefern',
        description:
          'Wir zeigen dir die SEO-Entwicklung durch klare Berichte, die auf den Return on Investment (ROI) und das Wachstum fokussiert sind.'
      }
    ],
    recentWorks: {
      title: 'Projekte mit echtem Ranking',
      description:
        'Wir haben Unternehmen geholfen, in den Suchergebnissen zu steigen und ihren Traffic zu erhöhen, ohne ausschließlich auf bezahlte Werbung angewiesen zu sein.'
    },
    callToAction: {
      title: 'Lass deine Website für dich arbeiten',
      description:
        'Steigere deine Sichtbarkeit bei Google und gewinne mehr Kunden mit einer maßgeschneiderten SEO-Strategie.',
      textButton: 'Ich möchte besser ranken'
    }
  }
})
