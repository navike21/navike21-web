import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'E-commerce',
  descriptionLite:
    'Nous créons des boutiques en ligne personnalisées, optimisées pour la conversion et adaptées aux besoins de votre entreprise, avec des solutions de paiement, de livraison et de gestion des stocks.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `E-commerce | Boutiques en ligne sur mesure | ${COMPANY_NAME}`,
      description:
        'Nous créons des boutiques en ligne sur mesure avec un design attrayant, des fonctionnalités complètes et un focus sur la conversion. Solutions avec WooCommerce ou développement personnalisé.',
      ogTitle: `E-commerce | Boutiques en ligne sur mesure | ${COMPANY_NAME}`,
      ogDescription:
        'Augmentez vos ventes avec une boutique en ligne adaptée à votre entreprise. De WooCommerce aux solutions sur mesure, nous créons des e-commerces qui vendent.',
      ogImage: coverImage,
      twitterTitle: `E-commerce | Boutiques en ligne | ${COMPANY_NAME}`,
      twitterDescription:
        'Des boutiques en ligne prêtes à évoluer. Personnalisées, fonctionnelles et axées sur la conversion. Lancez votre e-commerce avec navike21.',
      twitterImage: coverImage
    },
    hero: {
      title: 'E-commerce sur mesure',
      description:
        'Nous développons des boutiques en ligne sur mesure avec un design attrayant, une navigation intuitive et une optimisation maximale pour les ventes. Nous intégrons toutes les fonctionnalités nécessaires pour faire croître votre e-commerce.'
    },
    description: {
      title: 'Des solutions e-commerce pour votre activité',
      description:
        'De la création de la boutique en ligne à sa maintenance et optimisation, nous offrons une approche complète couvrant tous les aspects du commerce électronique. Nous veillons à ce que votre boutique soit facile à gérer et évolutive selon la croissance de votre entreprise.',
      description2:
        'Nous proposons deux types de développement e-commerce : un modèle prédéfini utilisant **WordPress et WooCommerce**, et un autre entièrement **sur mesure**. Si vous choisissez le développement personnalisé, nous recommandons un profil technique adapté, car cette solution offre plus de flexibilité et de scalabilité à long terme.'
    },
    features: {
      title: 'Que comprend notre service ?',
      items: [
        {
          title:
            'Conception et développement de boutique en ligne personnalisée',
          description:
            'Nous créons des boutiques en ligne uniques, sur mesure, avec un design attrayant, une navigation fluide et une optimisation pour la conversion, basées sur vos objectifs commerciaux.'
        },
        {
          title: 'Gestion de l’inventaire et des produits',
          description:
            'Nous développons des systèmes de gestion d’inventaire intuitifs et évolutifs permettant de gérer facilement les produits, les prix, le stock et les promotions.'
        },
        {
          title: 'Intégration des pixels Facebook, Google Ads et TikTok',
          description:
            'Nous intégrons les pixels de suivi nécessaires pour vos campagnes publicitaires sur Facebook, Google Ads et TikTok afin de mesurer et optimiser vos performances marketing.'
        },
        {
          title: 'Maintenance et mises à jour (service additionnel)',
          description:
            'Maintenance continue et mises à jour de votre boutique (ajout de fonctionnalités, mises à jour de sécurité, bases de données) proposées comme service additionnel.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Définition des besoins e-commerce',
        description:
          'Nous commençons par une consultation pour comprendre vos objectifs commerciaux, vos produits, vos clients et les attentes concernant votre boutique en ligne. Nous définissons les parcours d’achat, les moyens de paiement et les fonctionnalités nécessaires.'
      },
      {
        title: 'Design et prototypage de la boutique',
        description:
          'Nous concevons un design visuel adapté à votre marque, optimisé pour l’expérience utilisateur. Nous validons ce design avec des prototypes interactifs avant de passer au développement.'
      },
      {
        title: 'Développement de la boutique en ligne',
        description:
          'Nous construisons votre boutique avec les meilleures plateformes e-commerce (WordPress avec WooCommerce) ou, pour plus de flexibilité, nous proposons un développement entièrement sur mesure avec un profil technique adapté.'
      },
      {
        title: 'Tests et assurance qualité',
        description:
          'Nous effectuons des tests complets pour garantir que toutes les fonctionnalités (panier, paiement, gestion des produits) fonctionnent parfaitement avant le lancement.'
      },
      {
        title: 'Mise en ligne de la boutique',
        description:
          'Nous mettons votre boutique en ligne sur un serveur sécurisé et assurons des performances optimales sur tous les appareils avec un design responsive.'
      },
      {
        title: 'Formation et transfert de connaissances',
        description:
          'Nous formons votre équipe pour gérer les produits, promotions, inventaires et maintenir la boutique de manière autonome, sans dépendance technique.'
      },
      {
        title: 'Support et maintenance continue (service additionnel)',
        description:
          'Nous proposons un support technique et une maintenance continue comme service séparé : mises à jour logicielles, gestion de l’inventaire et optimisation continue.'
      }
    ],
    recentWorks: {
      title: 'Projets récents',
      description:
        'Découvrez quelques projets récents illustrant comment nous combinons stratégie, technologie et exécution pour obtenir d’excellents résultats e-commerce.'
    },
    callToAction: {
      title: 'Prêt à lancer votre boutique en ligne ?',
      description:
        'Discutons de la façon dont nous pouvons vous aider à créer une boutique e-commerce efficace, évolutive et optimisée pour convertir vos visiteurs en clients.',
      textButton: 'Démarrez votre boutique en ligne'
    }
  }
})
