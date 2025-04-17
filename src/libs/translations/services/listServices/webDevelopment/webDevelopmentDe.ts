import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Web-Entwicklung',
  descriptionLite:
    'Wir erstellen moderne, sichere und leistungsstarke Websites, die darauf ausgelegt sind, sich abzuheben, zu begeistern und in einer hochgradig wettbewerbsintensiven digitalen Umgebung zu konvertieren.',
  path: `${servicesMenu.path}/web-entwicklung`,
  slug: 'web-entwicklung',
  pageSections: {
    metaTag: {
      title: `Web-Entwicklung | ${COMPANY_NAME}`,
      description:
        'Wir erstellen Websites, die auf Ihre Bedürfnisse zugeschnitten sind, mit einem Fokus auf Leistung, Sicherheit und Benutzerfreundlichkeit, um in der digitalen Welt hervorzuheben.',
      keywords: [
        'Web-Entwicklung',
        'Websites',
        'Webseiten',
        'Responsive Webdesign',
        'maßgeschneiderte Entwicklung',
        'Weboptimierung',
        'adaptive Webgestaltung',
        'moderne Webtechnologie'
      ],
      ogTitle: `Web-Entwicklung | ${COMPANY_NAME}`,
      ogDescription:
        'Steigern Sie Ihre Online-Präsenz mit optimierten Websites, die auf Benutzererfahrung, hohe Leistung und Zugänglichkeit ausgelegt sind.',
      ogImage: coverImage,
      twitterTitle: `Web-Entwicklung | ${COMPANY_NAME}`,
      twitterDescription:
        'Wir entwickeln leistungsstarke Websites, die das Benutzererlebnis verbessern und den digitalen Einfluss Ihres Unternehmens maximieren.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Professionelle Web-Entwicklung',
      description:
        'Steigern Sie Ihre Online-Präsenz mit maßgeschneiderten Websites, die auf Geschwindigkeit, Sicherheit und Leistung ausgelegt sind und die neuesten Trends und Technologien der modernen Web-Entwicklung verwenden.'
    },
    description: {
      title: 'Web-Lösungen, die auf Ihr Geschäft zugeschnitten sind',
      description:
        'Von der Anforderungsdefinition bis zum endgültigen Deployment erstellen wir intuitive, robuste und skalierbare Web-Erlebnisse. Wir nutzen agile Methoden und moderne Werkzeuge, damit Ihr Projekt von Anfang an eine solide Grundlage hat.',
      description2:
        'Unser Ansatz basiert auf technischer Exzellenz, Zugänglichkeit und Effizienz. Ob Landingpage oder komplexes Web-System, wir stellen sicher, dass Ihre Website einwandfrei funktioniert und mit Ihrem Geschäft wachsen kann.'
    },
    features: {
      title: 'Was beinhaltet unser Service?',
      items: [
        {
          title: 'Hochleistungs-Websites',
          description:
            'Wir optimieren jeden technischen Aspekt, um minimale Ladezeiten, eine gute Benutzererfahrung und stabile Ergebnisse auf jedem Gerät zu erzielen.'
        },
        {
          title: 'Responsive Design',
          description:
            'Ihre Website wird auf allen Bildschirmgrößen perfekt aussehen und eine konsistente Erfahrung von Desktops bis zu mobilen Geräten bieten.'
        },
        {
          title: 'Ressourcenoptimierung',
          description:
            'Wir reduzieren das Gewicht von Bildern und Dateien mit fortschrittlichen Kompressionstechniken, ohne die visuelle Qualität oder Funktionalität zu beeinträchtigen.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Strategische Planung',
        description:
          'Wir definieren gemeinsam mit Ihnen die Projektziele, die wichtigsten Funktionen und eine klare Roadmap für die Entwicklung.'
      },
      {
        title: 'Design und Prototyping',
        description:
          'Wir erstellen Wireframes oder funktionale Prototypen, die als visuelle Leitfäden dienen, um die Entwicklung zu strukturieren und Ideen vor der Kodierung zu validieren.'
      },
      {
        title: 'Entwicklung und Validierung',
        description:
          'Wir implementieren die Website mit modernen Tools und führen gründliche Tests durch, um Leistung, Kompatibilität und Stabilität zu gewährleisten.'
      },
      {
        title: 'Deployment und Support',
        description:
          'Wir veröffentlichen Ihre Website in der Produktionsumgebung und bieten, wenn gewünscht, einen monatlichen Support-Plan an, um sie aktuell, sicher und funktional zu halten.'
      }
    ],
    recentWorks: {
      title: 'Abgeschlossene Projekte',
      description:
        'Erfahren Sie mehr über einige unserer jüngsten Projekte, die zeigen, wie wir Strategie, Technologie und Umsetzung kombinieren, um herausragende Web-Ergebnisse zu liefern.'
    },
    callToAction: {
      title: 'Bereit, Ihr nächstes Web-Projekt zu entwickeln?',
      description:
        'Lassen Sie uns über Ihre Bedürfnisse sprechen und herausfinden, wie wir Ihnen helfen können, eine effektive, skalierbare und auf Ihr Unternehmen zugeschnittene Web-Lösung zu erstellen.',
      textButton: 'Lassen Sie uns über Ihr Projekt sprechen'
    }
  }
})
