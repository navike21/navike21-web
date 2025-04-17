import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'Design UX/UI',
  descriptionLite:
    "Trasformiamo l'esperienza dei tuoi utenti attraverso interfacce attraenti, funzionali e facili da usare, concentrandoci sulla semplificazione dei flussi e sul miglioramento dell'interazione.",
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `Design UX/UI | ${COMPANY_NAME}`,
      description:
        "Trasformiamo l'esperienza dei tuoi utenti con interfacce attraenti e funzionali, semplificando i flussi e migliorando l'interazione.",
      keywords: [
        'design UX',
        'design UI',
        'esperienza utente',
        'interfaccia utente',
        'prototipi interattivi',
        'design web',
        'design responsive',
        'ottimizzazione UX/UI'
      ],
      ogTitle: `Design UX/UI | ${COMPANY_NAME}`,
      ogDescription:
        "Migliora l'esperienza dei tuoi utenti con un design UX/UI attraente e funzionale che ottimizza l'interazione con il tuo prodotto.",
      ogImage: coverImage,
      twitterTitle: `Design UX/UI | ${COMPANY_NAME}`,
      twitterDescription:
        "Trasforma l'interazione con il tuo prodotto grazie a un design UX/UI focalizzato sulla semplicità e sull'efficacia.",
      twitterImage: coverImage
    },
    hero: {
      title: 'Design UX/UI Creativo',
      description:
        "Creiamo soluzioni di design che migliorano l'esperienza dei tuoi utenti, semplificando i flussi e ottimizzando l'interazione con il tuo prodotto o servizio."
    },
    description: {
      title: 'Soluzioni UX/UI su Misura',
      description:
        "Concentrandoci sulla comprensione approfondita dei tuoi flussi aziendali, proponiamo soluzioni UX/UI che trasformano l'interazione degli utenti con il prodotto, semplificando ogni passaggio e migliorando l'esperienza complessiva.",
      description2:
        "Dalla concezione al design finale, il nostro approccio è focalizzato sulla creazione di esperienze chiare, intuitive e accessibili per l'utente finale, allineate con i tuoi obiettivi aziendali."
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Ricerca e Analisi dei Flussi',
          description:
            "Analizziamo i flussi attuali della tua azienda, identificando i punti di miglioramento e le aree di opportunità per semplificare l'esperienza dell'utente."
        },
        {
          title: 'Design di Interfacce Funzionali',
          description:
            "Creiamo interfacce visivamente attraenti che riflettono l'identità del tuo marchio e garantiscono una navigazione fluida e senza frizioni."
        },
        {
          title: 'Prototipi Interattivi',
          description:
            'Progettiamo prototipi interattivi per convalidare le soluzioni proposte prima della loro implementazione, assicurandoci che il flusso sia efficiente e facile da usare.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Ricerca e Comprensione del Business',
        description:
          "Ci immergiamo nella tua azienda per comprendere gli obiettivi e i flussi attuali, cercando come ottimizzare l'esperienza dell'utente senza perdere l'essenza del tuo prodotto."
      },
      {
        title: 'Analisi dei Flussi e Proposta di Soluzioni UX',
        description:
          "Valutiamo i flussi di lavoro e proponiamo soluzioni UX che facilitano la navigazione, eliminando le barriere e massimizzando l'efficienza in ogni interazione."
      },
      {
        title: 'Design Visivo e Prototipi',
        description:
          "Creiamo design visivi allineati con l'identità del tuo marchio e sviluppiamo prototipi interattivi per testare e perfezionare il flusso prima dell'implementazione."
      },
      {
        title: 'Validazione e Refinamento',
        description:
          'Organizziamo sessioni di validazione con gli utenti per garantire che il design proposto sia intuitivo e soddisfi le aspettative, perfezionando i dettagli in base ai feedback ricevuti.'
      }
    ],
    recentWorks: {
      title: 'Progetti Recenti',
      description:
        "Scopri alcuni dei progetti su cui abbiamo lavorato, migliorando l'esperienza dell'utente attraverso un design focalizzato sulla semplicità e sull'efficacia dei flussi."
    },
    callToAction: {
      title: "Pronto a Trasformare l'Esperienza dei Tuoi Utenti?",
      description:
        "Permettici di aiutarti a creare un'esperienza utente che semplifichi i tuoi processi e migliori l'interazione con il tuo prodotto. Parliamo di come possiamo collaborare insieme nel tuo prossimo progetto di design UX/UI.",
      textButton: 'Inizia il Tuo Progetto UX/UI'
    }
  }
})
