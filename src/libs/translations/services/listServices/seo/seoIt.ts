import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'Ottimizzazione SEO',
  descriptionLite:
    'Miglioriamo la visibilità del tuo sito web nei motori di ricerca per attirare più traffico organico di qualità.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `Ottimizzazione SEO | ${COMPANY_NAME}`,
      description:
        'Miglioriamo la visibilità del tuo sito web nei motori di ricerca per attirare più traffico organico di qualità.',
      keywords: [
        'SEO',
        'ottimizzazione per i motori di ricerca',
        'posizionamento web',
        'SEO tecnico',
        'SEO on-page',
        'analisi delle parole chiave',
        'SEO locale',
        'report SEO'
      ],
      ogTitle: `Ottimizzazione SEO | ${COMPANY_NAME}`,
      ogDescription:
        'Miglioriamo il posizionamento del tuo sito web per farlo apparire tra i primi risultati sui motori di ricerca.',
      ogImage: coverImage,
      twitterTitle: `Ottimizzazione SEO | ${COMPANY_NAME}`,
      twitterDescription:
        'Aumenta la tua visibilità online e attira più traffico organico con i nostri servizi SEO personalizzati.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Fatti Trovare per Primo',
      description:
        'Ottimizziamo la tua presenza online affinché i tuoi prodotti o servizi compaiano tra i primi risultati di ricerca.'
    },
    description: {
      title: 'SEO Tecnico e dei Contenuti',
      description:
        'Ci concentriamo sull’audit e sul miglioramento delle prestazioni tecniche del tuo sito, ottimizzando allo stesso tempo i contenuti con parole chiave pertinenti.',
      description2:
        'Il nostro obiettivo è aumentare il traffico organico e migliorare il posizionamento del tuo marchio sui motori di ricerca come Google.'
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Audit Tecnico SEO',
          description:
            'Verifichiamo lo stato tecnico del tuo sito: velocità, struttura, tag, URL, reindirizzamenti, indicizzazione e altro.'
        },
        {
          title: 'Ottimizzazione On-Page',
          description:
            'Miglioriamo titoli, meta descrizioni, struttura dei titoli e collegamenti interni secondo le best practice.'
        },
        {
          title: 'Analisi delle Parole Chiave',
          description:
            'Identifichiamo le ricerche più rilevanti per il tuo business e le integriamo nel contenuto in modo naturale.'
        },
        {
          title: 'SEO Locale (opzionale)',
          description:
            'Se la tua attività è locale, miglioriamo la presenza su mappe, directory e risultati di ricerca geolocalizzati.'
        },
        {
          title: 'Monitoraggio e Report',
          description:
            'Forniamo report con metriche chiave come traffico organico, posizionamento delle parole chiave ed evoluzione del sito.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnosi Iniziale',
        description:
          'Analizziamo il tuo sito e individuiamo problemi tecnici, di contenuto e opportunità di miglioramento.'
      },
      {
        title: 'Strategia SEO',
        description:
          'Creiamo un piano focalizzato sul tipo di attività, il mercato target e le ricerche pertinenti.'
      },
      {
        title: 'Ottimizzazione Continua',
        description:
          'Applichiamo miglioramenti tecnici e di contenuto, monitorando i risultati e adattando la strategia quando necessario.'
      },
      {
        title: 'Consegna dei Risultati',
        description:
          'Ti mostriamo l’evoluzione del SEO attraverso report chiari, con focus sul ritorno e sulla crescita.'
      }
    ],
    recentWorks: {
      title: 'Progetti con Posizionamento Reale',
      description:
        'Abbiamo aiutato aziende a scalare nei risultati di ricerca e aumentare il traffico senza dipendere esclusivamente dalla pubblicità a pagamento.'
    },
    callToAction: {
      title: 'Fai Lavorare il Tuo Sito per Te',
      description:
        'Aumenta la tua visibilità su Google e attira più clienti con una strategia SEO su misura.',
      textButton: 'Voglio posizionarmi meglio'
    }
  }
})
