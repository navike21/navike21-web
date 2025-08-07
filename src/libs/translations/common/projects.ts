import { ECOMMERCE, WEB_SITES } from '@Constants/categories'
import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import {
  carbyneSafety,
  circurela,
  colegioLaUnion,
  eurogourmet,
  rkPower,
  tentacionesGourmet
} from '@Constants/projectsImages'
import { TLanguageKey } from '@Types/languages'

import type { StaticImageData } from 'next/image'

export type TProject = {
  [key in TLanguageKey]: {
    id: number
    category: string[]
    clientId: string
    title: string
    description: string
    gallery: {
      [key: string]: {
        [key: string]: StaticImageData
      }
    }
  }[]
}

export const projects: TProject = {
  [ES]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Proyecto digital para eventos',
      description:
        'En navike21 creamos la plataforma digital de Circurela, una experiencia visual única pensada para destacar en cada evento. Con un enfoque fresco y envolvente, transformamos su propuesta en una web atractiva, dinámica y lista para captar la atención de quienes buscan recuerdos inolvidables. Un proyecto que refleja nuestro compromiso con la creatividad, el detalle y el impacto real.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Catálogo web corporativo',
      description:
        'Creamos una plataforma digital dinámica que presenta de forma clara y atractiva la línea de productos de protección industrial de Carbyne Safety. Desarrollada en WordPress, permite a los usuarios explorar el catálogo y solicitar cotizaciones de manera sencilla. Cada elemento fue trabajado con atención al detalle, desde la carga y optimización de productos hasta la propuesta visual, asegurando una experiencia alineada a la identidad de la marca.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Ecommerce gourmet con enfoque premium',
      description:
        'Creamos una tienda online elegante y funcional para Eurogourmet, marca especializada en productos delicatessen. El desarrollo incluyó el diseño web, registro detallado de productos, optimización de imágenes y asesoría en pasarelas de pago. Gracias a una coordinación estrecha con el cliente, logramos una experiencia digital alineada con el carácter exclusivo y refinado de su catálogo gourmet.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce especializado en soluciones energéticas',
      description:
        'Desarrollamos un sitio ecommerce estratégico para rkPower, una empresa con presencia internacional dedicada a la fabricación de generadores eléctricos. El proyecto incluyó la estructuración de su catálogo digital, categorización de productos, optimización visual y una estrecha coordinación para reflejar fielmente la calidad de su oferta y su alcance regional. La solución refuerza la presencia digital de la marca, potenciando su capacidad de atención a clientes en múltiples países.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Sitio institucional con esencia cultural y educativa',
      description:
        'Este proyecto representa un hito muy especial en la historia de navike21, al ser nuestro primer desarrollo oficial. Colaboramos con el Colegio Peruano Japonés La Unión para crear una web institucional alineada a sus valores, su identidad cultural nikkei y su propuesta educativa moderna. Fue una experiencia enriquecedora marcada por una comunicación cercana, constante y de mucha confianza con el equipo del colegio. A lo largo del tiempo, continuamos brindando soporte, mejoras y asesoría personalizada, consolidando una relación duradera que recordamos con especial cariño.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Pastelería artesanal con corazón familiar',
      description:
        'Este proyecto refleja el sabor de una historia familiar hecha realidad. Desarrollamos una tienda online completa para Tentaciones Gourmet, una marca con alma casera y un enfoque artesanal que hoy sigue creciendo con mucho cariño. Acompañamos de forma continua a su equipo brindando soporte técnico, asesoría estratégica y mejoras constantes para potenciar sus ventas. Junto a Ale y Carla Melly, y su equipo lleno de alegría y empatía, seguimos colaborando para que cada postre llegue a más personas sin perder su esencia familiar.',
      gallery: tentacionesGourmet
    }
  ],
  [EN]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – A digital experience for unforgettable events',
      description:
        'At navike21, we created Circurela’s digital platform — a unique visual experience designed to stand out in every event. With a fresh and immersive approach, we turned their concept into a dynamic and engaging website, ready to captivate those looking for unforgettable memories. A project that reflects our commitment to creativity, detail, and real impact.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Corporate web catalog',
      description:
        'We developed a dynamic digital platform to showcase Carbyne Safety’s line of industrial protection products in a clear and appealing way. Built in WordPress, the site allows users to easily browse the catalog and request quotes. Every element was crafted with attention to detail — from product upload and image optimization to visual design — ensuring an experience aligned with the brand’s identity.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Premium gourmet ecommerce',
      description:
        'We built a refined and functional online store for Eurogourmet, a brand specialized in delicatessen products. The project included web design, detailed product registration, image optimization, and guidance for payment gateways. Thanks to close coordination with the client, we delivered a digital experience aligned with the exclusive and sophisticated character of their gourmet catalog.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce for energy solutions',
      description:
        'We developed a strategic ecommerce site for rkPower, an international company focused on manufacturing electric generators. The project involved structuring their digital catalog, organizing product categories, optimizing visual content, and close coordination to accurately reflect the brand’s quality and regional reach. The solution strengthens their digital presence and supports customer engagement across multiple countries.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Institutional website with cultural and educational values',
      description:
        'This project marks a special milestone in navike21’s journey, as it was our first official development. We collaborated with Colegio Peruano Japonés La Unión to build an institutional website aligned with their core values, Nikkei cultural identity, and modern educational vision. It was a rewarding experience shaped by ongoing, close, and trusting communication with the school’s team. Over time, we’ve continued to provide support, improvements, and personalized guidance — building a strong, lasting relationship we hold dear.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Handmade bakery with a family heart',
      description:
        'This project embodies the flavor of a heartfelt family story. We developed a complete online store for Tentaciones Gourmet — a brand with a homemade soul and an artisanal focus that continues to grow with passion. We provide ongoing support to their team through technical assistance, strategic guidance, and continuous improvements to boost their sales. Alongside Ale and Carla Melly, and their warm, cheerful staff, we keep working together so each pastry reaches more people without losing its authentic, familiar essence.',
      gallery: tentacionesGourmet
    }
  ],
  [DE]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Ein digitales Erlebnis für unvergessliche Events',
      description:
        'Bei navike21 haben wir die digitale Plattform von Circurela entwickelt – ein einzigartiges visuelles Erlebnis, das bei jedem Event hervorsticht. Mit einem frischen und immersiven Ansatz haben wir ihr Konzept in eine dynamische und fesselnde Website verwandelt, die jene begeistert, die nach unvergesslichen Momenten suchen. Ein Projekt, das unser Engagement für Kreativität, Details und echte Wirkung widerspiegelt.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Unternehmenswebseite mit Produktkatalog',
      description:
        'Wir haben eine dynamische digitale Plattform entwickelt, um die Produktlinie von Carbyne Safety im Bereich Industrieschutz klar und ansprechend zu präsentieren. Die in WordPress erstellte Seite ermöglicht es den Nutzer:innen, den Katalog einfach zu durchsuchen und Angebote anzufordern. Jedes Element wurde mit viel Liebe zum Detail gestaltet – von der Produktpflege und Bildoptimierung bis hin zum visuellen Design – für ein Erlebnis, das der Markenidentität gerecht wird.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Hochwertiger Online-Shop für Delikatessen',
      description:
        'Für Eurogourmet, eine Marke für exklusive Feinkost, haben wir einen eleganten und funktionalen Online-Shop entwickelt. Das Projekt umfasste Webdesign, detaillierte Produktpflege, Bildoptimierung sowie die Beratung zu Zahlungsanbietern. Durch enge Zusammenarbeit mit dem Kunden konnten wir ein digitales Erlebnis schaffen, das den exklusiven und anspruchsvollen Charakter ihres Sortiments perfekt widerspiegelt.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – E-Commerce für Energielösungen',
      description:
        'Wir haben eine strategische E-Commerce-Plattform für rkPower entwickelt, ein internationales Unternehmen für Stromgeneratoren. Das Projekt umfasste die Strukturierung ihres digitalen Katalogs, die Organisation der Produktkategorien, die Optimierung visueller Inhalte und eine enge Zusammenarbeit, um Qualität und Reichweite der Marke präzise abzubilden. Die Lösung stärkt ihre digitale Präsenz und unterstützt die Kundenbindung in mehreren Ländern.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Schulwebseite mit kulturellem und pädagogischem Mehrwert',
      description:
        'Dieses Projekt war ein besonderer Meilenstein für navike21 – unsere erste offizielle Entwicklung. Gemeinsam mit dem Colegio Peruano Japonés La Unión haben wir eine institutionelle Website geschaffen, die ihre Werte, die Nikkei-Kultur und ihre moderne Bildungsvision widerspiegelt. Die Arbeit zeichnete sich durch enge, vertrauensvolle Kommunikation mit dem Schulteam aus. Bis heute bieten wir fortlaufenden Support, individuelle Verbesserungen und Beratung – eine Zusammenarbeit, die uns sehr am Herzen liegt.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title:
        'Tentaciones Gourmet – Hausgemachte Konditorei mit Herz und Familie',
      description:
        'Dieses Projekt erzählt die Geschichte einer Familie mit Leidenschaft. Wir haben einen vollständigen Online-Shop für Tentaciones Gourmet entwickelt – eine Marke mit hausgemachtem Charakter und handwerklichem Anspruch, die mit Hingabe wächst. Wir bieten kontinuierliche Unterstützung durch technische Betreuung, strategische Beratung und regelmäßige Optimierungen, um den Verkauf zu fördern. Gemeinsam mit Ale und Carla Melly und ihrem freundlichen, herzlichen Team arbeiten wir daran, dass ihre Backwaren immer mehr Menschen erreichen – ohne dabei ihren authentischen, familiären Charakter zu verlieren.',
      gallery: tentacionesGourmet
    }
  ],
  [FR]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title:
        'Circurela – Une expérience numérique pour des événements inoubliables',
      description:
        'Chez navike21, nous avons conçu la plateforme numérique de Circurela – une expérience visuelle unique qui fait briller chaque événement. Grâce à une approche immersive et rafraîchissante, nous avons transformé leur concept en un site web dynamique et captivant, pensé pour celles et ceux qui recherchent des moments vraiment mémorables. Un projet qui reflète notre passion pour la créativité, le soin du détail et l’impact réel.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Site institutionnel avec catalogue de produits',
      description:
        'Nous avons développé une plateforme numérique dynamique pour présenter clairement et efficacement la gamme de produits de Carbyne Safety, spécialisée dans la protection industrielle. Conçu avec WordPress, le site permet une navigation fluide dans le catalogue et la demande de devis. Chaque détail a été soigné – gestion des produits, optimisation des visuels et design – afin d’offrir une expérience à la hauteur de leur image de marque.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Boutique en ligne haut de gamme pour produits fins',
      description:
        'Pour Eurogourmet, une marque spécialisée dans les produits gourmets, nous avons développé une boutique en ligne élégante et fonctionnelle. Le projet comprenait le design web, la gestion détaillée des produits, l’optimisation des images et la consultation sur les passerelles de paiement. En étroite collaboration avec le client, nous avons créé une expérience numérique qui reflète parfaitement la qualité et le raffinement de leur offre.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – E-commerce pour solutions énergétiques',
      description:
        'Nous avons conçu une plateforme e-commerce stratégique pour rkPower, une entreprise internationale spécialisée dans les générateurs d’électricité. Le projet a impliqué la structuration de leur catalogue numérique, l’organisation des catégories, l’optimisation des contenus visuels et une étroite collaboration afin de refléter précisément la qualité et l’envergure de la marque. Une solution qui renforce leur présence en ligne et favorise la fidélisation sur plusieurs marchés.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Site scolaire à valeur pédagogique et culturelle',
      description:
        'Ce projet représente une étape importante pour navike21 – notre première réalisation officielle. En collaboration avec le Colegio Peruano Japonés La Unión, nous avons développé un site institutionnel reflétant leurs valeurs, la culture nikkei et leur vision éducative moderne. Le processus s’est distingué par une communication fluide et de confiance avec l’équipe de l’école. À ce jour, nous assurons un accompagnement continu, des améliorations sur mesure et du conseil – une relation de travail à laquelle nous tenons profondément.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title:
        'Tentaciones Gourmet – Pâtisseries maison avec passion et esprit familial',
      description:
        'Ce projet raconte l’histoire d’une famille animée par la passion. Nous avons développé une boutique en ligne complète pour Tentaciones Gourmet – une marque artisanale et authentique qui grandit avec cœur. Nous assurons un accompagnement continu, tant sur le plan technique que stratégique, avec des conseils, des mises à jour régulières et des optimisations visant à stimuler les ventes. En collaboration avec Ale et Carla Melly et leur merveilleuse équipe en boutique, nous veillons à ce que leurs créations atteignent toujours plus de personnes, sans jamais perdre leur essence chaleureuse et familiale.',
      gallery: tentacionesGourmet
    }
  ],
  [IT]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Un’esperienza digitale per eventi indimenticabili',
      description:
        'In navike21 abbiamo creato la piattaforma digitale di Circurela – un’esperienza visiva unica che illumina ogni evento. Con un approccio immersivo e fresco, abbiamo trasformato il loro concetto in un sito web dinamico e accattivante, pensato per chi cerca momenti davvero memorabili. Un progetto che riflette la nostra passione per la creatività, l’attenzione ai dettagli e l’impatto reale.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Sito istituzionale con catalogo prodotti',
      description:
        'Abbiamo sviluppato una piattaforma digitale dinamica per presentare in modo chiaro ed efficace la gamma di prodotti di Carbyne Safety, specializzata nella protezione industriale. Realizzato in WordPress, il sito consente una navigazione fluida del catalogo e la possibilità di richiedere preventivi. Ogni dettaglio è stato curato – gestione dei prodotti, ottimizzazione visiva e design – per offrire un’esperienza all’altezza della loro immagine di marca.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – E-commerce di alta gamma per prodotti raffinati',
      description:
        'Per Eurogourmet, marchio specializzato in prodotti gourmet, abbiamo sviluppato un e-commerce elegante e funzionale. Il progetto ha incluso il design del sito, la gestione dettagliata dei prodotti, l’ottimizzazione delle immagini e la consulenza sulle modalità di pagamento. In stretta collaborazione con il cliente, abbiamo creato un’esperienza digitale che riflette perfettamente la qualità e la raffinatezza della loro offerta.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – E-commerce per soluzioni energetiche',
      description:
        'Abbiamo creato una piattaforma e-commerce strategica per rkPower, azienda internazionale specializzata in generatori elettrici. Il progetto ha coinvolto la strutturazione del catalogo digitale, l’organizzazione delle categorie, l’ottimizzazione dei contenuti visivi e una stretta collaborazione per riflettere fedelmente la qualità e l’ampiezza del marchio. Una soluzione che rafforza la presenza online e favorisce la fidelizzazione in diversi mercati.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Sito scolastico con valori educativi e culturali',
      description:
        'Questo progetto rappresenta una pietra miliare per navike21 – la nostra prima realizzazione ufficiale. In collaborazione con il Colegio Peruano Japonés La Unión, abbiamo sviluppato un sito istituzionale che riflette i loro valori, la cultura nikkei e una visione educativa moderna. Il processo si è distinto per una comunicazione fluida e di fiducia con il team scolastico. A oggi, offriamo un accompagnamento continuo, miglioramenti su misura e consulenza – una relazione professionale che apprezziamo profondamente.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title:
        'Tentaciones Gourmet – Dolci artigianali con passione e spirito familiare',
      description:
        'Questo progetto racconta la storia di una famiglia animata dalla passione. Abbiamo sviluppato un e-commerce completo per Tentaciones Gourmet – un marchio artigianale e autentico che cresce con cuore. Forniamo un supporto continuo sia tecnico che strategico, con aggiornamenti regolari, consulenze e ottimizzazioni per favorire le vendite. In collaborazione con Ale e Carla Melly e il loro meraviglioso team in negozio, ci assicuriamo che le loro creazioni raggiungano sempre più persone, senza perdere mai il loro calore e spirito familiare.',
      gallery: tentacionesGourmet
    }
  ],
  [JA]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – 記憶に残るイベントのためのデジタル体験',
      description:
        'navike21では、Circurelaのビジュアル体験を引き立てるためのデジタルプラットフォームを構築しました。没入感があり、印象的で直感的なインターフェースにより、訪問者に鮮やかな体験を提供。イベントを大切にするブランドの精神をデザインと機能で表現しました。創造性、細部へのこだわり、そして本物のインパクトを大切にしたプロジェクトです。',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 製品カタログ付きの企業サイト',
      description:
        '産業用保護製品を専門とするCarbyne Safetyのために、製品の特徴を明確に伝える企業サイトを構築しました。WordPressを活用し、製品ごとの詳細表示や見積もり依頼の導線を整備。商品管理、ビジュアル最適化、ブランドイメージに合った構成まで、包括的にサポートしたプロジェクトです。',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – 洗練されたグルメ製品のためのECサイト',
      description:
        '高級食品ブランドEurogourmetのために、上質で機能的なECサイトを開発しました。サイトのデザイン、商品登録、画像の最適化、支払い方法のアドバイスなど、全体を通して品質とブランド価値を伝える構成に。お客様との緊密な連携で、魅力的なオンライン体験を実現しました。',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – 発電機専門企業のための戦略的ECサイト',
      description:
        '発電機の専門企業rkPowerのために、製品カタログと情報を整えた戦略的ECサイトを構築しました。カテゴリ構成、画像コンテンツの整理、ブランドの国際的な信頼性を表現する構成で、多言語市場に対応できるデジタルプレゼンスを実現。信頼と品質をオンラインでも伝える設計です。',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'コレヒオ・ラ・ウニオン – 教育と文化的価値を伝える学校サイト',
      description:
        'このプロジェクトはnavike21にとって重要な一歩でした。ペルー日本人学校「ラ・ウニオン」との協力のもと、日系文化と現代的な教育ビジョンを反映した学校公式サイトを開発しました。信頼と連携に支えられたプロセスを通じて、現在も継続的な改善や技術サポートを提供。大切にしている関係のひとつです。',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 家庭の味と情熱が詰まった洋菓子ECサイト',
      description:
        '家族の想いから始まったTentaciones Gourmetの成長を支えるため、完全なECサイトを構築しました。技術支援、商品管理、定期的な更新や販売戦略のアドバイスなど、包括的なサポートを提供。オーナーのAle Mellyさん、Carla Mellyさん、そして心のこもった接客を行う店舗チームと共に、真心のこもったお菓子を多くの人へ届けるお手伝いをしています。',
      gallery: tentacionesGourmet
    }
  ],
  [KO]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – 기억에 남는 이벤트를 위한 디지털 경험',
      description:
        'Circurela의 시각적 경험을 더욱 돋보이게 하기 위해 navike21은 몰입감 있고 직관적인 인터페이스를 갖춘 디지털 플랫폼을 구축했습니다. 방문자에게 생생한 인상을 남기는 디자인과 기능으로, 이벤트의 소중함을 디지털로 표현한 프로젝트입니다. 창의성과 세심한 디테일, 그리고 진정한 임팩트를 중시했습니다.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 제품 카탈로그를 포함한 기업 웹사이트',
      description:
        '산업용 보호 장비 전문 브랜드 Carbyne Safety를 위해 제품의 강점을 잘 전달할 수 있는 기업용 웹사이트를 제작했습니다. WordPress 기반으로 제품별 정보 제공, 견적 요청 경로, 콘텐츠 최적화, 브랜드 이미지에 맞춘 구조까지 전반을 지원한 프로젝트입니다.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – 고급 식품을 위한 세련된 이커머스 플랫폼',
      description:
        '프리미엄 식품 브랜드 Eurogourmet를 위해 우아하고 기능적인 이커머스 웹사이트를 개발했습니다. 디자인, 상품 등록, 이미지 최적화, 결제 수단 제안 등 모든 면에서 브랜드 가치를 전달할 수 있도록 구성하였으며, 클라이언트와 긴밀히 협력하며 완성한 프로젝트입니다.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – 발전기 전문 기업을 위한 전략적 이커머스 구축',
      description:
        '발전기 전문 회사 rkPower를 위해 제품 정보와 카탈로그를 체계화한 전략적 이커머스 플랫폼을 구축했습니다. 제품 카테고리 정리, 이미지 콘텐츠 최적화, 국제적인 브랜드 신뢰성을 표현한 구성으로, 다국어 시장을 겨냥한 디지털 기반을 완성했습니다.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'Colegio La Unión – 교육과 문화적 가치를 담은 학교 웹사이트',
      description:
        'navike21에게 있어 중요한 이정표가 된 프로젝트입니다. 페루의 일본계 학교 "La Unión"과 협력하여 일본 문화와 현대 교육 철학을 반영한 공식 웹사이트를 개발했습니다. 신뢰와 협업 속에서 진행된 이 과정은 현재까지 기술 지원과 지속적인 개선으로 이어지고 있습니다.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 가정의 맛과 열정이 담긴 디저트 쇼핑몰',
      description:
        '가족의 따뜻한 이야기에서 시작된 Tentaciones Gourmet의 성장을 위해, 전자상거래 플랫폼을 구축하고 운영을 지원하고 있습니다. 기술적 지원, 상품 관리, 플러그인 업데이트, 웹 운영 상담, 판매 전략 등 폭넓은 지원을 제공하며, Ale Melly 대표님과 Carla Melly, 그리고 따뜻하고 친절한 매장 팀과 함께 온라인 판매를 성공적으로 이끌고 있습니다.',
      gallery: tentacionesGourmet
    }
  ],
  [PT]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Experiência digital para eventos memoráveis',
      description:
        'Para destacar a proposta visual da Circurela, a navike21 desenvolveu uma plataforma digital imersiva e intuitiva. Com um design impactante e navegação envolvente, o projeto reflete a essência de eventos inesquecíveis com criatividade, atenção aos detalhes e uma abordagem centrada na experiência.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Website corporativo com catálogo de produtos',
      description:
        'Desenvolvemos um site institucional para a Carbyne Safety, marca especializada em equipamentos de proteção industrial. A proposta incluiu catálogo de produtos, formulário de orçamento, estrutura otimizada e adaptação à identidade da marca, utilizando WordPress como base para flexibilidade e escalabilidade.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – E-commerce elegante para produtos premium',
      description:
        'Criamos uma loja virtual sob medida para a Eurogourmet, marca de produtos alimentares gourmet. O projeto envolveu design refinado, gestão de produtos, otimização de imagens, integração com meios de pagamento e colaboração constante com a equipe de conteúdo para oferecer uma experiência de compra premium.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Plataforma estratégica de e-commerce para geradores',
      description:
        'Para a RK Power, desenvolvemos uma plataforma de e-commerce que estrutura de forma clara seu catálogo de geradores e produtos relacionados. A solução contempla categorias bem definidas, conteúdos visuais otimizados e uma apresentação corporativa que reforça sua presença em mercados internacionais.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'Colegio La Unión – Website escolar com identidade cultural',
      description:
        'Este projeto marcou um momento importante para a navike21. Desenvolvemos o site institucional do colégio nipo-peruano "La Unión", integrando valores culturais japoneses com uma proposta educativa moderna. O resultado reflete uma colaboração sólida com o cliente e continua em constante evolução com suporte técnico contínuo.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title:
        'Tentaciones Gourmet – Loja online com sabor caseiro e paixão familiar',
      description:
        'Tentaciones Gourmet nasceu do amor pela confeitaria e do espírito familiar. Desenvolvemos sua loja online com foco total no e-commerce, prestando suporte técnico, gestão de produtos, atualização de plugins e estratégias digitais para impulsionar as vendas. Trabalhamos em parceria com as fundadoras Ale Melly e Carla Melly e sua simpática equipe de loja, cuja atenção e carinho são parte essencial da marca.',
      gallery: tentacionesGourmet
    }
  ],
  [ZH]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – 为难忘活动打造沉浸式数字体验',
      description:
        '为了展现 Circurela 的视觉理念，navike21 打造了一个直观且富有沉浸感的数字平台。项目采用大胆的设计与流畅的浏览体验，精准体现了其创意、多细节和以体验为核心的品牌精神。',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 企业官网与产品目录展示',
      description:
        '我们为 Carbyne Safety 打造了品牌官网，一个专注于工业防护装备的企业平台。项目整合了产品目录、报价请求表单、符合品牌形象的版式结构，并使用 WordPress 提供灵活性和扩展性。',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – 为高端美食打造优雅电商平台',
      description:
        '我们为 Eurogourmet 打造了一个专属的线上商店，主打高端美食。项目包含精致设计、产品管理、图像优化、支付整合，并与内容团队密切合作，为顾客提供高级的购物体验。',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – 专为发电机定制的电商平台',
      description:
        '我们为 RK Power 构建了一个电商解决方案，清晰地展示其发电机产品及相关配件。平台设计注重分类清晰、视觉优化和企业形象展现，巩固其在国际市场的专业形象。',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'La Unión 学校 – 展现文化认同的教育平台',
      description:
        '这是 navike21 的重要里程碑项目之一。我们为秘鲁日裔学校 La Unión 打造了其官方网站，将日本文化价值与现代教育理念融合。项目体现了与客户紧密合作的成果，并持续提供技术支持与改进。',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 充满家庭温度的线上甜点商店',
      description:
        'Tentaciones Gourmet 源于对烘焙的热爱与家庭传承。我们为其打造了完整的电商平台，并持续提供技术支持、产品更新、插件维护与线上销售策略。与创办人 Ale Melly 和 Carla Melly 及其充满热情的团队密切合作，让每一次购物都充满温暖和心意。',
      gallery: tentacionesGourmet
    }
  ]
}
