import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingIt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Marketing Digitale',
  descriptionLite:
    'Rendiamo più visibile il tuo marchio nel mondo digitale con strategie personalizzate, pubblicità efficace e una forte presenza sui social media.',
  path: `${servicesMenu.path}/marketing-digitale`,
  slug: 'marketing-digitale',
  pageSections: {
    metaTag: {
      title: `Marketing Digitale | Strategie e Pubblicità Online | ${COMPANY_NAME}`,
      description:
        'Potenzia il tuo marchio con strategie di marketing digitale, campagne a pagamento, social media e contenuti ottimizzati. Risultati misurabili con navike21.',
      ogTitle: `Marketing Digitale | Strategie e Pubblicità Online | ${COMPANY_NAME}`,
      ogDescription:
        'Aumenta la tua presenza online con campagne personalizzate, social media e pubblicità efficaci. Risultati concreti con navike21.',
      ogImage: coverImage,
      twitterTitle: `Marketing Digitale | Strategie Online | ${COMPANY_NAME}`,
      twitterDescription:
        'Campagne digitali, social media e pubblicità online che generano risultati. Scopri cosa può fare navike21 per il tuo marchio.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Strategie Digitali Che Generano Risultati',
      description:
        'Progettiamo e implementiamo campagne digitali allineate agli obiettivi della tua azienda, ottimizzando la visibilità online e attirando i clienti giusti.'
    },
    description: {
      title: 'Marketing Personalizzato per la Tua Azienda',
      description:
        'Analizziamo la tua situazione attuale e creiamo un piano strategico di marketing digitale che si adatta ai tuoi obiettivi, budget e pubblico. Ci concentriamo sulla creazione di un impatto reale e misurabile.',
      description2:
        'Diventiamo partner nella tua crescita digitale, monitorando costantemente le campagne e facendo gli aggiustamenti necessari per massimizzare il ritorno sugli investimenti (ROI).'
    },
    features: {
      title: 'Cosa Include il Nostro Servizio?',
      items: [
        {
          title: 'Pubblicità su Piattaforme Digitali',
          description:
            'Gestiamo campagne a pagamento su Google Ads, Meta Ads, TikTok Ads e altro, ottimizzate per attirare traffico qualificato e generare conversioni.'
        },
        {
          title: 'Gestione dei Social Media',
          description:
            'Creiamo strategie di contenuto e gestiamo i tuoi account per costruire una comunità fedele e rafforzare la tua presenza digitale.'
        },
        {
          title: 'Creazione di Contenuti',
          description:
            'Progettiamo grafiche e scriviamo testi persuasivi che si connettono con il tuo pubblico target in ogni fase del funnel.'
        },
        {
          title: 'Installazione di Pixel e Strumenti di Misurazione',
          description:
            'Configuriamo i pixel di monitoraggio di Facebook, TikTok, Google Ads e Adobe per misurare con precisione le performance delle tue campagne.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnosi e Obiettivi',
        description:
          'Valutiamo la tua presenza attuale e definiamo obiettivi chiari di marketing digitale in base alla tua azienda.'
      },
      {
        title: 'Pianificazione Strategica',
        description:
          "Creiamo un piano d'azione dettagliato che definisce le piattaforme da utilizzare, il tipo di contenuto, l'investimento e il calendario delle campagne."
      },
      {
        title: 'Esecuzione delle Campagne',
        description:
          "Lanciamo le campagne con un'esecuzione professionale, garantendo una corretta segmentazione e creatività adattata."
      },
      {
        title: 'Misurazione e Ottimizzazione',
        description:
          'Monitoriamo i risultati e apportiamo modifiche in tempo reale per massimizzare le performance e raggiungere gli obiettivi fissati.'
      }
    ],
    recentWorks: {
      title: 'Campagne che Fanno la Differenza',
      description:
        'Scopri casi in cui le nostre strategie digitali hanno potenziato la presenza online di marchi in diversi settori.'
    },
    callToAction: {
      title: 'Pronto a Potenziare il Tuo Marchio?',
      description:
        'Parliamo dei tuoi obiettivi e creiamo insieme una strategia di marketing digitale che potenzi i tuoi risultati.',
      textButton: 'Voglio migliorare il mio marketing'
    }
  }
})
