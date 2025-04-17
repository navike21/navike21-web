import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingDe = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'E-Mail-Marketing',
  descriptionLite:
    'Erreiche deine Kunden direkt und effektiv mit personalisierten E-Mail-Kampagnen.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `E-Mail-Marketing | Effektive Kampagnen | ${COMPANY_NAME}`,
      description:
        'Wir entwerfen und entwickeln personalisierte E-Mail-Kampagnen mit responsivem HTML, Automatisierung und gezielter Segmentierung für maximale Ergebnisse.',
      ogTitle: `E-Mail-Marketing | Effektive Kampagnen | ${COMPANY_NAME}`,
      ogDescription:
        'Stärke deine Kommunikation mit gut gestalteten, automatisierten und segmentierten E-Mail-Kampagnen, um deine Zielgruppe im richtigen Moment zu erreichen.',
      ogImage: coverImage,
      twitterTitle: `E-Mail-Marketing | Personalisierte Strategien | ${COMPANY_NAME}`,
      twitterDescription:
        'Erstelle E-Mail-Kampagnen, die konvertieren: visuelles Design, responsives HTML, Automatisierung und intelligente Segmentierung.',
      twitterImage: coverImage
    },
    hero: {
      title: 'E-Mail-Kampagnen, die verbinden und überzeugen',
      description:
        'Wir erstellen E-Mail-Marketing-Strategien mit wirkungsvollem Design und präziser Segmentierung, um deine Kommunikation und Kundenbindung zu verbessern.'
    },
    description: {
      title: 'Botschaften, die ankommen – Designs, die beeindrucken',
      description:
        'Wir kümmern uns um das Design und die HTML-Entwicklung deiner Kampagnen und gewährleisten Kompatibilität auf allen Geräten und E-Mail-Clients.',
      description2:
        'Zusätzlich setzen wir automatisierte und segmentierte Strategien mit Tools wie Mailchimp um, damit jede Nachricht die richtige Zielgruppe zur richtigen Zeit erreicht.'
    },
    features: {
      title: 'Was beinhaltet unser Service?',
      items: [
        {
          title: 'E-Mail-Design und Layout',
          description:
            'Wir gestalten visuelle Inhalte im Einklang mit deiner Marke und entwickeln sie in optimiertem HTML für alle Geräte und E-Mail-Anbieter.'
        },
        {
          title: 'Plattform-Konfiguration',
          description:
            'Wir implementieren und konfigurieren Tools wie Mailchimp zur Verwaltung deiner Kampagnen und Zielgruppen.'
        },
        {
          title: 'Automatisierte Workflows',
          description:
            'Wir erstellen automatisierte Abläufe wie Willkommens-E-Mails, abgebrochene Warenkörbe oder regelmäßige Newsletter, um den Kontakt zu deiner Zielgruppe aufrechtzuerhalten.'
        },
        {
          title: 'Zielgruppensegmentierung',
          description:
            'Wir segmentieren deine Kontaktlisten basierend auf Verhalten, Interessen oder demografischen Daten, um Öffnungs- und Konversionsraten zu optimieren.'
        },
        {
          title: 'Analyse und Berichterstattung',
          description:
            'Wir analysieren die Performance jeder Kampagne (Öffnungen, Klicks, Conversions), um künftige E-Mails zu verbessern.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Kommunikations-Briefing',
        description:
          'Wir definieren Ziele, Tonalität, Frequenz und Art der Inhalte entsprechend deiner Geschäftsstrategie.'
      },
      {
        title: 'E-Mail-Design und Entwicklung',
        description:
          'Wir erstellen das visuelle Design und entwickeln es in responsivem HTML für optimale Darstellung.'
      },
      {
        title: 'Implementierung in Mailchimp',
        description:
          'Wir laden die Kampagne hoch, segmentieren die Zielgruppe und bereiten alles für den Versand oder die Automatisierung vor.'
      },
      {
        title: 'Versand, Analyse und Optimierung',
        description:
          'Wir starten die Kampagne, messen die Ergebnisse und optimieren sie kontinuierlich für bessere Performance.'
      }
    ],
    recentWorks: {
      title: 'Kampagnen mit hoher Wirkung',
      description:
        'Sieh dir einige unserer E-Mail-Designs an, die hohe Öffnungs- und Konversionsraten erzielt haben.'
    },
    callToAction: {
      title: 'Möchtest du deine Zielgruppe besser erreichen?',
      description:
        'Wir erstellen visuelle, funktionale E-Mails mit messbaren Ergebnissen. Starte heute deine nächste E-Mail-Kampagne.',
      textButton: 'Ich will eine effektive Kampagne'
    }
  }
})
