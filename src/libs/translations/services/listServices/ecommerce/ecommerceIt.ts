import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'E-commerce',
  descriptionLite:
    'Creiamo negozi online personalizzati, ottimizzati per la conversione e adattati alle esigenze del tuo business, con soluzioni di pagamento, spedizione e gestione dell’inventario.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `E-commerce | Negozi online su misura | ${COMPANY_NAME}`,
      description:
        'Creiamo negozi online su misura con design accattivante, funzionalità complete e focus sulla conversione. Soluzioni con WooCommerce o sviluppo personalizzato.',
      ogTitle: `E-commerce | Negozi online su misura | ${COMPANY_NAME}`,
      ogDescription:
        'Aumenta le tue vendite con un negozio online adatto al tuo business. Da WooCommerce a soluzioni su misura, creiamo e-commerce che vendono davvero.',
      ogImage: coverImage,
      twitterTitle: `E-commerce | Negozi online | ${COMPANY_NAME}`,
      twitterDescription:
        'Negozi online pronti a crescere. Personalizzati, funzionali e orientati alla conversione. Avvia il tuo e-commerce con navike21.',
      twitterImage: coverImage
    },
    hero: {
      title: 'E-commerce su misura',
      description:
        'Sviluppiamo negozi online personalizzati con design attraente, navigazione intuitiva e ottimizzazione per le vendite. Integriamo tutte le funzionalità necessarie per far crescere il tuo e-commerce.'
    },
    description: {
      title: 'Soluzioni e-commerce per il tuo business',
      description:
        'Dalla creazione del negozio alla sua manutenzione e ottimizzazione, offriamo un servizio completo che copre tutti gli aspetti dell’e-commerce. Ci assicuriamo che il tuo shop sia facile da gestire e scalabile secondo la crescita della tua attività.',
      description2:
        'Offriamo due tipi di sviluppo e-commerce: un modello predefinito usando **WordPress e WooCommerce**, e un altro completamente **personalizzato**. Se scegli lo sviluppo su misura, consigliamo un profilo tecnico, in quanto la soluzione offre più flessibilità e scalabilità nel tempo.'
    },
    features: {
      title: 'Cosa include il nostro servizio?',
      items: [
        {
          title: 'Design e sviluppo del negozio online personalizzato',
          description:
            'Creiamo negozi online unici, su misura, con design accattivante, navigazione fluida e ottimizzazione per la conversione, in base ai tuoi obiettivi aziendali.'
        },
        {
          title: 'Gestione dell’inventario e dei prodotti',
          description:
            'Sviluppiamo sistemi intuitivi e scalabili per gestire facilmente prodotti, prezzi, stock e promozioni.'
        },
        {
          title: 'Integrazione dei pixel di Facebook, Google Ads e TikTok',
          description:
            'Integriamo i pixel di tracciamento per le tue campagne pubblicitarie su Facebook, Google Ads e TikTok per misurare e ottimizzare i risultati.'
        },
        {
          title: 'Manutenzione e aggiornamenti (servizio aggiuntivo)',
          description:
            'Manutenzione continua e aggiornamenti del tuo shop (nuove funzionalità, sicurezza, database), offerti come servizio opzionale.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Definizione delle esigenze e-commerce',
        description:
          'Partiamo con una consulenza per comprendere i tuoi obiettivi, prodotti, clienti e funzionalità desiderate. Definiamo il flusso di acquisto, i metodi di pagamento e ogni dettaglio tecnico.'
      },
      {
        title: 'Design e prototipo del negozio',
        description:
          'Progettiamo un’interfaccia visiva che rispecchi la tua brand identity, ottimizzata per la user experience. Validiamo il design con prototipi prima dello sviluppo.'
      },
      {
        title: 'Sviluppo del negozio online',
        description:
          'Costruiamo il tuo shop con le migliori tecnologie (WordPress con WooCommerce) o, per massima flessibilità, sviluppo su misura con stack tecnologico dedicato.'
      },
      {
        title: 'Test e controllo qualità',
        description:
          'Eseguiamo test completi per garantire che tutte le funzionalità (carrello, pagamento, gestione prodotti) funzionino perfettamente.'
      },
      {
        title: 'Messa online del negozio',
        description:
          'Lanciamo il tuo shop su un server sicuro e ottimizzato, con performance elevate e design responsive su tutti i dispositivi.'
      },
      {
        title: 'Formazione e consegna',
        description:
          'Formiamo il tuo team nella gestione autonoma del negozio: aggiunta prodotti, promozioni, gestione inventario e altro.'
      },
      {
        title: 'Supporto e manutenzione continua (opzionale)',
        description:
          'Offriamo supporto tecnico e manutenzione come servizio extra: aggiornamenti, gestione e ottimizzazione continua.'
      }
    ],
    recentWorks: {
      title: 'Progetti recenti',
      description:
        'Dai un’occhiata ad alcuni dei nostri ultimi progetti e-commerce. Strategie, design e tecnologia che convertono davvero.'
    },
    callToAction: {
      title: 'Pronto a lanciare il tuo negozio online?',
      description:
        'Parliamo di come possiamo aiutarti a creare un e-commerce funzionale, scalabile e ottimizzato per le vendite.',
      textButton: 'Avvia il tuo e-commerce'
    }
  }
})
