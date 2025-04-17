import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Développement Web',
  descriptionLite:
    'Nous créons des sites web modernes, sécurisés et performants, conçus pour se démarquer, attirer et convertir dans un environnement numérique hautement compétitif.',
  path: `${servicesMenu.path}/developpement-web`,
  slug: 'developpement-web',
  pageSections: {
    metaTag: {
      title: `Développement Web | ${COMPANY_NAME}`,
      description:
        'Nous créons des sites web adaptés à vos besoins, en mettant l’accent sur les performances, la sécurité et l’utilisabilité pour se démarquer dans le monde numérique.',
      keywords: [
        'développement web',
        'sites web',
        'pages web',
        'design web réactif',
        'développement sur mesure',
        'optimisation web',
        'design web adaptatif',
        'technologie web moderne'
      ],
      ogTitle: `Développement Web | ${COMPANY_NAME}`,
      ogDescription:
        'Boostez votre présence en ligne avec des sites web optimisés et conçus pour l’expérience utilisateur, la haute performance et l’accessibilité.',
      ogImage: coverImage,
      twitterTitle: `Développement Web | ${COMPANY_NAME}`,
      twitterDescription:
        'Nous développons des sites web performants qui améliorent l’expérience utilisateur et maximisent l’impact numérique de votre entreprise.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Développement Web Professionnel',
      description:
        'Boostez votre présence en ligne avec des sites web sur mesure, conçus pour la vitesse, la sécurité et la performance, en utilisant les dernières tendances et technologies du développement web moderne.'
    },
    description: {
      title: 'Solutions Web Adaptées à Votre Entreprise',
      description:
        'De la définition des besoins à la mise en production finale, nous créons des expériences web intuitives, robustes et évolutives. Nous utilisons des méthodologies agiles et des outils modernes pour garantir que votre projet repose sur des bases solides dès le départ.',
      description2:
        'Notre approche est axée sur l’excellence technique, l’accessibilité et l’efficacité. Qu’il s’agisse d’une page de destination ou d’un système web complexe, nous garantissons que votre site fonctionne parfaitement et est prêt à évoluer avec votre entreprise.'
    },
    features: {
      title: 'Qu’est-ce Qui Est Inclus dans Notre Service ?',
      items: [
        {
          title: 'Sites Web Performants',
          description:
            'Nous optimisons chaque aspect technique pour obtenir des temps de chargement réduits, une bonne expérience utilisateur et des résultats solides depuis n’importe quel appareil.'
        },
        {
          title: 'Design Adaptatif',
          description:
            'Votre site sera parfait sur tous les types d’écrans, garantissant une expérience cohérente des ordinateurs de bureau aux appareils mobiles.'
        },
        {
          title: 'Optimisation des Ressources',
          description:
            'Nous réduisons le poids des images et des fichiers avec des techniques de compression avancées, sans compromettre la qualité visuelle ni la fonctionnalité.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Planification Stratégique',
        description:
          'Nous définissons avec vous les objectifs du projet, les fonctionnalités clés et une feuille de route claire pour le développement.'
      },
      {
        title: 'Conception et Prototypage',
        description:
          'Nous générons des wireframes ou des prototypes fonctionnels servant de guides visuels pour structurer le développement et valider les idées avant de coder.'
      },
      {
        title: 'Développement et Validation',
        description:
          'Nous implémentons le site en utilisant des outils modernes et réalisons des tests approfondis pour assurer la performance, la compatibilité et la stabilité.'
      },
      {
        title: 'Déploiement et Support',
        description:
          'Nous publions votre site en environnement de production et, si vous le souhaitez, offrons un plan de support mensuel pour le maintenir à jour, sécurisé et fonctionnel.'
      }
    ],
    recentWorks: {
      title: 'Projets Récents',
      description:
        'Découvrez quelques projets récents qui montrent comment nous combinons stratégie, technologie et exécution pour offrir des résultats web exceptionnels.'
    },
    callToAction: {
      title: 'Prêt à Développer Votre Prochain Projet Web ?',
      description:
        'Discutons de vos besoins et découvrez comment nous pouvons vous aider à construire une solution web efficace, évolutive et adaptée à votre entreprise.',
      textButton: 'Parlons de votre projet'
    }
  }
})
