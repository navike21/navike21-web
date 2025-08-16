import { ECOMMERCE, WEB_SITES } from '@Constants/categories'
import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import {
  ankerPaints,
  beatsMusica,
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
        'En navike21 creamos la plataforma digital de Circurela, una experiencia visual única pensada para destacar en cada evento. Con un enfoque fresco y envolvente, transformamos su propuesta en una web atractiva, dinámica y lista para captar la atención de quienes buscan recuerdos inolvidables. Un proyecto que refleja nuestro compromiso con la creatividad, el detalle y el impacto real, aprovechando al máximo recursos visuales y técnicos para un rendimiento impecable.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Catálogo web corporativo',
      description:
        'En navike21 desarrollamos una plataforma digital dinámica que presenta de forma clara y atractiva la línea de productos de protección industrial de Carbyne Safety. La web, construida en WordPress, permite explorar el catálogo y solicitar cotizaciones de manera sencilla. Nuestro trabajo abarcó la arquitectura de información, optimización de productos y un diseño alineado con la identidad visual, asegurando una experiencia sólida y profesional que potencia la presencia digital de la marca.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Ecommerce gourmet con enfoque premium',
      description:
        'Diseñamos y desarrollamos una tienda online elegante y funcional para Eurogourmet, marca especializada en productos delicatessen. El proyecto incluyó la estructuración del catálogo digital, carga y optimización de productos, diseño visual y asesoría en pasarelas de pago. Gracias a una coordinación estrecha con el cliente, logramos una experiencia de compra fluida que transmite el carácter exclusivo de su catálogo gourmet y consolida su posicionamiento en el entorno digital.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce especializado en soluciones energéticas',
      description:
        'En navike21 desarrollamos un sitio ecommerce estratégico para rkPower, empresa con presencia internacional dedicada a la fabricación de generadores eléctricos. El proyecto incluyó la arquitectura del catálogo digital, categorización de productos, optimización visual y una coordinación constante con su equipo para reflejar fielmente la calidad de su oferta. La solución fortalece su presencia digital y amplía su capacidad de atención a clientes en múltiples países.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Sitio institucional con esencia cultural y educativa',
      description:
        'Este proyecto representa un hito muy especial en la historia de navike21, al ser nuestro primer desarrollo oficial. Colaboramos con el Colegio Peruano Japonés La Unión para crear una web institucional alineada a sus valores, su identidad cultural nikkei y su propuesta educativa moderna. Fue una experiencia enriquecedora marcada por una comunicación cercana y constante con el equipo del colegio. A lo largo del tiempo, seguimos brindando soporte, mejoras y asesoría personalizada, consolidando una relación duradera que recordamos con especial cariño.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title:
        'Anker Paints – Plataforma web para soluciones en pinturas industriales',
      description:
        'En navike21 diseñamos y desarrollamos la plataforma digital de Anker Paints, marca dedicada a la fabricación de pinturas industriales de alta calidad. El proyecto incluyó la organización del contenido y fichas de productos, así como un sistema de cotización ágil y práctico que facilita la elección de la pintura ideal según cada necesidad. Nuestro objetivo fue transmitir confianza y solidez con una web clara, funcional y lista para acompañar el crecimiento de la marca en diversos sectores.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Plataforma de canciones personalizadas',
      description:
        'En navike21 acompañamos el nacimiento de Beats Música desde sus cimientos, creando una plataforma digital que hace posible encargar canciones acústicas personalizadas y recibirlas en solo 24 horas. Diseñamos una experiencia ágil y segura, desde la navegación web hasta el flujo de compra en línea, cuidando cada detalle para que los usuarios puedan compartir su inspiración y convertirla en un regalo único. Un proyecto que refleja nuestra capacidad para transformar ideas en soluciones digitales con impacto emocional.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Pastelería artesanal con corazón familiar',
      description:
        'Este proyecto refleja el sabor de una historia familiar hecha realidad. En navike21 desarrollamos una tienda online completa para Tentaciones Gourmet, una marca con alma casera y un enfoque artesanal que hoy sigue creciendo con mucho cariño. Acompañamos de forma continua a su equipo brindando soporte técnico, asesoría estratégica y mejoras constantes para potenciar sus ventas. Junto a Ale y Carla Melly y su equipo, seguimos colaborando para que cada postre llegue a más personas sin perder su esencia familiar.',
      gallery: tentacionesGourmet
    }
  ],
  [EN]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Digital project for events',
      description:
        'At navike21, we created Circurela’s digital platform, a unique visual experience designed to stand out at every event. With a fresh and immersive approach, we transformed their concept into an attractive and dynamic website, ready to capture the attention of those looking for unforgettable memories. A project that reflects our commitment to creativity, detail, and real impact, making the most of visual and technical resources for flawless performance.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Corporate web catalog',
      description:
        'At navike21, we developed a dynamic digital platform that clearly and attractively showcases Carbyne Safety’s line of industrial protection products. Built on WordPress, the site allows users to explore the catalog and request quotes with ease. Our work covered information architecture, product optimization, and a design aligned with the brand’s identity, ensuring a solid and professional experience that strengthens its digital presence.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Premium gourmet ecommerce',
      description:
        'We designed and developed an elegant and functional online store for Eurogourmet, a brand specializing in delicatessen products. The project included structuring the digital catalog, product upload and optimization, visual design, and guidance on payment gateways. Through close coordination with the client, we achieved a smooth shopping experience that conveys the exclusive character of their gourmet catalog and strengthens their digital positioning.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce for energy solutions',
      description:
        'At navike21, we developed a strategic ecommerce site for rkPower, an international company dedicated to manufacturing power generators. The project included catalog architecture, product categorization, visual optimization, and constant coordination with their team to faithfully reflect the quality of their offering. The solution strengthens their digital presence and expands their ability to serve clients across multiple countries.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Institutional website with cultural and educational essence',
      description:
        'This project represents a very special milestone in navike21’s history, as it was our first official development. We collaborated with Colegio Peruano Japonés La Unión to create an institutional website aligned with their values, Nikkei cultural identity, and modern educational approach. It was an enriching experience marked by close and constant communication with the school’s team. Over time, we have continued providing support, improvements, and personalized guidance, building a lasting relationship that we cherish with great affection.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title: 'Anker Paints – Web platform for industrial paint solutions',
      description:
        'At navike21, we designed and developed Anker Paints’ digital platform, a brand dedicated to manufacturing high-quality industrial paints. The project included organizing content and product sheets, as well as implementing a fast and practical quotation system that helps clients choose the ideal paint for their needs. Our goal was to convey trust and solidity through a clear, functional website ready to support the brand’s growth across various sectors.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Platform for personalized songs',
      description:
        'At navike21, we supported the creation of Beats Música from the ground up, building a digital platform that allows users to order personalized acoustic songs and receive them in just 24 hours. We designed an agile and secure experience, from website navigation to the online purchase flow, carefully polishing every detail so users can share their inspiration and turn it into a unique gift. A project that highlights our ability to transform ideas into digital solutions with emotional impact.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Artisan pastry with a family heart',
      description:
        'This project reflects the flavor of a family story come true. At navike21, we developed a complete online store for Tentaciones Gourmet, a brand with a homely spirit and artisanal approach that continues to grow with dedication. We have continuously supported their team by providing technical assistance, strategic guidance, and ongoing improvements to boost sales. Together with Ale and Carla Melly and their warm, empathetic team, we keep collaborating so every dessert reaches more people without losing its family essence.',
      gallery: tentacionesGourmet
    }
  ],
  [DE]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Digitales Projekt für Events',
      description:
        'Bei navike21 haben wir die digitale Plattform von Circurela entwickelt – ein einzigartiges visuelles Erlebnis, das bei jedem Event heraussticht. Mit einem frischen und eindringlichen Ansatz verwandelten wir ihre Idee in eine attraktive und dynamische Website, die sofort die Aufmerksamkeit jener auf sich zieht, die unvergessliche Erinnerungen suchen. Ein Projekt, das unser Engagement für Kreativität, Detailgenauigkeit und echte Wirkung widerspiegelt, unterstützt durch optimale visuelle und technische Ressourcen.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Unternehmens-Webkatalog',
      description:
        'Bei navike21 haben wir eine dynamische digitale Plattform entwickelt, die das Sortiment an Industrie-Schutzprodukten von Carbyne Safety klar und ansprechend präsentiert. Die Website, erstellt mit WordPress, ermöglicht es den Nutzern, den Katalog zu durchsuchen und unkompliziert Angebote anzufordern. Unsere Arbeit umfasste die Informationsarchitektur, Produktoptimierung und ein Design, das sich an der Markenidentität orientiert – für ein professionelles Erlebnis, das die digitale Präsenz der Marke stärkt.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Premium-Gourmet-Ecommerce',
      description:
        'Wir haben für Eurogourmet, eine Marke für Delikatessenprodukte, einen eleganten und funktionalen Onlineshop entworfen und entwickelt. Das Projekt umfasste die Strukturierung des digitalen Katalogs, die Pflege und Optimierung von Produkten, das visuelle Design sowie Beratung zu Zahlungslösungen. Durch enge Zusammenarbeit mit dem Kunden schufen wir ein flüssiges Einkaufserlebnis, das den exklusiven Charakter des Sortiments vermittelt und die digitale Positionierung der Marke stärkt.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce für Energielösungen',
      description:
        'Bei navike21 haben wir eine strategische E-Commerce-Website für rkPower entwickelt, ein internationales Unternehmen, das auf die Herstellung von Stromgeneratoren spezialisiert ist. Das Projekt umfasste die Katalogarchitektur, die Produktkategorisierung, visuelle Optimierung und eine enge Abstimmung mit dem Team, um die Qualität ihres Angebots authentisch darzustellen. Die Lösung stärkt die digitale Präsenz und erweitert die Fähigkeit, Kunden in mehreren Ländern zu betreuen.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Institutionelle Website mit kulturellem und pädagogischem Schwerpunkt',
      description:
        'Dieses Projekt stellt einen ganz besonderen Meilenstein in der Geschichte von navike21 dar, da es unsere erste offizielle Entwicklung war. Gemeinsam mit dem Colegio Peruano Japonés La Unión erstellten wir eine institutionelle Website, die mit ihren Werten, der Nikkei-Kulturidentität und ihrem modernen pädagogischen Ansatz im Einklang steht. Es war eine bereichernde Erfahrung, geprägt von enger und kontinuierlicher Kommunikation mit dem Schulteam. Bis heute bieten wir Support, Verbesserungen und persönliche Beratung – eine dauerhafte Beziehung, die wir mit großer Zuneigung pflegen.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title: 'Anker Paints – Webplattform für industrielle Lacklösungen',
      description:
        'Bei navike21 haben wir die digitale Plattform von Anker Paints entworfen und entwickelt, einer Marke für hochwertige Industrielacke. Das Projekt umfasste die Organisation von Inhalten und Produktdatenblättern sowie ein schnelles und praktisches Angebotssystem, das den Kunden die Auswahl der passenden Farbe erleichtert. Unser Ziel war es, Vertrauen und Stabilität zu vermitteln – mit einer klaren, funktionalen Website, die das Wachstum der Marke in verschiedenen Branchen unterstützt.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Plattform für personalisierte Songs',
      description:
        'Bei navike21 begleiteten wir die Entstehung von Beats Música von Grund auf und entwickelten eine digitale Plattform, die es ermöglicht, personalisierte Akustiksongs zu bestellen und sie in nur 24 Stunden zu erhalten. Wir gestalteten ein agiles und sicheres Erlebnis – von der Webnavigation bis zum Online-Kaufprozess – und achteten auf jedes Detail, damit die Nutzer ihre Inspiration teilen und in ein einzigartiges Geschenk verwandeln können. Ein Projekt, das unsere Fähigkeit hervorhebt, Ideen in digitale Lösungen mit emotionaler Wirkung zu verwandeln.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Handgemachte Konditorei mit Familienherz',
      description:
        'Dieses Projekt spiegelt den Geschmack einer gelebten Familiengeschichte wider. Bei navike21 entwickelten wir einen vollständigen Onlineshop für Tentaciones Gourmet, eine Marke mit häuslichem Geist und handwerklichem Ansatz, die heute mit viel Hingabe weiter wächst. Wir unterstützen ihr Team kontinuierlich mit technischem Support, strategischer Beratung und laufenden Verbesserungen, um den Verkauf zu fördern. Gemeinsam mit Ale und Carla Melly und ihrem empathischen Team arbeiten wir weiterhin daran, dass jedes Dessert mehr Menschen erreicht, ohne seinen familiären Charakter zu verlieren.',
      gallery: tentacionesGourmet
    }
  ],
  [FR]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Projet digital pour événements',
      description:
        'Chez navike21, nous avons créé la plateforme digitale de Circurela, une expérience visuelle unique conçue pour se démarquer lors de chaque événement. Avec une approche fraîche et immersive, nous avons transformé leur idée en un site web attrayant et dynamique, prêt à capter l’attention de ceux qui recherchent des souvenirs inoubliables. Un projet qui reflète notre engagement envers la créativité, le souci du détail et l’impact réel, en exploitant pleinement les ressources visuelles et techniques pour une performance impeccable.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Catalogue web d’entreprise',
      description:
        'Chez navike21, nous avons développé une plateforme digitale dynamique qui présente de manière claire et attrayante la gamme de produits de protection industrielle de Carbyne Safety. Le site, construit sous WordPress, permet aux utilisateurs d’explorer le catalogue et de demander des devis facilement. Notre travail a couvert l’architecture de l’information, l’optimisation des produits et un design en accord avec l’identité visuelle de la marque, garantissant une expérience solide et professionnelle qui renforce sa présence digitale.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Ecommerce gourmet premium',
      description:
        'Nous avons conçu et développé une boutique en ligne élégante et fonctionnelle pour Eurogourmet, une marque spécialisée dans les produits gastronomiques. Le projet a inclus la structuration du catalogue digital, le chargement et l’optimisation des produits, le design visuel ainsi que le conseil sur les passerelles de paiement. Grâce à une collaboration étroite avec le client, nous avons créé une expérience d’achat fluide qui reflète le caractère exclusif de son catalogue gourmet et renforce son positionnement digital.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce spécialisé dans les solutions énergétiques',
      description:
        'Chez navike21, nous avons développé un site ecommerce stratégique pour rkPower, une entreprise internationale spécialisée dans la fabrication de générateurs électriques. Le projet a inclus l’architecture du catalogue digital, la catégorisation des produits, l’optimisation visuelle et une coordination constante avec leur équipe pour refléter fidèlement la qualité de leur offre. La solution renforce leur présence digitale et élargit leur capacité à servir des clients dans plusieurs pays.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Site institutionnel à vocation culturelle et éducative',
      description:
        'Ce projet représente une étape très spéciale dans l’histoire de navike21, puisqu’il s’agit de notre tout premier développement officiel. Nous avons collaboré avec le Colegio Peruano Japonés La Unión pour créer un site institutionnel en accord avec ses valeurs, son identité culturelle Nikkei et son approche éducative moderne. Ce fut une expérience enrichissante, marquée par une communication étroite et constante avec l’équipe de l’école. Au fil du temps, nous avons continué à fournir support, améliorations et conseils personnalisés, consolidant une relation durable que nous chérissons avec beaucoup d’affection.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title:
        'Anker Paints – Plateforme web pour solutions de peintures industrielles',
      description:
        'Chez navike21, nous avons conçu et développé la plateforme digitale d’Anker Paints, une marque spécialisée dans la fabrication de peintures industrielles de haute qualité. Le projet a inclus l’organisation des contenus et des fiches produits, ainsi qu’un système de devis rapide et pratique qui facilite le choix de la peinture idéale pour chaque besoin. Notre objectif était de transmettre confiance et solidité grâce à un site clair, fonctionnel et prêt à accompagner la croissance de la marque dans divers secteurs.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Plateforme de chansons personnalisées',
      description:
        'Chez navike21, nous avons accompagné la création de Beats Música dès ses débuts, en développant une plateforme digitale qui permet de commander des chansons acoustiques personnalisées et de les recevoir en seulement 24 heures. Nous avons conçu une expérience agile et sécurisée, de la navigation web au processus d’achat en ligne, en soignant chaque détail pour que les utilisateurs puissent partager leur inspiration et la transformer en un cadeau unique. Un projet qui met en valeur notre capacité à transformer les idées en solutions digitales à fort impact émotionnel.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Pâtisserie artisanale au cœur familial',
      description:
        'Ce projet reflète la saveur d’une histoire familiale devenue réalité. Chez navike21, nous avons développé une boutique en ligne complète pour Tentaciones Gourmet, une marque au caractère familial et à l’approche artisanale qui continue de grandir avec passion. Nous soutenons leur équipe de manière continue en fournissant assistance technique, conseils stratégiques et améliorations constantes pour stimuler leurs ventes. Aux côtés d’Ale et Carla Melly et de leur équipe chaleureuse et empathique, nous continuons à collaborer pour que chaque dessert atteigne un public plus large sans perdre son essence familiale.',
      gallery: tentacionesGourmet
    }
  ],
  [IT]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Progetto digitale per eventi',
      description:
        'In navike21 abbiamo creato la piattaforma digitale di Circurela, un’esperienza visiva unica pensata per distinguersi in ogni evento. Con un approccio fresco e coinvolgente, abbiamo trasformato la loro idea in un sito web attraente e dinamico, pronto a catturare l’attenzione di chi cerca ricordi indimenticabili. Un progetto che riflette il nostro impegno per la creatività, la cura dei dettagli e l’impatto reale, sfruttando al meglio risorse visive e tecniche per prestazioni impeccabili.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Catalogo web aziendale',
      description:
        'In navike21 abbiamo sviluppato una piattaforma digitale dinamica che presenta in modo chiaro e accattivante la gamma di prodotti di protezione industriale di Carbyne Safety. Il sito, realizzato in WordPress, consente agli utenti di esplorare il catalogo e richiedere preventivi con facilità. Il nostro lavoro ha incluso l’architettura delle informazioni, l’ottimizzazione dei prodotti e un design coerente con l’identità visiva del marchio, garantendo un’esperienza solida e professionale che rafforza la sua presenza digitale.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Ecommerce gourmet premium',
      description:
        'Abbiamo progettato e sviluppato un elegante e funzionale negozio online per Eurogourmet, un marchio specializzato in prodotti gastronomici. Il progetto ha incluso la strutturazione del catalogo digitale, il caricamento e l’ottimizzazione dei prodotti, il design visivo e la consulenza sui metodi di pagamento. Grazie a una stretta collaborazione con il cliente, abbiamo realizzato un’esperienza di acquisto fluida che trasmette il carattere esclusivo del suo catalogo gourmet e consolida il suo posizionamento digitale.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce per soluzioni energetiche',
      description:
        'In navike21 abbiamo sviluppato un sito ecommerce strategico per rkPower, un’azienda internazionale specializzata nella produzione di generatori elettrici. Il progetto ha incluso l’architettura del catalogo digitale, la categorizzazione dei prodotti, l’ottimizzazione visiva e una stretta collaborazione con il loro team per riflettere fedelmente la qualità della loro offerta. La soluzione rafforza la loro presenza digitale ed espande la capacità di servire clienti in più paesi.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Sito istituzionale con essenza culturale ed educativa',
      description:
        'Questo progetto rappresenta una tappa molto speciale nella storia di navike21, essendo il nostro primo sviluppo ufficiale. Abbiamo collaborato con il Colegio Peruano Japonés La Unión per creare un sito istituzionale in linea con i suoi valori, la sua identità culturale Nikkei e il suo approccio educativo moderno. È stata un’esperienza arricchente, caratterizzata da una comunicazione costante e ravvicinata con il team della scuola. Nel tempo, abbiamo continuato a fornire supporto, miglioramenti e consulenza personalizzata, consolidando un rapporto duraturo che ricordiamo con grande affetto.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title:
        'Anker Paints – Piattaforma web per soluzioni di vernici industriali',
      description:
        'In navike21 abbiamo progettato e sviluppato la piattaforma digitale di Anker Paints, un marchio specializzato nella produzione di vernici industriali di alta qualità. Il progetto ha incluso l’organizzazione dei contenuti e delle schede prodotto, oltre a un sistema di preventivi rapido e pratico che facilita ai clienti la scelta della vernice ideale per le loro esigenze. Il nostro obiettivo era trasmettere fiducia e solidità attraverso un sito chiaro e funzionale, pensato per accompagnare la crescita del marchio in diversi settori.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Piattaforma di canzoni personalizzate',
      description:
        'In navike21 abbiamo accompagnato la nascita di Beats Música fin dalle fondamenta, creando una piattaforma digitale che consente di ordinare canzoni acustiche personalizzate e riceverle in sole 24 ore. Abbiamo progettato un’esperienza agile e sicura, dalla navigazione del sito al processo di acquisto online, curando ogni dettaglio affinché gli utenti possano condividere la loro ispirazione e trasformarla in un regalo unico. Un progetto che mette in evidenza la nostra capacità di trasformare idee in soluzioni digitali ad alto impatto emotivo.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title:
        'Tentaciones Gourmet – Pasticceria artigianale con cuore familiare',
      description:
        'Questo progetto riflette il sapore di una storia familiare diventata realtà. In navike21 abbiamo sviluppato un negozio online completo per Tentaciones Gourmet, un marchio con spirito casalingo e approccio artigianale che oggi continua a crescere con dedizione. Accompagniamo continuamente il loro team offrendo supporto tecnico, consulenza strategica e miglioramenti costanti per potenziare le vendite. Insieme ad Ale e Carla Melly e al loro team empatico e caloroso, continuiamo a collaborare affinché ogni dolce raggiunga più persone senza perdere la sua essenza familiare.',
      gallery: tentacionesGourmet
    }
  ],
  [JA]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – イベント向けデジタルプロジェクト',
      description:
        'navike21はCircurelaのデジタルプラットフォームを制作し、イベントごとに際立つユニークなビジュアル体験を実現しました。新鮮で魅力的なアプローチで、アイデアを魅力的かつダイナミックなウェブサイトに変換し、忘れられない思い出を求める人々の心をつかみます。本プロジェクトは、創造性、細部へのこだわり、そして確実な成果に対する私たちの取り組みを反映し、視覚的・技術的資源を最大限に活用して、完璧なパフォーマンスを実現しています。',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 企業向けウェブカタログ',
      description:
        'navike21はCarbyne Safetyの産業用保護具製品を明確かつ魅力的に紹介するデジタルプラットフォームを開発しました。WordPressで構築された本サイトでは、ユーザーがカタログを簡単に閲覧し、見積依頼が可能です。情報設計、製品最適化、ブランドのビジュアルアイデンティティに基づいたデザインを担当し、堅実でプロフェッショナルなユーザー体験を提供しながら、デジタルプレゼンスを強化しました。',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – プレミアムグルメECサイト',
      description:
        'navike21はEurogourmetのために、洗練された機能的なオンラインストアを設計・開発しました。同ブランドはグルメ食品に特化しており、プロジェクトにはデジタルカタログの構築、製品の登録と最適化、ビジュアルデザイン、決済方法に関するコンサルティングが含まれています。クライアントと密接に連携し、ブランドの高級感を反映したシームレスな購買体験を実現し、デジタル市場での存在感を確立しました。',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – エネルギーソリューション向けECサイト',
      description:
        'navike21は国際的な発電機メーカーであるrkPowerのために、戦略的なECサイトを開発しました。プロジェクトにはデジタルカタログの設計、製品のカテゴリー化、ビジュアル最適化が含まれ、同社のチームと緊密に連携してその品質を忠実に反映しました。このソリューションにより、デジタルプレゼンスを強化し、複数の国での顧客対応を拡大することが可能となりました。',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'コレヒオ・ラ・ウニオン – 文化と教育を融合した学校サイト',
      description:
        '本プロジェクトは、navike21にとって特別な節目となるもので、最初の正式な開発案件でした。私たちはペルー日系学校「コレヒオ・ラ・ウニオン」と協力し、その価値観や日系文化的アイデンティティ、そして現代的な教育アプローチを反映した学校サイトを制作しました。この経験は、学校のチームとの継続的で緊密なコミュニケーションによって支えられ、非常に充実したものとなりました。その後もサポートや改善、カスタマイズされたアドバイスを提供し、長期的な関係を築いており、今でも大切な思い出として心に残っています。',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title: 'Anker Paints – 産業用塗料ソリューションのウェブプラットフォーム',
      description:
        'navike21は高品質な産業用塗料を製造するAnker Paintsのデジタルプラットフォームを設計・開発しました。プロジェクトには、コンテンツと製品ページの整理、そして顧客が最適な塗料を簡単に選べる迅速で便利な見積システムが含まれています。私たちの目標は、信頼性と堅実さを伝える明確で機能的なウェブサイトを構築し、同ブランドの成長を多様な業界で支えることでした。',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – オーダーメイド楽曲のプラットフォーム',
      description:
        'navike21はBeats Músicaの立ち上げから携わり、パーソナライズされたアコースティック楽曲を注文し、わずか24時間で受け取れるデジタルプラットフォームを構築しました。サイトのナビゲーションから購入プロセスまで、迅速で安全な体験を設計し、ユーザーが自身のインスピレーションを共有し、それを特別な贈り物へと変えられるよう配慮しました。本プロジェクトは、アイデアを感情的に強く響くデジタルソリューションへと変える、私たちの力を示すものです。',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 家族の温かみを込めた手作り菓子のECサイト',
      description:
        'このプロジェクトは、家族の物語から生まれた味わいを形にしています。navike21はTentaciones Gourmetのために、心温まる家庭的な雰囲気と職人のこだわりを持つ完全なオンラインショップを開発しました。現在も技術サポート、戦略的コンサルティング、継続的な改善を提供し、販売力を強化し続けています。アレ＆カルラ・メリ夫妻と、その温かく共感的なチームと共に、家庭的な本質を損なうことなく、より多くの人々に甘い体験を届ける取り組みを続けています。',
      gallery: tentacionesGourmet
    }
  ],
  [KO]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – 이벤트를 위한 디지털 프로젝트',
      description:
        'navike21은 Circurela를 위해 독창적인 시각적 경험을 제공하는 디지털 플랫폼을 제작했습니다. 신선하고 몰입감 있는 접근을 통해 그들의 제안을 매력적이고 역동적인 웹사이트로 변환하여, 잊을 수 없는 순간을 찾는 이들의 관심을 끌 수 있도록 했습니다. 본 프로젝트는 창의성, 세밀함, 그리고 실질적인 임팩트에 대한 우리의 헌신을 반영하며, 시각적·기술적 자원을 최대한 활용하여 완벽한 성능을 구현했습니다.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 기업용 웹 카탈로그',
      description:
        'navike21은 Carbyne Safety의 산업 안전 보호 제품 라인을 명확하고 매력적으로 소개하는 동적 디지털 플랫폼을 개발했습니다. WordPress로 구축된 이 웹사이트는 카탈로그 탐색과 견적 요청을 간편하게 할 수 있도록 설계되었습니다. 우리의 작업은 정보 아키텍처, 제품 최적화, 그리고 브랜드의 시각적 아이덴티티와 일치하는 디자인을 포함했으며, 전문적이고 견고한 경험을 통해 브랜드의 디지털 존재감을 강화했습니다.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – 프리미엄 지향의 고급 식품 전자상거래',
      description:
        '우리는 고급 식품에 특화된 Eurogourmet을 위해 세련되고 기능적인 온라인 스토어를 설계하고 개발했습니다. 프로젝트에는 디지털 카탈로그 구조화, 제품 업로드 및 최적화, 비주얼 디자인, 결제 게이트웨이 컨설팅이 포함되었습니다. 고객과의 긴밀한 협업을 통해 매끄럽고 프리미엄한 쇼핑 경험을 구현하여 브랜드의 독점적인 정체성을 디지털 환경에서 강화했습니다.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – 에너지 솔루션 전문 전자상거래',
      description:
        'navike21은 발전기 제조에 특화된 국제 기업 rkPower를 위해 전략적인 전자상거래 사이트를 개발했습니다. 프로젝트에는 디지털 카탈로그 아키텍처, 제품 카테고리 구성, 시각적 최적화, 그리고 그들의 팀과의 긴밀한 협업이 포함되어, 제품 품질을 충실히 반영했습니다. 이 솔루션은 브랜드의 디지털 존재감을 강화하고 여러 국가에서 고객을 지원할 수 있는 역량을 확장합니다.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'La Unión 학교 – 문화와 교육 본질을 담은 기관 웹사이트',
      description:
        '이 프로젝트는 navike21의 역사에서 매우 특별한 이정표로, 우리의 첫 공식 개발 사례입니다. 우리는 페루-일본 학교 La Unión과 협력하여 그들의 가치, 니케이 문화 정체성, 그리고 현대적인 교육 방침과 일치하는 기관 웹사이트를 제작했습니다. 이는 학교 팀과의 긴밀하고 지속적인 소통을 바탕으로 한 풍부한 경험이었습니다. 시간이 흐른 지금도 우리는 지원, 개선, 맞춤형 컨설팅을 제공하며 특별한 애정을 담은 지속적인 관계를 이어가고 있습니다.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title: 'Anker Paints – 산업용 페인트 솔루션을 위한 웹 플랫폼',
      description:
        'navike21은 고품질 산업용 페인트 제조에 전념하는 Anker Paints를 위해 디지털 플랫폼을 설계하고 개발했습니다. 프로젝트에는 콘텐츠 및 제품 정보 구성, 필요에 맞는 최적의 페인트를 쉽게 선택할 수 있도록 돕는 빠르고 효율적인 견적 시스템이 포함되었습니다. 우리의 목표는 명확하고 기능적인 웹사이트를 통해 신뢰와 안정감을 전달하며, 브랜드가 다양한 산업 분야에서 성장할 수 있도록 지원하는 것이었습니다.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – 맞춤형 노래 제작 플랫폼',
      description:
        'navike21은 Beats Música의 출범을 처음부터 함께하며, 사용자가 맞춤형 어쿠스틱 노래를 주문하고 단 24시간 안에 받아볼 수 있는 디지털 플랫폼을 제작했습니다. 웹 탐색부터 온라인 구매 흐름까지, 우리는 안전하고 매끄러운 경험을 설계하여 사용자가 영감을 공유하고 이를 특별한 선물로 바꿀 수 있도록 세심하게 신경 썼습니다. 본 프로젝트는 감정적인 임팩트를 가진 디지털 솔루션으로 아이디어를 실현하는 우리의 역량을 보여줍니다.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 가족의 마음을 담은 수제 제과',
      description:
        '이 프로젝트는 가족의 이야기를 담은 특별한 맛을 구현합니다. navike21은 Tentaciones Gourmet을 위해 완전한 온라인 스토어를 개발했으며, 이 브랜드는 가정적인 감성과 장인 정신을 담아 꾸준히 성장하고 있습니다. 우리는 기술 지원, 전략 자문, 지속적인 개선을 통해 판매를 강화하고 있으며, Ale와 Carla Melly 및 그들의 팀과 함께 각 디저트가 가족의 본질을 잃지 않고 더 많은 사람들에게 전달되도록 돕고 있습니다.',
      gallery: tentacionesGourmet
    }
  ],
  [PT]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – Projeto digital para eventos',
      description:
        'Na navike21 criamos a plataforma digital da Circurela, uma experiência visual única pensada para se destacar em cada evento. Com uma abordagem fresca e envolvente, transformamos sua proposta em um site atrativo, dinâmico e pronto para chamar a atenção de quem busca lembranças inesquecíveis. Um projeto que reflete nosso compromisso com a criatividade, o detalhe e o impacto real, aproveitando ao máximo recursos visuais e técnicos para um desempenho impecável.',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – Catálogo web corporativo',
      description:
        'Na navike21 desenvolvemos uma plataforma digital dinâmica que apresenta de forma clara e atrativa a linha de produtos de proteção industrial da Carbyne Safety. O site, construído em WordPress, permite explorar o catálogo e solicitar orçamentos de maneira simples. Nosso trabalho abrangeu a arquitetura da informação, otimização de produtos e um design alinhado com a identidade visual, garantindo uma experiência sólida e profissional que fortalece a presença digital da marca.',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – Ecommerce gourmet com foco premium',
      description:
        'Desenhamos e desenvolvemos uma loja online elegante e funcional para a Eurogourmet, marca especializada em produtos delicatessen. O projeto incluiu a estruturação do catálogo digital, carregamento e otimização de produtos, design visual e consultoria em meios de pagamento. Graças a uma coordenação próxima com o cliente, alcançamos uma experiência de compra fluida que transmite o caráter exclusivo de seu catálogo gourmet e consolida seu posicionamento no ambiente digital.',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – Ecommerce especializado em soluções energéticas',
      description:
        'Na navike21 desenvolvemos um site ecommerce estratégico para a rkPower, empresa com presença internacional dedicada à fabricação de geradores elétricos. O projeto incluiu a arquitetura do catálogo digital, categorização de produtos, otimização visual e uma coordenação constante com sua equipe para refletir fielmente a qualidade de sua oferta. A solução fortalece sua presença digital e amplia sua capacidade de atendimento a clientes em diversos países.',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title:
        'Colegio La Unión – Site institucional com essência cultural e educacional',
      description:
        'Este projeto representa um marco muito especial na história da navike21, por ser nosso primeiro desenvolvimento oficial. Colaboramos com o Colegio Peruano Japonês La Unión para criar um site institucional alinhado a seus valores, sua identidade cultural nikkei e sua proposta educacional moderna. Foi uma experiência enriquecedora, marcada por uma comunicação próxima e constante com a equipe do colégio. Ao longo do tempo, continuamos oferecendo suporte, melhorias e consultoria personalizada, consolidando uma relação duradoura que recordamos com especial carinho.',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title:
        'Anker Paints – Plataforma web para soluções em tintas industriais',
      description:
        'Na navike21 projetamos e desenvolvemos a plataforma digital da Anker Paints, marca dedicada à fabricação de tintas industriais de alta qualidade. O projeto incluiu a organização do conteúdo e fichas de produtos, bem como um sistema de orçamentos ágil e prático que facilita a escolha da tinta ideal para cada necessidade. Nosso objetivo foi transmitir confiança e solidez com um site claro, funcional e pronto para acompanhar o crescimento da marca em diversos setores.',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – Plataforma de músicas personalizadas',
      description:
        'Na navike21 acompanhamos o nascimento da Beats Música desde sua base, criando uma plataforma digital que possibilita encomendar músicas acústicas personalizadas e recebê-las em apenas 24 horas. Desenhamos uma experiência ágil e segura, desde a navegação no site até o fluxo de compra online, cuidando de cada detalhe para que os usuários possam compartilhar sua inspiração e transformá-la em um presente único. Um projeto que reflete nossa capacidade de transformar ideias em soluções digitais com impacto emocional.',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – Confeitaria artesanal com coração familiar',
      description:
        'Este projeto reflete o sabor de uma história familiar transformada em realidade. Na navike21 desenvolvemos uma loja online completa para a Tentaciones Gourmet, uma marca com alma caseira e um enfoque artesanal que continua crescendo com muito carinho. Acompanhamos continuamente sua equipe oferecendo suporte técnico, consultoria estratégica e melhorias constantes para impulsionar suas vendas. Junto com Ale e Carla Melly e sua equipe, seguimos colaborando para que cada sobremesa chegue a mais pessoas sem perder sua essência familiar.',
      gallery: tentacionesGourmet
    }
  ],
  [ZH]: [
    {
      id: 1,
      category: [WEB_SITES],
      clientId: 'circurela',
      title: 'Circurela – 活动数字项目',
      description:
        '在 navike21，我们为 Circurela 打造了数字平台，一个专为每场活动脱颖而出的独特视觉体验。通过新颖而引人入胜的方式，我们将其理念转化为一个吸引人、充满活力的网站，准备好打动那些寻找难忘回忆的人们。该项目体现了我们对创意、细节和实际影响的承诺，充分利用视觉和技术资源，确保完美的表现。',
      gallery: circurela
    },
    {
      id: 2,
      category: [WEB_SITES],
      clientId: 'carbyne',
      title: 'Carbyne Safety – 企业级产品目录网站',
      description:
        '在 navike21，我们开发了一个动态数字平台，以清晰而有吸引力的方式展示 Carbyne Safety 的工业防护产品系列。该网站基于 WordPress 构建，用户可以轻松浏览目录并请求报价。我们的工作涵盖了信息架构、产品优化以及符合视觉识别的设计，确保为用户提供稳健且专业的体验，进一步增强了品牌的数字存在感。',
      gallery: carbyneSafety
    },
    {
      id: 3,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'eurogourmet',
      title: 'Eurogourmet – 精品电商平台',
      description:
        '我们为 Eurogourmet（专注于美食产品的品牌）设计并开发了一个优雅且功能完善的在线商店。该项目包括数字目录结构设计、产品上传与优化、视觉设计以及支付方式咨询。通过与客户的紧密协作，我们实现了流畅的购物体验，传递出其精品目录的独特特质，并巩固了其在数字领域的定位。',
      gallery: eurogourmet
    },
    {
      id: 4,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'rk-power',
      title: 'RK Power – 专注能源解决方案的电商平台',
      description:
        '在 navike21，我们为 rkPower（在国际市场上具有影响力的发电机制造公司）开发了一个战略性电商网站。项目包括数字目录架构、产品分类、视觉优化以及与其团队的持续协调，以真实展现其产品品质。该解决方案强化了其数字存在感，并提升了其服务全球客户的能力。',
      gallery: rkPower
    },
    {
      id: 5,
      category: [WEB_SITES],
      clientId: 'colegio-la-union',
      title: 'Colegio La Unión – 具有文化与教育特色的机构网站',
      description:
        '该项目在 navike21 的发展历程中具有特殊意义，因为它是我们第一个正式开发的项目。我们与秘鲁日裔学校 Colegio La Unión 合作，创建了一个契合其价值观、日裔文化身份和现代教育理念的机构网站。这是一段充满意义的经历，得益于与校方团队的紧密沟通与合作。直至今日，我们仍持续为其提供支持、改进与个性化咨询，这段长期合作关系让我们倍感珍惜。',
      gallery: colegioLaUnion
    },
    {
      id: 6,
      category: [WEB_SITES],
      clientId: 'anker',
      title: 'Anker Paints – 工业涂料数字平台',
      description:
        '在 navike21，我们为 Anker Paints（致力于生产高品质工业涂料的品牌）设计并开发了数字平台。项目内容包括产品信息与资料的组织，以及便捷高效的报价系统，帮助用户快速选择理想的涂料。我们的目标是通过清晰、功能完善的网站传递信任与稳固，为品牌在多个行业的成长提供数字支持。',
      gallery: ankerPaints
    },
    {
      id: 7,
      category: [WEB_SITES, ECOMMERCE],
      clientId: 'beats',
      title: 'Beats Música – 个性化音乐平台',
      description:
        '在 navike21，我们从零开始打造了 Beats Música 的数字平台，使用户能够订制个性化原声歌曲，并在 24 小时内收到成品。我们设计了一个流畅且安全的体验，从网站导航到在线购买流程，细致打磨每个环节，让用户能够分享灵感，并将其转化为独特的礼物。该项目体现了我们将创意转化为具有情感影响力的数字解决方案的能力。',
      gallery: beatsMusica
    },
    {
      id: 8,
      category: [ECOMMERCE, WEB_SITES],
      clientId: 'tentaciones-gourmet',
      title: 'Tentaciones Gourmet – 融合家庭温情的手工糕点店',
      description:
        '该项目展现了一段家庭故事化为现实的美好成果。在 navike21，我们为 Tentaciones Gourmet 打造了一个完整的在线商店，这是一家充满家庭气息、专注于手工制作的品牌。我们持续为其团队提供技术支持、战略咨询和不断优化，帮助其提升销售。与 Ale 和 Carla Melly 及其团队携手，我们确保每一份甜品都能送达更多人手中，同时保留其原有的家庭本真。',
      gallery: tentacionesGourmet
    }
  ]
}
