import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Email Marketing',
  descriptionLite:
    'Connettiti direttamente ed efficacemente con i tuoi clienti tramite campagne personalizzate via e-mail.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Email Marketing | Campagne Efficaci | ${COMPANY_NAME}`,
      description:
        'Progettiamo e sviluppiamo campagne di email marketing personalizzate con HTML responsive, automazione e segmentazione precisa per massimizzare i risultati.',
      ogTitle: `Email Marketing | Campagne Efficaci | ${COMPANY_NAME}`,
      ogDescription:
        'Rafforza la tua comunicazione con campagne email ben progettate, automatizzate e segmentate per connetterti con il tuo pubblico al momento giusto.',
      ogImage: coverImage,
      twitterTitle: `Email Marketing | Strategie Personalizzate | ${COMPANY_NAME}`,
      twitterDescription:
        'Crea campagne di email marketing che convertono: design visivo, sviluppo HTML responsive, automazione e segmentazione intelligente.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Campagne Email che Connettono e Convincano',
      description:
        'Creiamo strategie di email marketing con design accattivanti e segmentazione precisa per migliorare la tua comunicazione e fidelizzazione.'
    },
    description: {
      title: 'Messaggi che Arrivano, Design che Colpiscono',
      description:
        'Ci occupiamo della progettazione e dello sviluppo HTML per le tue campagne, garantendo compatibilità su tutti i dispositivi e client di posta.',
      description2:
        'Inoltre, implementiamo strategie automatizzate e segmentate utilizzando piattaforme come Mailchimp, assicurandoci che ogni messaggio arrivi al pubblico giusto al momento giusto.'
    },
    features: {
      title: 'Cosa Comprende il Nostro Servizio?',
      items: [
        {
          title: 'Progettazione e Layout delle E-mail',
          description:
            'Progettiamo elementi visivi allineati al tuo marchio e li sviluppiamo in HTML ottimizzato per tutti i dispositivi e client di posta.'
        },
        {
          title: 'Configurazione delle Piattaforme',
          description:
            'Implementiamo e configuriamo strumenti come Mailchimp per centralizzare le tue campagne e i tuoi contatti.'
        },
        {
          title: 'Automazione dei Flussi',
          description:
            'Creiamo flussi automatizzati come email di benvenuto, carrelli abbandonati o newsletter ricorrenti per mantenere il contatto con il tuo pubblico.'
        },
        {
          title: 'Segmentazione del Pubblico',
          description:
            'Segmentiamo le tue liste di contatti in base al comportamento, agli interessi o ai dati demografici per migliorare il tasso di apertura e conversione.'
        },
        {
          title: 'Misurazione e Report',
          description:
            'Analizziamo le performance di ogni campagna (aperture, clic, conversioni) per ottimizzare gli invii futuri.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Brief di Comunicazione',
        description:
          'Definiamo obiettivi, tono, frequenza e tipo di contenuto da inviare in base alla tua strategia commerciale.'
      },
      {
        title: "Progettazione e Sviluppo dell'E-mail",
        description:
          'Creiamo il design visivo e lo sviluppiamo in HTML responsive per garantire una corretta visualizzazione.'
      },
      {
        title: 'Implementazione in Mailchimp',
        description:
          "Carichiamo e configuriamo la campagna, segmentiamo il pubblico e prepariamo l'invio o l'automazione."
      },
      {
        title: 'Invio, Misurazione e Ottimizzazione',
        description:
          'Lanciamo la campagna, misuriamo i risultati e facciamo miglioramenti continui per aumentare la sua efficacia.'
      }
    ],
    recentWorks: {
      title: 'Campagne ad Alto Impatto',
      description:
        'Esplora alcuni dei nostri design di email marketing che hanno ottenuto alti tassi di apertura e conversione.'
    },
    callToAction: {
      title: 'Vuoi Comunicare Meglio con il Tuo Pubblico?',
      description:
        'Creiamo email visive, funzionali e con risultati. Iniziamo subito la tua prossima campagna di Email Marketing.',
      textButton: 'Voglio una campagna efficace'
    }
  }
})
