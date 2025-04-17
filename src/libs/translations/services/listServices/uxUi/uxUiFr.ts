import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'Conception UX/UI',
  descriptionLite:
    "Nous transformons l'expérience de vos utilisateurs à travers des interfaces attrayantes, fonctionnelles et faciles à utiliser, en nous concentrant sur la simplification des flux et l'amélioration de l'interaction.",
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `Conception UX/UI | ${COMPANY_NAME}`,
      description:
        "Nous améliorons l'expérience de vos utilisateurs avec des interfaces attrayantes et fonctionnelles, simplifiant les flux et optimisant l'interaction.",
      keywords: [
        'conception UX',
        'conception UI',
        'expérience utilisateur',
        'interface utilisateur',
        'prototypes interactifs',
        'conception web',
        'conception responsive',
        'optimisation UX/UI'
      ],
      ogTitle: `Conception UX/UI | ${COMPANY_NAME}`,
      ogDescription:
        "Améliorez l'expérience de vos utilisateurs avec une conception UX/UI attrayante et fonctionnelle qui optimise l'interaction avec votre produit.",
      ogImage: coverImage,
      twitterTitle: `Conception UX/UI | ${COMPANY_NAME}`,
      twitterDescription:
        "Transformez l'interaction avec votre produit grâce à une conception UX/UI axée sur la simplicité et l'efficacité.",
      twitterImage: coverImage
    },
    hero: {
      title: 'Conception UX/UI Créative',
      description:
        "Nous créons des solutions de conception qui améliorent l'expérience de vos utilisateurs, simplifiant les flux et optimisant l'interaction avec votre produit ou service."
    },
    description: {
      title: 'Solutions UX/UI Sur-Mesure',
      description:
        "En nous concentrant sur une compréhension approfondie de vos flux commerciaux, nous proposons des solutions UX/UI qui transforment l'interaction de vos utilisateurs avec le produit, simplifiant chaque étape et améliorant l'expérience générale.",
      description2:
        "De la conception à la réalisation finale, notre approche vise à créer des expériences claires, intuitives et accessibles pour l'utilisateur final, alignées sur vos objectifs commerciaux."
    },
    features: {
      title: "Qu'inclut notre service ?",
      items: [
        {
          title: 'Recherche et Analyse des Flux',
          description:
            "Nous analysons les flux actuels de votre entreprise, identifiant les points d'amélioration et les opportunités pour simplifier l'expérience utilisateur."
        },
        {
          title: "Conception d'Interfaces Fonctionnelles",
          description:
            "Nous créons des interfaces visuellement attrayantes qui reflètent l'identité de votre marque et assurent une navigation fluide et sans friction."
        },
        {
          title: 'Prototypes Interactifs',
          description:
            'Nous concevons des prototypes interactifs pour valider les solutions proposées avant leur mise en œuvre, garantissant que le flux est efficace et facile à utiliser.'
        }
      ]
    },
    flowWork: [
      {
        title: "Recherche et Compréhension de l'Entreprise",
        description:
          "Nous plongeons dans votre entreprise pour comprendre les objectifs et les flux actuels, cherchant à optimiser l'expérience utilisateur sans perdre l'essence de votre produit."
      },
      {
        title: 'Analyse des Flux et Proposition de Solutions UX',
        description:
          "Nous évaluons les flux de travail et proposons des solutions UX qui facilitent la navigation, supprimant les barrières et maximisant l'efficacité à chaque interaction."
      },
      {
        title: 'Conception Visuelle et Prototypes',
        description:
          "Nous créons des conceptions visuelles alignées avec l'identité de votre marque et développons des prototypes interactifs pour tester et ajuster les flux avant leur mise en œuvre."
      },
      {
        title: 'Validation et Raffinement',
        description:
          'Nous réalisons des sessions de validation avec les utilisateurs pour nous assurer que la conception proposée est intuitive et répond aux attentes, affinant les détails en fonction des retours reçus.'
      }
    ],
    recentWorks: {
      title: 'Projets Récents',
      description:
        "Découvrez quelques-uns des projets sur lesquels nous avons travaillé, améliorant l'expérience utilisateur grâce à un design axé sur la simplicité et l'efficacité des flux."
    },
    callToAction: {
      title: "Prêt à Transformer l'Expérience de vos Utilisateurs ?",
      description:
        "Permettez-nous de vous aider à créer une expérience utilisateur qui simplifie vos processus et améliore l'interaction avec votre produit. Parlons de la manière dont nous pouvons travailler ensemble sur votre prochain projet de conception UX/UI.",
      textButton: 'Commencez votre projet UX/UI'
    }
  }
})
