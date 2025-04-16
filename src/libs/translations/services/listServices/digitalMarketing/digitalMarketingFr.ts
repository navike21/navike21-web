import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Marketing Numérique',
  descriptionLite:
    "Nous propulsons votre marque dans l'espace numérique avec des stratégies personnalisées, une publicité efficace et une forte présence sur les réseaux sociaux.",
  path: `${servicesMenu.path}/marketing-numerique`,
  slug: 'marketing-numerique',
  pageSections: {
    metaTag: {
      title: `Marketing Numérique | Stratégies et Publicité en Ligne | ${COMPANY_NAME}`,
      description:
        'Boostez votre marque avec des stratégies de marketing numérique, des campagnes payantes, les réseaux sociaux et du contenu optimisé. Résultats mesurables avec navike21.',
      ogTitle: `Marketing Numérique | Stratégies et Publicité en Ligne | ${COMPANY_NAME}`,
      ogDescription:
        'Améliorez votre présence en ligne avec des campagnes personnalisées, les réseaux sociaux et des publicités efficaces. Résultats réels avec navike21.',
      ogImage: coverImage,
      twitterTitle: `Marketing Numérique | Stratégies en Ligne | ${COMPANY_NAME}`,
      twitterDescription:
        'Campagnes numériques, réseaux sociaux et publicité en ligne qui génèrent des résultats. Découvrez ce que navike21 peut faire pour votre marque.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Stratégies Numériques Qui Génèrent des Résultats',
      description:
        'Nous concevons et exécutons des campagnes numériques alignées sur les objectifs de votre entreprise, optimisant votre visibilité en ligne et attirant les bons clients.'
    },
    description: {
      title: 'Marketing Personnalisé pour Votre Entreprise',
      description:
        "Nous analysons votre situation actuelle et créons un plan stratégique de marketing numérique adapté à vos objectifs, budget et audience. Nous nous concentrons sur la création d'un impact réel et mesurable.",
      description2:
        'Nous devenons votre partenaire dans la croissance numérique, en surveillant constamment les campagnes et en ajustant les stratégies nécessaires pour maximiser votre retour sur investissement (ROI).'
    },
    features: {
      title: 'Que Comprend Notre Service ?',
      items: [
        {
          title: 'Publicité sur les Plateformes Numériques',
          description:
            'Nous gérons des campagnes payantes sur Google Ads, Meta Ads, TikTok Ads et plus, optimisées pour attirer un trafic de qualité et générer des conversions.'
        },
        {
          title: 'Gestion des Réseaux Sociaux',
          description:
            'Nous créons des stratégies de contenu et gérons vos comptes pour construire une communauté fidèle et renforcer votre présence numérique.'
        },
        {
          title: 'Création de Contenu',
          description:
            "Nous concevons des éléments graphiques et rédigeons des textes persuasifs qui connectent avec votre public à chaque étape de l'entonnoir de conversion."
        },
        {
          title: 'Installation de Pixels et Outils de Mesure',
          description:
            'Nous configurons des pixels de suivi pour Facebook, TikTok, Google Ads et Adobe afin de mesurer précisément la performance de vos campagnes.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnostic et Objectifs',
        description:
          'Nous évaluons votre présence actuelle et définissons des objectifs clairs de marketing numérique en fonction de votre entreprise.'
      },
      {
        title: 'Planification Stratégique',
        description:
          "Nous créons un plan d'action détaillé définissant les plateformes à utiliser, les types de contenu, l'investissement et le calendrier des campagnes."
      },
      {
        title: 'Exécution des Campagnes',
        description:
          'Nous lançons les campagnes avec une exécution professionnelle, garantissant une segmentation et une créativité adaptées.'
      },
      {
        title: 'Mesure et Optimisation',
        description:
          'Nous surveillons les résultats et ajustons en temps réel pour maximiser les performances et atteindre les objectifs fixés.'
      }
    ],
    recentWorks: {
      title: 'Campagnes Qui Font la Différence',
      description:
        'Découvrez des cas où nos stratégies numériques ont renforcé la présence en ligne de marques dans différents secteurs.'
    },
    callToAction: {
      title: 'Prêt à Propulser Votre Marque ?',
      description:
        'Discutons de vos objectifs et créons ensemble une stratégie de marketing numérique qui booste vos résultats.',
      textButton: 'Je veux améliorer mon marketing'
    }
  }
})
