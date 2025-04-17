import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Applicazioni Mobili',
  descriptionLite:
    'Sviluppiamo app personalizzate per Android e iOS, pensate per offrire esperienze fluide e moderne.',
  path: `${servicesMenu.path}/applicazioni-mobili`,
  slug: 'applicazioni-mobili',
  pageSections: {
    metaTag: {
      title: `Sviluppo di Applicazioni Mobili | ${COMPANY_NAME}`,
      description:
        "Creiamo app personalizzate per Android e iOS che combinano prestazioni, design moderno e un'ottima esperienza utente.",
      keywords: [
        'sviluppo di applicazioni mobili',
        'app personalizzate',
        'React Native',
        'Flutter',
        'app Android',
        'app iOS',
        'UX/UI mobile',
        'pubblicazione App Store',
        'sviluppo multiplattaforma'
      ],
      ogTitle: `Applicazioni Mobili Personalizzate | ${COMPANY_NAME}`,
      ogDescription:
        'Trasforma la tua idea in un’app funzionale, moderna ed espandibile. Creiamo applicazioni mobili per Android e iOS con design e prestazioni eccezionali.',
      ogImage: coverImage,
      twitterTitle: `Applicazioni Mobili Personalizzate | ${COMPANY_NAME}`,
      twitterDescription:
        "Creiamo app per Android e iOS focalizzate sull'esperienza utente, velocità e qualità. Lancia la tua applicazione con noi.",
      twitterImage: coverImage
    },

    hero: {
      title: "App che Portano il Tuo Business nella Tasca dell'Utente",
      description:
        'Creiamo applicazioni mobili personalizzate che combinano prestazioni, design accattivante e un’esperienza utente impeccabile.'
    },
    description: {
      title: 'Soluzioni Mobili su Misura',
      description:
        'Analizziamo le tue necessità, progettiamo flussi efficaci e sviluppiamo un’app pensata per la scalabilità, l’usabilità e l’efficienza.',
      description2:
        'Da applicazioni per servizi interni a prodotti commerciali, ti accompagniamo in tutto il processo di ideazione, progettazione e sviluppo.'
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Design UX/UI Mobile',
          description:
            'Creiamo l’interfaccia visiva e l’esperienza utente con un focus su accessibilità e semplicità.'
        },
        {
          title: 'Sviluppo Nativo o Multiplattaforma',
          description:
            'Selezioniamo la miglior tecnologia per il progetto: React Native, Flutter o sviluppo nativo se necessario.'
        },
        {
          title: 'Integrazione con API e Backend',
          description:
            'Colleghiamo l’app al tuo sistema esistente o ne creiamo uno nuovo, integrando servizi cloud, database o gateway di pagamento.'
        },
        {
          title: 'Test e Controllo Qualità',
          description:
            'Eseguiamo test funzionali e di performance per garantire che l’app funzioni su dispositivi diversi e in scenari differenti.'
        },
        {
          title: 'Pubblicazione sugli Store',
          description:
            'Ti guidiamo o gestiamo il processo di caricamento e pubblicazione dell’app su Google Play Store e App Store.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Esplorazione e Analisi',
        description:
          'Identifichiamo gli obiettivi del progetto, comprendiamo i flussi aziendali e proponiamo una soluzione mobile adeguata.'
      },
      {
        title: 'Prototipazione UX/UI',
        description:
          'Progettiamo un’interfaccia funzionale e attraente con un approccio mobile-first e validazione continua.'
      },
      {
        title: "Sviluppo dell'Applicazione",
        description:
          'Programmiamo l’app con tecnologie moderne, garantendo scalabilità, velocità e prestazioni.'
      },
      {
        title: 'Test e Consegna',
        description:
          'Eseguiamo test in diversi ambienti, correggiamo gli errori e ti consegniamo l’app pronta per la pubblicazione.'
      }
    ],
    recentWorks: {
      title: 'App che Trasformano le Esperienze',
      description:
        'Abbiamo lavorato su soluzioni mobili che connettono gli utenti a marchi, prodotti e servizi in modo efficace.'
    },
    callToAction: {
      title: 'Pronto ad Avere la Tua App?',
      description:
        'Trasforma la tua idea in un’app funzionale, veloce e moderna. Parliamo di ciò che vuoi costruire.',
      textButton: 'Voglio la mia app personalizzata'
    }
  }
})
