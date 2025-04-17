import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'Optimisation SEO',
  descriptionLite:
    'Nous améliorons la visibilité de votre site web sur les moteurs de recherche pour attirer plus de trafic organique de qualité.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `Optimisation SEO | ${COMPANY_NAME}`,
      description:
        'Nous améliorons la visibilité de votre site web sur les moteurs de recherche pour attirer plus de trafic organique de qualité.',
      keywords: [
        'SEO',
        'optimisation pour les moteurs de recherche',
        'référencement web',
        'SEO technique',
        'SEO on-page',
        'analyse de mots-clés',
        'SEO local',
        'rapports SEO'
      ],
      ogTitle: `Optimisation SEO | ${COMPANY_NAME}`,
      ogDescription:
        'Nous améliorons le positionnement de votre site web pour qu’il apparaisse dans les premiers résultats des moteurs de recherche.',
      ogImage: coverImage,
      twitterTitle: `Optimisation SEO | ${COMPANY_NAME}`,
      twitterDescription:
        'Augmentez votre visibilité en ligne et attirez plus de trafic organique grâce à nos services SEO personnalisés.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Soyez Trouvé en Premier',
      description:
        'Nous optimisons votre présence en ligne pour que vos produits ou services apparaissent en tête des résultats de recherche.'
    },
    description: {
      title: 'SEO Technique et de Contenu',
      description:
        'Nous auditons et améliorons les performances techniques de votre site tout en optimisant le contenu avec des mots-clés pertinents.',
      description2:
        'Notre objectif est d’augmenter le trafic organique et d’améliorer le positionnement de votre marque sur les moteurs de recherche comme Google.'
    },
    features: {
      title: 'Que Comprend Notre Service ?',
      items: [
        {
          title: 'Audit Technique SEO',
          description:
            'Nous analysons l’état technique de votre site : vitesse, structure, balises, URL, redirections, indexation, etc.'
        },
        {
          title: 'Optimisation On-Page',
          description:
            'Nous améliorons les titres, les meta-descriptions, la structure des en-têtes et le maillage interne selon les bonnes pratiques.'
        },
        {
          title: 'Analyse de Mots-Clés',
          description:
            'Nous identifions les recherches les plus pertinentes pour votre activité et les intégrons naturellement dans votre contenu.'
        },
        {
          title: 'SEO Local (optionnel)',
          description:
            'Si votre entreprise est locale, nous renforçons votre présence sur les cartes, les annuaires et dans les résultats de recherche géolocalisés.'
        },
        {
          title: 'Suivi et Rapports',
          description:
            'Nous fournissons des rapports avec des métriques clés telles que le trafic organique, le positionnement des mots-clés et l’évolution du site.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnostic Initial',
        description:
          'Nous analysons votre site et identifions les problèmes techniques, de contenu et les opportunités d’amélioration.'
      },
      {
        title: 'Stratégie SEO',
        description:
          'Nous concevons un plan adapté à votre type d’entreprise, à votre marché cible et aux recherches pertinentes.'
      },
      {
        title: 'Optimisation Continue',
        description:
          'Nous mettons en œuvre des améliorations techniques et de contenu, en suivant les résultats et en ajustant la stratégie si nécessaire.'
      },
      {
        title: 'Livraison des Résultats',
        description:
          'Nous vous présentons l’évolution du SEO à travers des rapports clairs, axés sur le retour sur investissement et la croissance.'
      }
    ],
    recentWorks: {
      title: 'Projets avec un Référencement Réel',
      description:
        'Nous avons aidé des entreprises à améliorer leur positionnement dans les résultats de recherche et à augmenter leur trafic sans dépendre uniquement de la publicité payante.'
    },
    callToAction: {
      title: 'Faites Travailler Votre Site Web pour Vous',
      description:
        'Augmentez votre visibilité sur Google et attirez plus de clients grâce à une stratégie SEO sur mesure.',
      textButton: 'Je veux mieux me positionner'
    }
  }
})
