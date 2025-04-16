import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceFr = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Logiciel Sur Mesure',
  descriptionLite:
    'Nous développons des solutions logicielles personnalisées adaptées aux besoins uniques de votre entreprise, afin d’améliorer son efficacité et sa compétitivité.',
  path: `${servicesMenu.path}/logiciel-sur-mesure`,
  slug: 'logiciel-sur-mesure',
  pageSections: {
    metaTag: {
      title: `Développement de Logiciel Sur Mesure | ${COMPANY_NAME}`,
      description:
        'Nous créons des logiciels personnalisés qui s’adaptent précisément aux besoins de votre entreprise, en améliorant les processus, l’évolutivité et la compétitivité.',
      keywords: [
        'logiciel sur mesure',
        'développement personnalisé',
        'solutions d’entreprise',
        'applications sur mesure',
        'logiciel d’entreprise',
        'développement logiciel',
        'systèmes personnalisés',
        'développement spécifique'
      ],
      ogTitle: `Développement de Logiciel Sur Mesure | ${COMPANY_NAME}`,
      ogDescription:
        'Nous créons des logiciels sur mesure adaptés à votre entreprise pour améliorer les processus et assurer une montée en charge efficace.',
      ogImage: coverImage,
      twitterTitle: `Logiciel Personnalisé pour les Entreprises | ${COMPANY_NAME}`,
      twitterDescription:
        'Des solutions technologiques qui s’adaptent à vos processus et évoluent avec vous.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Solutions Logicielles Sur Mesure',
      description:
        'Nous développons des logiciels personnalisés pour optimiser vos processus métier, entièrement adaptés à vos besoins spécifiques avec des solutions évolutives et sécurisées.'
    },
    description: {
      title: 'Logiciel Personnalisé pour Votre Entreprise',
      description:
        'Qu’il s’agisse d’une application de bureau, mobile ou d’une solution d’entreprise complète, nous créons des logiciels qui optimisent vos opérations, s’intègrent à vos systèmes et apportent une valeur immédiate.',
      description2:
        'Notre approche agile et flexible nous permet de livrer des produits logiciels efficaces et maintenables, toujours alignés avec votre vision d’entreprise.'
    },
    features: {
      title: 'Que Comprend Notre Service ?',
      items: [
        {
          title: 'Architecture sur Mesure',
          description:
            'Nous concevons l’architecture logicielle en pensant à l’évolutivité, à la sécurité et aux performances à long terme, en l’adaptant aux besoins spécifiques de votre entreprise.'
        },
        {
          title: 'Développement Full Stack',
          description:
            'Nos équipes spécialisées en frontend, backend et mobile travaillent avec des technologies comme React, Node.js, .NET, Java, Python, et bien d’autres, pour livrer des solutions complètes.'
        },
        {
          title: 'Intégration et APIs',
          description:
            'Nous construisons des intégrations robustes entre les systèmes et services grâce aux APIs, permettant à votre logiciel de communiquer efficacement avec d’autres plateformes et applications.'
        },
        {
          title: 'Tests et Assurance Qualité',
          description:
            'Notre équipe QA effectue des tests approfondis sur la fonctionnalité, la performance et la sécurité, garantissant que chaque composant respecte les normes de qualité les plus élevées.'
        },
        {
          title: 'Technologies Cloud',
          description:
            'Nous utilisons des plateformes cloud comme AWS, Azure et Google Cloud pour garantir la disponibilité, l’évolutivité et la sécurité de votre application, tout en optimisant les ressources et les coûts.'
        },
        {
          title: 'Méthodologie Agile',
          description:
            'Nous adoptons des méthodologies agiles comme Scrum, avec un Scrum Master qui facilite le processus de développement, garantissant une livraison continue de valeur et une bonne adéquation aux objectifs commerciaux.'
        },
        {
          title: 'Formation Personnalisée',
          description:
            'Nous offrons une formation complète à l’équipe du client pour leur permettre d’utiliser efficacement le logiciel, de comprendre son fonctionnement et d’effectuer des tâches de maintenance de base.'
        },
        {
          title: 'Support Après-Projet (Service Supplémentaire)',
          description:
            'Le support après le lancement n’est pas inclus dans la portée standard du projet et est proposé comme service additionnel. Cela comprend un support technique continu, des mises à jour et l’optimisation du logiciel selon les besoins.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Définition des Besoins',
        description:
          'Nous collaborons avec vous pour comprendre les besoins de votre entreprise et définir clairement les objectifs du logiciel, en impliquant toutes les parties prenantes dans la planification.'
      },
      {
        title: 'Architecture et Conception du Système',
        description:
          'Nos architectes définissent l’architecture technique, choisissant les meilleures technologies et outils pour créer une solution évolutive et efficace, en tenant compte de la sécurité et des performances.'
      },
      {
        title: 'Développement Frontend et Backend',
        description:
          'Nos développeurs frontend et backend collaborent à la création de l’application, en se concentrant sur l’interface utilisateur intuitive et des serveurs robustes et évolutifs.'
      },
      {
        title: 'Intégration et Tests Continus',
        description:
          'Nous mettons en place des intégrations continues et des tests automatisés pour garantir que chaque partie du système fonctionne parfaitement dès le départ. La qualité est notre priorité.'
      },
      {
        title: 'Déploiement et Surveillance',
        description:
          'Nous déployons le logiciel dans des environnements de production via des outils cloud (AWS, Azure, Google Cloud) et assurons une surveillance constante pour garantir sa stabilité et ses performances.'
      },
      {
        title: 'Formation et Transfert de Connaissances',
        description:
          'Nous formons en détail l’équipe du client pour qu’elle puisse exploiter, gérer et assurer une maintenance de base du logiciel en toute autonomie.'
      },
      {
        title: 'Support Continu et Maintenance (Service Supplémentaire)',
        description:
          'Le support post-lancement est disponible en tant que service additionnel. Il comprend des mises à jour, des correctifs, l’optimisation des performances et des améliorations fonctionnelles selon les besoins de l’entreprise.'
      }
    ],
    recentWorks: {
      title: 'Projets Réalisés',
      description:
        'Découvrez quelques-uns des logiciels que nous avons développés pour des entreprises de divers secteurs, alliant innovation et efficacité.'
    },
    callToAction: {
      title: 'Besoin d’un Logiciel Sur Mesure ?',
      description:
        'Vous recherchez une solution technologique parfaitement adaptée à votre entreprise ? Discutons ensemble et construisons l’outil idéal pour vous.',
      textButton: 'Demander une Consultation'
    }
  }
})
