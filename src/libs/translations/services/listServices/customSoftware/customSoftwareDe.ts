import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Maßgeschneiderte Software',
  descriptionLite:
    'Wir entwickeln maßgeschneiderte Softwarelösungen, die auf die einzigartigen Bedürfnisse Ihres Unternehmens zugeschnitten sind, um die Effizienz und Wettbewerbsfähigkeit zu steigern.',
  path: `${servicesMenu.path}/massgeschneiderte-software`,
  slug: 'massgeschneiderte-software',
  pageSections: {
    metaTag: {
      title: `Entwicklung maßgeschneiderter Software | ${COMPANY_NAME}`,
      description:
        'Wir erstellen maßgeschneiderte Software, die genau auf die Bedürfnisse Ihres Unternehmens abgestimmt ist und Prozesse, Skalierbarkeit und Wettbewerbsfähigkeit verbessert.',
      keywords: [
        'maßgeschneiderte software',
        'individuelle entwicklung',
        'businesslösungen',
        'maßgeschneiderte anwendungen',
        'unternehmenssoftware',
        'softwareentwicklung',
        'maßgeschneiderte systeme',
        'entwicklungen nach maß'
      ],
      ogTitle: `Entwicklung maßgeschneiderter Software | ${COMPANY_NAME}`,
      ogDescription:
        'Wir erstellen maßgeschneiderte Software, die auf Ihr Unternehmen zugeschnitten ist, um Prozesse zu verbessern und effizient zu skalieren.',
      ogImage: coverImage,
      twitterTitle: `Maßgeschneiderte Software für Unternehmen | ${COMPANY_NAME}`,
      twitterDescription:
        'Technologische Lösungen, die sich an Ihre Prozesse anpassen und mit Ihnen skalieren.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Maßgeschneiderte Softwarelösungen',
      description:
        'Wir entwickeln maßgeschneiderte Software, um die Prozesse Ihres Unternehmens zu optimieren, dabei vollständig auf Ihre spezifischen Bedürfnisse einzugehen und skalierbare sowie sichere Lösungen zu bieten.'
    },
    description: {
      title: 'Maßgeschneiderte Software für Ihr Unternehmen',
      description:
        'Ob Desktop- oder mobile Anwendungen oder eine umfassende Unternehmenslösung, wir entwickeln Software, die Ihre Geschäftsabläufe optimiert, sich in Ihre Systeme integriert und sofortigen Mehrwert bietet.',
      description2:
        'Unser agiler und flexibler Ansatz ermöglicht es uns, effiziente und wartungsfreundliche Softwareprodukte zu liefern, die sicherstellen, dass Ihre technologischen Lösungen immer mit der Vision Ihres Unternehmens übereinstimmen.'
    },
    features: {
      title: 'Was beinhaltet unser Service?',
      items: [
        {
          title: 'Maßgeschneiderte Architektur',
          description:
            'Wir entwerfen die Architektur der Software mit Blick auf Skalierbarkeit, Sicherheit und langfristige Leistung, maßgeschneidert auf die spezifischen Bedürfnisse Ihres Unternehmens.'
        },
        {
          title: 'Full Stack Entwicklung',
          description:
            'Wir verfügen über spezialisierte Teams für Frontend, Backend und Mobile Development, die mit Technologien wie React, Node.js, .NET, Java, Python und mehr arbeiten, um vollständige Lösungen anzubieten.'
        },
        {
          title: 'Integration und APIs',
          description:
            'Wir erstellen robuste Integrationen zwischen Systemen und Services mittels APIs, sodass Ihre Software effizient mit anderen Plattformen und Anwendungen interagiert.'
        },
        {
          title: 'Tests und QA',
          description:
            'Unser QA-Team führt umfassende Funktionalitäts-, Leistungs- und Sicherheitstests durch, um sicherzustellen, dass jedes Softwaremodul den höchsten Qualitätsstandards entspricht.'
        },
        {
          title: 'Cloud-Technologien',
          description:
            'Wir nutzen Cloud-Plattformen wie AWS, Azure und Google Cloud, um die Verfügbarkeit, Skalierbarkeit und Sicherheit Ihrer Anwendung zu gewährleisten, indem wir Ressourcen und Kosten optimieren.'
        },
        {
          title: 'Agile Methodologie',
          description:
            'Wir setzen agile Methoden wie Scrum ein, mit einem Scrum Master, der den Entwicklungsprozess unterstützt, um eine kontinuierliche Wertschöpfung und die Ausrichtung auf die Geschäftsziele sicherzustellen.'
        },
        {
          title: 'Maßgeschneiderte Schulungen',
          description:
            'Wir bieten eine vollständige Schulung für das Team des Kunden, damit es die Software effektiv nutzen kann, ihren Betrieb versteht und die grundlegenden Wartungsaufgaben durchführen kann.'
        },
        {
          title: 'Post-Projekt Support (Zusatzservice)',
          description:
            'Der Post-Launch-Support ist nicht im Standardumfang des Projekts enthalten und wird als Zusatzservice angeboten. Dieser umfasst kontinuierlichen technischen Support, Updates und Software-Optimierung, wenn nötig.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Anforderungsdefinition',
        description:
          'Wir arbeiten mit Ihnen zusammen, um die Bedürfnisse Ihres Unternehmens zu verstehen und die Softwareziele klar zu definieren, wobei alle Stakeholder in die Planung einbezogen werden.'
      },
      {
        title: 'Systemarchitektur und Design',
        description:
          'Unser Architekturteam definiert die technische Architektur, wählt die besten Technologien und Werkzeuge aus, um eine skalierbare und effiziente Lösung zu erstellen, wobei Sicherheits- und Leistungsanforderungen berücksichtigt werden.'
      },
      {
        title: 'Frontend- und Backend-Entwicklung',
        description:
          'Unsere Frontend- und Backend-Entwickler arbeiten bei der Erstellung der Anwendung zusammen und konzentrieren sich sowohl auf das Design benutzerfreundlicher Oberflächen als auch auf die Entwicklung robuster und skalierbarer Server.'
      },
      {
        title: 'Integration und kontinuierliche Tests',
        description:
          'Wir implementieren kontinuierliche Integrationen und automatisierte Tests, um sicherzustellen, dass jedes Systemmodul vom ersten Moment an perfekt funktioniert. Qualität ist unser Hauptaugenmerk.'
      },
      {
        title: 'Bereitstellung und Überwachung',
        description:
          'Wir deployen die Software in Produktionsumgebungen unter Verwendung von Cloud-Tools (AWS, Azure, Google Cloud) und überwachen diese ständig, um die Stabilität und Leistung sicherzustellen.'
      },
      {
        title: 'Schulung und Wissensübertragung',
        description:
          'Wir bieten eine detaillierte Schulung für das Team des Kunden an, damit es die Software eigenständig bedienen, verwalten und grundlegende Wartungsaufgaben durchführen kann.'
      },
      {
        title: 'Support und kontinuierliche Wartung (Zusatzservice)',
        description:
          'Der Post-Launch-Support ist als Zusatzservice verfügbar. Dieser umfasst Updates, Fehlerbehebungen, Leistungsoptimierungen und funktionale Verbesserungen, je nach den Bedürfnissen des Unternehmens. Der Support-Service ist optional und kann gemäß den Anforderungen des Kunden gebucht werden.'
      }
    ],
    recentWorks: {
      title: 'Jüngste Projekte',
      description:
        'Sehen Sie sich einige der Softwareprojekte an, die wir für Unternehmen aus verschiedenen Branchen erstellt haben, bekannt für ihre Innovation und Effektivität.'
    },
    callToAction: {
      title: 'Benötigen Sie eine maßgeschneiderte Softwarelösung?',
      description:
        'Wenn Sie eine technologische Lösung suchen, die genau auf die Bedürfnisse Ihres Unternehmens zugeschnitten ist, lassen Sie uns sprechen und die perfekte Lösung für Sie entwickeln!',
      textButton: 'Fordern Sie eine Beratung an'
    }
  }
})
