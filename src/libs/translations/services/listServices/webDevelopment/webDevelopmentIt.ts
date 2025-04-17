import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Sviluppo Web',
  descriptionLite:
    'Creiamo siti web moderni, sicuri e ad alte prestazioni, progettati per distinguersi, attirare e convertire in un ambiente digitale altamente competitivo.',
  path: `${servicesMenu.path}/sviluppo-web`,
  slug: 'sviluppo-web',
  pageSections: {
    metaTag: {
      title: `Sviluppo Web | ${COMPANY_NAME}`,
      description:
        "Creiamo siti web su misura per le tue esigenze, con un focus su prestazioni, sicurezza e usabilità per distinguersi nell'ambiente digitale.",
      keywords: [
        'sviluppo web',
        'siti web',
        'pagine web',
        'design web responsivo',
        'sviluppo su misura',
        'ottimizzazione web',
        'design web adattivo',
        'tecnologia web moderna'
      ],
      ogTitle: `Sviluppo Web | ${COMPANY_NAME}`,
      ogDescription:
        "Potenzia la tua presenza online con siti web ottimizzati e progettati per un'esperienza utente, alte prestazioni e accessibilità.",
      ogImage: coverImage,
      twitterTitle: `Sviluppo Web | ${COMPANY_NAME}`,
      twitterDescription:
        "Sviluppiamo siti web ad alte prestazioni che migliorano l'esperienza utente e massimizzano l'impatto digitale della tua attività.",
      twitterImage: coverImage
    },
    hero: {
      title: 'Sviluppo Web Professionale',
      description:
        'Potenzia la tua presenza online con siti web personalizzati, progettati per velocità, sicurezza e prestazioni, utilizzando le ultime tendenze e tecnologie dello sviluppo web moderno.'
    },
    description: {
      title: 'Soluzioni Web Su Misura per la Tua Azienda',
      description:
        "Dalla definizione dei requisiti al deployment finale, creiamo esperienze web intuitive, robuste ed scalabili. Utilizziamo metodologie agili e strumenti moderni per garantire che il tuo progetto abbia una base solida sin dall'inizio.",
      description2:
        "Il nostro approccio si basa sull'eccellenza tecnica, l'accessibilità e l'efficienza. Che si tratti di una landing page o di un sistema web complesso, ci assicuriamo che il tuo sito funzioni perfettamente e sia pronto a crescere insieme alla tua azienda."
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Siti Web Ad Alte Prestazioni',
          description:
            'Ottimizziamo ogni aspetto tecnico per ottenere tempi di caricamento ridotti, una buona esperienza utente e risultati solidi da qualsiasi dispositivo.'
        },
        {
          title: 'Design Adattivo',
          description:
            "Il tuo sito avrà un aspetto perfetto su schermi di qualsiasi dimensione, garantendo un'esperienza coerente da computer a dispositivi mobili."
        },
        {
          title: 'Ottimizzazione delle Risorse',
          description:
            'Riduciamo il peso delle immagini e dei file con tecniche di compressione avanzate, senza compromettere la qualità visiva o la funzionalità.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Pianificazione Strategica',
        description:
          'Definiamo insieme a te gli obiettivi del progetto, le funzionalità chiave e una roadmap chiara per lo sviluppo.'
      },
      {
        title: 'Progettazione e Prototipazione',
        description:
          'Creiamo wireframe o prototipi funzionali che servono come guida visiva per strutturare lo sviluppo e convalidare le idee prima della codifica.'
      },
      {
        title: 'Sviluppo e Validazione',
        description:
          'Implementiamo il sito utilizzando strumenti moderni e conduciamo test approfonditi per garantire prestazioni, compatibilità e stabilità.'
      },
      {
        title: 'Deploy e Supporto',
        description:
          "Pubbliciamo il tuo sito nell'ambiente di produzione e, se lo desideri, offriamo un piano di supporto mensile per mantenerlo aggiornato, sicuro e funzionale."
      }
    ],
    recentWorks: {
      title: 'Progetti Recenti',
      description:
        'Scopri alcuni progetti recenti che mostrano come combiniamo strategia, tecnologia e esecuzione per ottenere risultati web eccezionali.'
    },
    callToAction: {
      title: 'Pronto a Sviluppare il Tuo Prossimo Progetto Web?',
      description:
        'Parliamo delle tue necessità e scopri come possiamo aiutarti a costruire una soluzione web efficace, scalabile e su misura per la tua azienda.',
      textButton: 'Parliamo del tuo progetto'
    }
  }
})
