import { ELanguage } from '@Enums/languages'
import { getInfoNavike21 } from '@Utils/getInfoNavike21'

const { numberOfYears, numberOfClients, numberOfProjects } = getInfoNavike21()

export const aboutSectionTranslate = {
  [ELanguage.DE]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Jahre Erfahrung'
    },
    textAbout: {
      preTitle: 'Willkommen bei navike21',
      title: 'Mehr als Software, wir schaffen Lösungen',
      description:
        'Bei navike21 sind wir ein Team, das von Technologie und Design begeistert ist. Wir schaffen innovative und maßgeschneiderte digitale Lösungen, um Unternehmen zu stärken und Wirkung zu erzielen.',
      controlAction: 'Lerne uns kennen',
      numberOfProjects,
      descriptionProjects: 'Abgeschlossene Projekte',
      numberOfClients,
      descriptionClients: 'Kunden, die uns vertrauen'
    }
  },
  [ELanguage.EN]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Years of experience'
    },
    textAbout: {
      preTitle: 'Welcome to navike21',
      title: 'More than software, we create solutions',
      description:
        'At navike21, we are a team passionate about technology and design. We create innovative and customized digital solutions to boost businesses and generate impact.',
      controlAction: 'Get to know us',
      numberOfProjects,
      descriptionProjects: 'Completed projects',
      numberOfClients,
      descriptionClients: 'Clients who trust us'
    }
  },
  [ELanguage.ES]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Años de experiencia'
    },
    textAbout: {
      preTitle: 'Bienvenido a navike21',
      title: 'Mas que software, creamos soluciones',
      description:
        'En navike21, somos un equipo apasionado por la tecnología y el diseño. Creamos soluciones digitales innovadoras y personalizadas para impulsar negocios y generar impacto.',
      controlAction: 'Conócenos',
      numberOfProjects,
      descriptionProjects: 'Proyectos completados',
      numberOfClients,
      descriptionClients: 'Clientes que confían en nosotros'
    }
  },
  [ELanguage.FR]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Années d’expérience'
    },
    textAbout: {
      preTitle: 'Bienvenue chez navike21',
      title: 'Plus que des logiciels, nous créons des solutions',
      description:
        'Chez navike21, nous sommes une équipe passionnée par la technologie et le design. Nous créons des solutions numériques innovantes et personnalisées pour dynamiser les entreprises et générer de l’impact.',
      controlAction: 'Faisons connaissance',
      numberOfProjects,
      descriptionProjects: 'Projets réalisés',
      numberOfClients,
      descriptionClients: 'Clients qui nous font confiance'
    }
  },
  [ELanguage.IT]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Anni di esperienza'
    },
    textAbout: {
      preTitle: 'Benvenuti in navike21',
      title: 'Più che software, creiamo soluzioni',
      description:
        'In navike21, siamo un team appassionato di tecnologia e design. Creiamo soluzioni digitali innovative e personalizzate per potenziare le aziende e generare impatto.',
      controlAction: 'Conosciamoci',
      numberOfProjects,
      descriptionProjects: 'Progetti completati',
      numberOfClients,
      descriptionClients: 'Clienti che si fidano di noi'
    }
  },
  [ELanguage.JP]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: '年の経験'
    },
    textAbout: {
      preTitle: 'navike21へようこそ',
      title: 'ソフトウェア以上、私たちはソリューションを作成します',
      description:
        'navike21では、テクノロジーとデザインに情熱を注いでいるチームです。ビジネスを強化し、影響を与えるために、革新的でカスタマイズされたデジタルソリューションを作成します。',
      controlAction: '私たちを知ってください',
      numberOfProjects,
      descriptionProjects: '完了したプロジェクト',
      numberOfClients,
      descriptionClients: '私たちを信頼するクライアント'
    }
  },
  [ELanguage.KO]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: '년의 경험'
    },
    textAbout: {
      preTitle: 'navike21에 오신 것을 환영합니다',
      title: '소프트웨어 이상, 우리는 솔루션을 만듭니다',
      description:
        'navike21에서는 기술과 디자인에 열정을 가진 팀입니다. 비즈니스를 강화하고 영향을 미치기 위해 혁신적이고 맞춤화된 디지털 솔루션을 만듭니다.',
      controlAction: '우리를 알아보세요',
      numberOfProjects,
      descriptionProjects: '완료된 프로젝트',
      numberOfClients,
      descriptionClients: '우리에게 신뢰를 주는 고객'
    }
  },
  [ELanguage.PT]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'Anos de experiência'
    },
    textAbout: {
      preTitle: 'Bem-vindo à navike21',
      title: 'Mais do que software, criamos soluções',
      description:
        'Na navike21, somos uma equipe apaixonada por tecnologia e design. Criamos soluções digitais inovadoras e personalizadas para impulsionar negócios e gerar impacto.',
      controlAction: 'Conheça-nos',
      numberOfProjects,
      descriptionProjects: 'Projetos concluídos',
      numberOfClients,
      descriptionClients: 'Clientes que confiam em nós'
    }
  },
  [ELanguage.RU]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: 'лет опыта'
    },
    textAbout: {
      preTitle: 'Добро пожаловать в navike21',
      title: 'Больше, чем программное обеспечение, мы создаем решения',
      description:
        'В navike21 мы команда, увлеченная технологиями и дизайном. Мы создаем инновационные и индивидуальные цифровые решения для развития бизнеса и создания эффекта.',
      controlAction: 'Познакомьтесь с нами',
      numberOfProjects,
      descriptionProjects: 'Завершенные проекты',
      numberOfClients,
      descriptionClients: 'Клиенты, которые доверяют нам'
    }
  },
  [ELanguage.ZH]: {
    bannerAbout: {
      numberOfYears,
      descriptionNumberOfYears: '年的经验'
    },
    textAbout: {
      preTitle: '欢迎来到 navike21',
      title: '不仅仅是软件，我们创造解决方案',
      description:
        '在 navike21，我们是一支对技术和设计充满热情的团队。我们创建创新和定制的数字解决方案，以推动企业发展并产生影响。',
      controlAction: '了解我们',
      numberOfProjects,
      descriptionProjects: '已完成的项目',
      numberOfClients,
      descriptionClients: '信任我们的客户'
    }
  }
}
