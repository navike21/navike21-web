import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Email Marketing',
  descriptionLite:
    'Connectez-vous directement et efficacement avec vos clients via des campagnes personnalisées par e-mail.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Email Marketing | Campagnes Efficaces | ${COMPANY_NAME}`,
      description:
        'Nous concevons et développons des campagnes de marketing par e-mail personnalisées avec HTML responsive, automatisation et segmentation précise pour maximiser les résultats.',
      ogTitle: `Email Marketing | Campagnes Efficaces | ${COMPANY_NAME}`,
      ogDescription:
        'Boostez votre communication avec des campagnes par e-mail bien conçues, automatisées et segmentées pour vous connecter avec votre audience au bon moment.',
      ogImage: coverImage,
      twitterTitle: `Email Marketing | Stratégies Personnalisées | ${COMPANY_NAME}`,
      twitterDescription:
        'Créez des campagnes par e-mail qui convertissent : design visuel, développement HTML responsive, automatisation et segmentation intelligente.',
      twitterImage: coverImage
    },
    hero: {
      title: "Campagnes d'E-mails qui Connectent et Convainquent",
      description:
        'Nous créons des stratégies de marketing par e-mail avec des designs percutants et une segmentation précise pour améliorer votre communication et fidélisation.'
    },
    description: {
      title: 'Messages qui Arrivent, Designs qui Marquent',
      description:
        'Nous nous chargeons de la conception et du développement HTML pour vos campagnes, garantissant la compatibilité sur tous les appareils et clients de messagerie.',
      description2:
        'De plus, nous mettons en place des stratégies automatisées et segmentées en utilisant des plateformes comme Mailchimp, garantissant que chaque message atteigne le bon public au bon moment.'
    },
    features: {
      title: 'Que Comprend Notre Service ?',
      items: [
        {
          title: 'Conception et Mise en Page des E-mails',
          description:
            'Nous concevons des éléments visuels alignés avec votre marque et les développons en HTML optimisé pour tous les appareils et clients de messagerie.'
        },
        {
          title: 'Configuration des Plateformes',
          description:
            'Nous implémentons et configurons des outils comme Mailchimp pour centraliser vos campagnes et audiences.'
        },
        {
          title: 'Automatisation des Flux',
          description:
            'Nous créons des flux automatisés comme les e-mails de bienvenue, les paniers abandonnés ou les newsletters récurrentes pour maintenir le contact avec votre audience.'
        },
        {
          title: 'Segmentation des Audiences',
          description:
            "Nous segmentons vos listes de contacts en fonction du comportement, des intérêts ou des données démographiques pour améliorer le taux d'ouverture et de conversion."
        },
        {
          title: 'Analyse et Rapports',
          description:
            'Nous analysons les performances de chaque campagne (ouvertures, clics, conversions) pour optimiser les envois futurs.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Brief de Communication',
        description:
          'Nous définissons les objectifs, le ton, la fréquence et le type de contenu à envoyer selon votre stratégie commerciale.'
      },
      {
        title: "Conception et Développement de l'E-mail",
        description:
          'Nous créons le design visuel et le développons en HTML responsive pour garantir une bonne visualisation.'
      },
      {
        title: 'Mise en Œuvre dans Mailchimp',
        description:
          "Nous téléchargeons et configurons la campagne, segmentons l'audience et préparons l'envoi ou l'automatisation."
      },
      {
        title: 'Envoi, Mesure et Optimisation',
        description:
          'Nous lançons la campagne, mesurons les résultats et procédons à des améliorations continues pour augmenter son efficacité.'
      }
    ],
    recentWorks: {
      title: 'Campagnes à Fort Impact',
      description:
        "Explorez certains de nos designs de marketing par e-mail qui ont atteint des taux d'ouverture et de conversion élevés."
    },
    callToAction: {
      title: 'Vous Souhaitez Communiquer Mieux avec Votre Audience ?',
      description:
        "Nous créons des e-mails visuels, fonctionnels et avec des résultats. Commençons dès aujourd'hui votre prochaine campagne de marketing par e-mail.",
      textButton: 'Je veux une campagne efficace'
    }
  }
})
