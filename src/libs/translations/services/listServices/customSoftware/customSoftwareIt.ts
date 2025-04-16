import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Software su Misura',
  descriptionLite:
    'Sviluppiamo soluzioni software personalizzate per soddisfare le esigenze uniche della tua azienda, migliorandone l’efficienza e la competitività.',
  path: `${servicesMenu.path}/software-su-misura`,
  slug: 'software-su-misura',
  pageSections: {
    metaTag: {
      title: `Sviluppo Software su Misura | ${COMPANY_NAME}`,
      description:
        'Realizziamo software personalizzati progettati per adattarsi perfettamente alle esigenze della tua azienda, migliorando processi, scalabilità e competitività.',
      keywords: [
        'software su misura',
        'sviluppo personalizzato',
        'soluzioni aziendali',
        'applicazioni personalizzate',
        'software aziendale',
        'sviluppo software',
        'sistemi su misura',
        'sviluppo specifico'
      ],
      ogTitle: `Sviluppo Software su Misura | ${COMPANY_NAME}`,
      ogDescription:
        'Realizziamo software personalizzati adatti alla tua azienda per migliorare i processi e supportare la crescita.',
      ogImage: coverImage,
      twitterTitle: `Software Personalizzato per Aziende | ${COMPANY_NAME}`,
      twitterDescription:
        'Soluzioni tecnologiche su misura che si adattano ai tuoi processi e crescono con te.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Soluzioni Software su Misura',
      description:
        'Sviluppiamo software personalizzati per ottimizzare i tuoi processi aziendali, adattandoli alle esigenze specifiche con soluzioni scalabili e sicure.'
    },
    description: {
      title: 'Software Personalizzato per la Tua Azienda',
      description:
        'Che si tratti di un’app desktop, mobile o di una soluzione aziendale completa, creiamo software che ottimizzano le operazioni, si integrano con i tuoi sistemi e offrono valore immediato.',
      description2:
        'Il nostro approccio agile e flessibile garantisce la consegna di prodotti software efficaci e mantenibili, sempre in linea con la tua visione aziendale.'
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Architettura Personalizzata',
          description:
            'Progettiamo l’architettura del software pensando a scalabilità, sicurezza e prestazioni a lungo termine, adattandola alle specifiche esigenze del tuo business.'
        },
        {
          title: 'Sviluppo Full Stack',
          description:
            'I nostri team specializzati in frontend, backend e mobile utilizzano tecnologie come React, Node.js, .NET, Java, Python e molte altre per fornire soluzioni complete.'
        },
        {
          title: 'Integrazione e API',
          description:
            'Realizziamo solide integrazioni tra sistemi e servizi tramite API, affinché il tuo software comunichi efficacemente con altre piattaforme e applicazioni.'
        },
        {
          title: 'Test e Quality Assurance',
          description:
            'Il nostro team QA esegue test approfonditi su funzionalità, prestazioni e sicurezza, garantendo che ogni componente soddisfi i più alti standard di qualità.'
        },
        {
          title: 'Tecnologie Cloud',
          description:
            'Utilizziamo piattaforme cloud come AWS, Azure e Google Cloud per garantire disponibilità, scalabilità e sicurezza della tua applicazione, ottimizzando costi e risorse.'
        },
        {
          title: 'Metodo Agile',
          description:
            'Adottiamo metodologie agili come Scrum, con uno Scrum Master che facilita lo sviluppo garantendo una consegna continua di valore e coerenza con gli obiettivi aziendali.'
        },
        {
          title: 'Formazione Personalizzata',
          description:
            'Forniamo una formazione completa al team del cliente per permettere l’utilizzo efficace del software e la comprensione del suo funzionamento e manutenzione di base.'
        },
        {
          title: 'Supporto Post-Progetto (Servizio Aggiuntivo)',
          description:
            'Il supporto post-lancio non è incluso nel pacchetto base e viene offerto come servizio aggiuntivo. Include assistenza tecnica, aggiornamenti e ottimizzazioni del software.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Definizione dei Requisiti',
        description:
          'Collaboriamo con te per comprendere le esigenze aziendali e definire chiaramente gli obiettivi del software, coinvolgendo tutti gli stakeholder nella pianificazione.'
      },
      {
        title: 'Architettura e Progettazione del Sistema',
        description:
          'I nostri architetti definiscono l’architettura tecnica, selezionando tecnologie e strumenti ideali per creare una soluzione scalabile, sicura ed efficiente.'
      },
      {
        title: 'Sviluppo Frontend e Backend',
        description:
          'I nostri sviluppatori frontend e backend lavorano insieme per creare un’applicazione con interfaccia intuitiva e server robusti e scalabili.'
      },
      {
        title: 'Integrazione e Test Continuo',
        description:
          'Implementiamo integrazione continua e test automatizzati per garantire che ogni componente funzioni sin dall’inizio. La qualità è sempre al primo posto.'
      },
      {
        title: 'Deploy e Monitoraggio',
        description:
          'Distribuiamo il software in ambienti di produzione tramite strumenti cloud (AWS, Azure, Google Cloud) e monitoriamo costantemente per garantirne stabilità e prestazioni.'
      },
      {
        title: 'Formazione e Consegna del Progetto',
        description:
          'Forniamo una formazione dettagliata al team del cliente per permettere l’utilizzo autonomo e la gestione base del software.'
      },
      {
        title: 'Supporto Continuo e Manutenzione (Servizio Aggiuntivo)',
        description:
          'Il supporto continuo è disponibile come servizio aggiuntivo e include aggiornamenti, correzioni, ottimizzazione delle prestazioni e miglioramenti funzionali in base alle necessità.'
      }
    ],
    recentWorks: {
      title: 'Progetti Realizzati',
      description:
        'Dai un’occhiata ad alcuni dei software che abbiamo sviluppato per aziende di diversi settori, combinando innovazione e efficienza.'
    },
    callToAction: {
      title: 'Hai Bisogno di un Software su Misura?',
      description:
        'Cerchi una soluzione tecnologica perfettamente adattata al tuo business? Parliamone e costruiamo insieme lo strumento ideale.',
      textButton: 'Richiedi una Consulenza'
    }
  }
})
