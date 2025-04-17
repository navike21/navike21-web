import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Applications Mobiles',
  descriptionLite:
    'Nous développons des applications personnalisées pour Android et iOS, conçues pour offrir des expériences fluides et modernes.',
  path: `${servicesMenu.path}/applications-mobiles`,
  slug: 'applications-mobiles',
  pageSections: {
    metaTag: {
      title: `Développement d'Applications Mobiles | ${COMPANY_NAME}`,
      description:
        'Nous créons des applications personnalisées pour Android et iOS qui allient performance, design moderne et excellente expérience utilisateur.',
      keywords: [
        "développement d'applications mobiles",
        'applications personnalisées',
        'React Native',
        'Flutter',
        'applications Android',
        'applications iOS',
        'UX/UI mobile',
        'publication App Store',
        'développement multiplateforme'
      ],
      ogTitle: `Applications Mobiles Personnalisées | ${COMPANY_NAME}`,
      ogDescription:
        'Transformez votre idée en une application fonctionnelle, moderne et évolutive. Nous créons des applications mobiles pour Android et iOS avec un design et une performance exceptionnels.',
      ogImage: coverImage,
      twitterTitle: `Applications Mobiles Personnalisées | ${COMPANY_NAME}`,
      twitterDescription:
        "Nous créons des applications pour Android et iOS axées sur l'expérience utilisateur, la vitesse et la qualité. Lancez votre application avec nous.",
      twitterImage: coverImage
    },

    hero: {
      title:
        "Des Apps qui Plaçent Votre Entreprise dans la Poche de l'Utilisateur",
      description:
        'Nous créons des applications mobiles personnalisées qui allient performance, design attrayant et expérience utilisateur impeccable.'
    },
    description: {
      title: 'Solutions Mobiles Sur Mesure',
      description:
        "Nous analysons vos besoins, concevons des flux efficaces et développons une application axée sur la scalabilité, l'utilisabilité et l'efficacité.",
      description2:
        "Des applications pour services internes aux produits commerciaux, nous vous accompagnons tout au long du processus d'idéation, de conception et de développement."
    },
    features: {
      title: "Qu'est-ce qui est Inclus dans Notre Service ?",
      items: [
        {
          title: 'Conception UX/UI Mobile',
          description:
            "Nous créons l'interface visuelle et l'expérience utilisateur avec un focus sur l'accessibilité et la simplicité."
        },
        {
          title: 'Développement Natif ou Multiplateforme',
          description:
            'Nous sélectionnons la meilleure technologie pour votre projet : React Native, Flutter ou développement natif si nécessaire.'
        },
        {
          title: 'Intégration avec APIs et Backends',
          description:
            "Nous connectons l'application à votre système existant ou en créons un nouveau, en intégrant des services cloud, des bases de données ou des passerelles de paiement."
        },
        {
          title: 'Tests et Contrôle de Qualité',
          description:
            "Nous effectuons des tests fonctionnels et de performance pour garantir que l'application fonctionne sur différents appareils et scénarios."
        },
        {
          title: 'Publication sur les Magasins',
          description:
            "Nous vous guidons ou effectuons le processus de téléchargement et de publication de l'application sur Google Play Store et App Store."
        }
      ]
    },
    flowWork: [
      {
        title: 'Exploration et Analyse',
        description:
          "Nous identifions les objectifs du projet, comprenons les flux d'affaires et proposons une solution mobile adaptée."
      },
      {
        title: 'Prototypage UX/UI',
        description:
          'Nous concevons une interface fonctionnelle et attractive avec une approche mobile-first et une validation continue.'
      },
      {
        title: "Développement de l'Application",
        description:
          "Nous programmons l'application avec des technologies modernes, garantissant scalabilité, vitesse et performance."
      },
      {
        title: 'Tests et Livraison',
        description:
          "Nous réalisons des tests dans divers environnements, corrigeons les erreurs et vous livrons l'application prête pour la publication."
      }
    ],
    recentWorks: {
      title: 'Des Apps qui Transforment les Expériences',
      description:
        'Nous avons travaillé sur des solutions mobiles qui connectent les utilisateurs aux marques, produits et services de manière efficace.'
    },
    callToAction: {
      title: 'Prêt à Avoir Votre Propre Application ?',
      description:
        'Transformez votre idée en une application fonctionnelle, rapide et moderne. Parlons de ce que vous souhaitez construire.',
      textButton: 'Je veux mon application personnalisée'
    }
  }
})
