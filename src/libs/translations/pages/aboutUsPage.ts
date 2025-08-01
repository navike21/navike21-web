import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export type THeroSectionAbout = {
  [key in TLanguageKey]: {
    title: string
    description: string
  }
}

export type TPillar = {
  id: string
  title: string
  description: string
}

export type TPillarsAboutUs = {
  [key in TLanguageKey]: {
    title: string
    items: TPillar[]
  }
}

export type THistorySectionAbout = {
  [key in TLanguageKey]: {
    subTitle: string
    title: string
    description: string[]
  }
}

export const heroSectionAbout: THeroSectionAbout = {
  [ES]: {
    title: 'Personas que crean **tecnología con propósito**',
    description:
      'Somos un equipo que transforma ideas en experiencias digitales significativas. Creemos en el poder de la colaboración, el aprendizaje continuo y la responsabilidad.'
  },
  [EN]: {
    title: 'People creating **technology with purpose**',
    description:
      'We are a team that transforms ideas into meaningful digital experiences. We believe in the power of collaboration, continuous learning, and responsibility.'
  },
  [DE]: {
    title: 'Menschen, die **Technologie mit Sinn** erschaffen',
    description:
      'Wir sind ein Team, das Ideen in bedeutungsvolle digitale Erlebnisse verwandelt. Wir glauben an die Kraft der Zusammenarbeit, des kontinuierlichen Lernens und der Verantwortung.'
  },
  [FR]: {
    title: 'Des personnes qui créent une **technologie porteuse de sens**',
    description:
      'Nous sommes une équipe qui transforme les idées en expériences digitales porteuses de sens. Nous croyons en la force de la collaboration, de l’apprentissage continu et de la responsabilité.'
  },
  [IT]: {
    title: 'Persone che creano **tecnologia con uno scopo**',
    description:
      'Siamo un team che trasforma le idee in esperienze digitali significative. Crediamo nella forza della collaborazione, dell’apprendimento continuo e della responsabilità.'
  },
  [JA]: {
    title: '目的を持った**テクノロジーを創る人々**',
    description:
      '私たちは、アイデアを意味のあるデジタル体験へと変えるチームです。協力、継続的な学び、そして責任の力を信じています。'
  },
  [KO]: {
    title: '**목적 있는 기술**을 만드는 사람들',
    description:
      '우리는 아이디어를 의미 있는 디지털 경험으로 바꾸는 팀입니다. 협업, 지속적인 학습, 그리고 책임의 힘을 믿습니다.'
  },
  [PT]: {
    title: 'Pessoas que criam **tecnologia com propósito**',
    description:
      'Somos uma equipe que transforma ideias em experiências digitais significativas. Acreditamos no poder da colaboração, do aprendizado contínuo e da responsabilidade.'
  },
  [ZH]: {
    title: '创造**有意义科技**的人们',
    description:
      '我们是一支将创意转化为有意义数字体验的团队。我们相信协作、持续学习和责任的力量。'
  }
}

export const pillarsAboutUs: TPillarsAboutUs = {
  [ES]: {
    title: 'Nuestros **6 pilares** principales',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Tecnología con propósito',
        description:
          'No desarrollamos por moda, sino para resolver problemas reales y mejorar la vida de las personas.'
      },
      {
        id: 'peopleAtTheCenter',
        title: 'Personas en el centro',
        description:
          'Cada línea de código parte de la empatía. Valoramos a quienes usan, crean y confían en nuestras soluciones.'
      },
      {
        id: 'commitmentFulfilled',
        title: 'Compromiso que se cumple',
        description:
          'Nos tomamos en serio cada entrega. La responsabilidad es parte del ADN de todo el equipo.'
      },
      {
        id: 'constantGrowth',
        title: 'Crecimiento constante',
        description:
          'Aprendemos, iteramos, mejoramos. Porque no creemos en lo perfecto, sino en lo que evoluciona.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Calidad sin atajos',
        description:
          'Diseñamos con intención. El detalle, la estabilidad y la experiencia del usuario son prioridad.'
      },
      {
        id: 'realProximity',
        title: 'Cercanía real',
        description:
          'Nos gusta hablar claro, colaborar de forma honesta y construir relaciones duraderas.'
      }
    ]
  },
  [EN]: {
    title: 'Our **6 core** pillars',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Technology with purpose',
        description:
          "We don't develop for trends, but to solve real problems and improve people's lives."
      },
      {
        id: 'peopleAtTheCenter',
        title: 'People at the center',
        description:
          'Every line of code begins with empathy. We value those who use, create, and trust in our solutions.'
      },
      {
        id: 'commitmentFulfilled',
        title: 'Commitment fulfilled',
        description:
          'We take every delivery seriously. Responsibility is part of our entire team’s DNA.'
      },
      {
        id: 'constantGrowth',
        title: 'Constant growth',
        description:
          'We learn, iterate, and improve. We don’t believe in perfection—only in what evolves.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Quality without shortcuts',
        description:
          'We design with intention. Detail, stability, and user experience are our top priorities.'
      },
      {
        id: 'realProximity',
        title: 'Genuine closeness',
        description:
          'We speak clearly, collaborate honestly, and build lasting relationships.'
      }
    ]
  },
  [DE]: {
    title: 'Unsere **6 zentralen** Säulen',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Technologie mit Sinn',
        description:
          'Wir entwickeln nicht aus Trendgründen, sondern um echte Probleme zu lösen und das Leben der Menschen zu verbessern.'
      },
      {
        id: 'peopleAtTheCenter',
        title: 'Menschen im Mittelpunkt',
        description:
          'Jede Codezeile beginnt mit Empathie. Wir schätzen alle, die unsere Lösungen nutzen, entwickeln oder ihnen vertrauen.'
      },
      {
        id: 'commitmentFulfilled',
        title: 'Verbindlichkeit, die zählt',
        description:
          'Wir nehmen jede Lieferung ernst. Verantwortung ist Teil unserer DNA.'
      },
      {
        id: 'constantGrowth',
        title: 'Ständiges Wachstum',
        description:
          'Wir lernen, iterieren und verbessern uns. Wir glauben nicht an Perfektion – sondern an Entwicklung.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Qualität ohne Abkürzungen',
        description:
          'Wir gestalten mit Absicht. Details, Stabilität und Nutzererlebnis stehen bei uns an erster Stelle.'
      },
      {
        id: 'realProximity',
        title: 'Echte Nähe',
        description:
          'Wir kommunizieren offen, arbeiten ehrlich zusammen und bauen langfristige Beziehungen auf.'
      }
    ]
  },
  [FR]: {
    title: 'Nos **6 piliers** fondamentaux',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Technologie avec du sens',
        description:
          'Nous ne développons pas pour suivre les tendances, mais pour résoudre des problèmes réels et améliorer la vie des gens.'
      },
      {
        id: 'peopleAtTheCenter',
        title: 'Les personnes au cœur',
        description:
          "Chaque ligne de code naît de l'empathie. Nous valorisons celles et ceux qui utilisent, créent et font confiance à nos solutions."
      },
      {
        id: 'commitmentFulfilled',
        title: 'Engagement tenu',
        description:
          'Chaque livraison est prise au sérieux. La responsabilité fait partie de l’ADN de toute notre équipe.'
      },
      {
        id: 'constantGrowth',
        title: 'Croissance continue',
        description:
          'Nous apprenons, nous itérons, nous nous améliorons. Nous ne croyons pas en la perfection, mais en l’évolution.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Qualité sans compromis',
        description:
          'Nous concevons avec intention. Le détail, la stabilité et l’expérience utilisateur sont nos priorités.'
      },
      {
        id: 'realProximity',
        title: 'Proximité authentique',
        description:
          'Nous communiquons avec clarté, collaborons avec honnêteté et construisons des relations durables.'
      }
    ]
  },
  [IT]: {
    title: 'I nostri **6 pilastri** fondamentali',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Tecnologia con uno scopo',
        description:
          'Non sviluppiamo per seguire le mode, ma per risolvere problemi reali e migliorare la vita delle persone.'
      },
      {
        id: 'peopleAtTheCenter',
        title: 'Le persone al centro',
        description:
          'Ogni riga di codice nasce dall’empatia. Valorizziamo chi usa, crea e si fida delle nostre soluzioni.'
      },
      {
        id: 'commitmentFulfilled',
        title: 'Impegno mantenuto',
        description:
          'Ogni consegna è una responsabilità che prendiamo sul serio. È parte del nostro DNA.'
      },
      {
        id: 'constantGrowth',
        title: 'Crescita continua',
        description:
          'Impariamo, iteriamo, miglioriamo. Non crediamo nella perfezione, ma nell’evoluzione costante.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Qualità senza scorciatoie',
        description:
          'Progettiamo con intenzione. Cura dei dettagli, stabilità ed esperienza utente sono le nostre priorità.'
      },
      {
        id: 'realProximity',
        title: 'Vicinanza reale',
        description:
          'Parliamo con chiarezza, collaboriamo con sincerità e costruiamo relazioni durature.'
      }
    ]
  },
  [JA]: {
    title: '私たちの**6つの柱**',
    items: [
      {
        id: 'technologyWithPurpose',
        title: '目的あるテクノロジー',
        description:
          '流行のためではなく、本当に役立つ問題解決のために開発しています。'
      },
      {
        id: 'peopleAtTheCenter',
        title: '人を中心に',
        description:
          'すべてのコードは共感から始まります。私たちのソリューションを使い、創り、信頼してくれる人々を大切にしています。'
      },
      {
        id: 'commitmentFulfilled',
        title: '約束を守る',
        description:
          '納品には常に責任を持って対応します。責任感はチーム全体のDNAです。'
      },
      {
        id: 'constantGrowth',
        title: '継続的な成長',
        description:
          '学び、繰り返し、改善を重ねます。完璧よりも進化を信じています。'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: '妥協なき品質',
        description:
          '意図をもって設計します。細部、安定性、ユーザー体験を重視します。'
      },
      {
        id: 'realProximity',
        title: '本物のつながり',
        description: '率直に話し、誠実に協力し、長期的な関係を築きます。'
      }
    ]
  },
  [KO]: {
    title: '우리의 **6가지 핵심** 가치',
    items: [
      {
        id: 'technologyWithPurpose',
        title: '목적 있는 기술',
        description:
          '유행을 따르기 위한 개발이 아닌, 실제 문제 해결과 사람들의 삶의 질 향상을 위해 개발합니다.'
      },
      {
        id: 'peopleAtTheCenter',
        title: '사람 중심',
        description:
          '모든 코드는 공감에서 시작됩니다. 사용하는 사람, 만드는 사람, 믿어주는 사람 모두를 소중히 여깁니다.'
      },
      {
        id: 'commitmentFulfilled',
        title: '지켜지는 약속',
        description:
          '모든 결과물에 책임을 집니다. 책임감은 우리 팀의 핵심입니다.'
      },
      {
        id: 'constantGrowth',
        title: '지속적인 성장',
        description:
          '우리는 배우고, 반복하고, 개선합니다. 완벽함보다 진화를 믿습니다.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: '지름길 없는 품질',
        description:
          '의도를 가지고 설계합니다. 세부사항, 안정성, 사용자 경험을 최우선으로 합니다.'
      },
      {
        id: 'realProximity',
        title: '진정한 가까움',
        description:
          '명확하게 소통하고, 정직하게 협업하며, 오래가는 관계를 만들어갑니다.'
      }
    ]
  },
  [PT]: {
    title: 'Nossos **6 pilares** principais',
    items: [
      {
        id: 'technologyWithPurpose',
        title: 'Tecnologia com propósito',
        description:
          'Não desenvolvemos por modismo, mas para resolver problemas reais e melhorar a vida das pessoas.'
      },
      {
        id: 'peopleAtTheCenter',
        title: 'Pessoas no centro',
        description:
          'Cada linha de código nasce da empatia. Valorizamos quem usa, cria e confia em nossas soluções.'
      },
      {
        id: 'commitmentFulfilled',
        title: 'Compromisso cumprido',
        description:
          'Levamos cada entrega a sério. A responsabilidade faz parte do nosso DNA.'
      },
      {
        id: 'constantGrowth',
        title: 'Crescimento constante',
        description:
          'Aprendemos, iteramos e melhoramos. Não acreditamos no perfeito, mas sim no que evolui.'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: 'Qualidade sem atalhos',
        description:
          'Projetamos com intenção. Detalhe, estabilidade e experiência do usuário são prioridade.'
      },
      {
        id: 'realProximity',
        title: 'Proximidade verdadeira',
        description:
          'Gostamos de falar com clareza, colaborar com honestidade e construir relações duradouras.'
      }
    ]
  },
  [ZH]: {
    title: '我们的**6大核心**理念',
    items: [
      {
        id: 'technologyWithPurpose',
        title: '有目标的技术',
        description:
          '我们不是为了追随潮流而开发，而是为了解决实际问题，改善人们的生活。'
      },
      {
        id: 'peopleAtTheCenter',
        title: '以人为本',
        description:
          '每一行代码都源于共情。我们重视使用、创建并信任我们解决方案的人。'
      },
      {
        id: 'commitmentFulfilled',
        title: '兑现承诺',
        description: '我们认真对待每一次交付。责任感是团队的一部分基因。'
      },
      {
        id: 'constantGrowth',
        title: '持续成长',
        description:
          '我们不断学习、迭代、优化。我们不相信完美，只相信不断进化。'
      },
      {
        id: 'qualityWithoutShortcuts',
        title: '品质无捷径',
        description: '我们以明确的目的进行设计，注重细节、稳定性与用户体验。'
      },
      {
        id: 'realProximity',
        title: '真实亲近',
        description: '我们坦诚沟通，真诚合作，致力于建立持久的关系。'
      }
    ]
  }
}

export const historyNavike21: THistorySectionAbout = {
  [ES]: {
    subTitle: 'Nuestra historia:',
    title: 'Construyendo con intención desde **el día uno.**',
    description: [
      'navike21 no nació de una estrategia ni de un plan corporativo. Nació de la necesidad de crear con propósito, de resolver problemas reales a través de la tecnología, desde los primeros proyectos como desarrollador independiente hasta el trabajo con empresas de mayor escala.',
      'Lo que empezó como un nombre personal fue creciendo, junto con la experiencia, los aprendizajes y las ganas de construir algo más grande. No ha sido un camino fácil, pero sí constante: entre desafíos, decisiones en solitario y pequeñas victorias, navike21 fue tomando forma como un espacio que valora a las personas, la responsabilidad y el aprendizaje continuo.',
      'Hoy seguimos en ese camino. Porque no creemos en lo terminado, sino en lo que evoluciona. Esta historia está viva. Y la construimos con cada cliente, cada colaborador y cada línea de código que creamos con intención.'
    ]
  },
  [EN]: {
    subTitle: 'Our story:',
    title: 'Building with intention since **day one.**',
    description: [
      'navike21 wasn’t born out of a strategy or corporate plan. It emerged from the need to create with purpose — to solve real problems through technology, from early freelance projects to collaborations with larger companies.',
      'What started as a personal name grew alongside experience, learning, and the desire to build something greater. The path hasn’t been easy, but it has been steady: through challenges, solo decisions, and small victories, navike21 has taken shape as a space that values people, responsibility, and continuous learning.',
      "Today, we're still on that path. Because we don’t believe in finished — we believe in what evolves. This story is alive. And we build it with every client, every teammate, and every line of code written with intention."
    ]
  },
  [DE]: {
    subTitle: 'Unsere Geschichte:',
    title: 'Mit Absicht bauen – seit **Tag eins.**',
    description: [
      'navike21 entstand nicht aus einer Strategie oder einem Businessplan. Es entstand aus dem Bedürfnis, mit Sinn zu schaffen – reale Probleme mit Technologie zu lösen, von den ersten Freelancer-Projekten bis hin zu größeren Unternehmenslösungen.',
      'Was einst ein persönlicher Name war, wuchs mit der Erfahrung, dem Lernen und dem Wunsch, etwas Größeres zu erschaffen. Der Weg war nicht einfach, aber beständig: Durch Herausforderungen, einsame Entscheidungen und kleine Erfolge wurde navike21 zu einem Ort, an dem Menschen, Verantwortung und kontinuierliches Lernen geschätzt werden.',
      'Heute sind wir weiterhin auf diesem Weg. Denn wir glauben nicht an das Endgültige – wir glauben an das, was sich weiterentwickelt. Diese Geschichte lebt. Und wir schreiben sie mit jedem Kunden, jedem Teammitglied und jeder Zeile Code, die mit Absicht entsteht.'
    ]
  },
  [FR]: {
    subTitle: 'Notre histoire :',
    title: 'Construire avec intention depuis **le premier jour.**',
    description: [
      "navike21 n'est pas né d'une stratégie ou d'un plan d'entreprise. Il est né du besoin de créer avec du sens — de résoudre des problèmes concrets grâce à la technologie, des premiers projets en freelance jusqu’aux collaborations avec des entreprises de plus grande envergure.",
      "Ce qui a commencé comme un simple nom personnel a grandi en même temps que l'expérience, les apprentissages et le désir de construire quelque chose de plus grand. Le chemin n’a pas été facile, mais il a été constant : entre défis, décisions solitaires et petites victoires, navike21 s’est formé comme un espace où l’on valorise les personnes, la responsabilité et l’apprentissage continu.",
      'Aujourd’hui, nous poursuivons ce chemin. Car nous ne croyons pas aux choses achevées, mais à ce qui évolue. Cette histoire est vivante. Et nous la construisons avec chaque client, chaque collaborateur et chaque ligne de code pensée avec intention.'
    ]
  },
  [IT]: {
    subTitle: 'La nostra storia:',
    title: 'Costruire con intenzione fin dal **primo giorno.**',
    description: [
      'navike21 non è nata da una strategia o da un piano aziendale. È nata dal bisogno di creare con uno scopo — di risolvere problemi reali attraverso la tecnologia, dai primi progetti da freelance fino alla collaborazione con aziende più grandi.',
      'Quello che era iniziato come un nome personale è cresciuto insieme all’esperienza, agli apprendimenti e al desiderio di costruire qualcosa di più grande. Non è stato un percorso facile, ma costante: tra sfide, decisioni solitarie e piccole vittorie, navike21 ha preso forma come uno spazio che valorizza le persone, la responsabilità e l’apprendimento continuo.',
      'Oggi siamo ancora su quel cammino. Perché non crediamo nel “finito”, ma in ciò che evolve. Questa storia è viva. E la costruiamo con ogni cliente, ogni collaboratore e ogni riga di codice scritta con intenzione.'
    ]
  },
  [JA]: {
    subTitle: '私たちの物語：',
    title: '**最初の日から**意図を持って築いてきました。',
    description: [
      'navike21は戦略や企業計画から生まれたわけではありません。目的を持って創造するという必要性から誕生しました。フリーランス時代の初期プロジェクトから、より大規模な企業との仕事に至るまで、現実の問題をテクノロジーで解決してきました。',
      '個人の名前として始まったものが、経験や学び、そしてより大きなものを築きたいという想いと共に成長してきました。この道のりは決して簡単ではありませんでしたが、着実でした。困難、孤独な決断、小さな成功の積み重ねの中で、navike21は人、責任、継続的な学びを大切にする場所へと形を成していきました。',
      '今もなお、私たちはこの道を歩んでいます。完成を信じるのではなく、進化を信じています。この物語は生きています。そして、私たちは意図を込めて書かれるコードの一行一行、クライアントやチームメンバーと共に、この物語を築き続けています。'
    ]
  },
  [KO]: {
    subTitle: '우리의 이야기:',
    title: '**처음부터** 의도를 가지고 만들어왔습니다.',
    description: [
      'navike21은 전략이나 기업 계획에서 탄생한 것이 아닙니다. 목적을 가지고 창조하고자 하는 필요에서 시작되었으며, 프리랜서 시절의 초기 프로젝트부터 더 큰 규모의 기업들과의 협업까지, 현실의 문제를 기술로 해결해왔습니다.',
      '개인적인 이름으로 시작된 navike21은 경험과 배움, 더 큰 무언가를 만들고자 하는 열망과 함께 성장해왔습니다. 이 여정은 쉽지 않았지만 꾸준했습니다. 도전, 혼자의 결정, 작은 승리들을 거쳐 navike21은 사람, 책임, 지속적인 학습을 소중히 여기는 공간으로 자리 잡았습니다.',
      '우리는 여전히 그 길을 걷고 있습니다. 우리는 완성된 것보다는 진화하는 것을 믿습니다. 이 이야기는 살아있습니다. 그리고 우리는 고객, 동료, 그리고 의도를 담아 작성된 코드 한 줄 한 줄과 함께 이 이야기를 계속 만들어갑니다.'
    ]
  },
  [PT]: {
    subTitle: 'Nossa história:',
    title: 'Construindo com intenção desde o **primeiro dia.**',
    description: [
      'A navike21 não nasceu de uma estratégia ou plano corporativo. Ela surgiu da necessidade de criar com propósito — resolver problemas reais por meio da tecnologia, desde os primeiros projetos como freelancer até trabalhos com empresas de maior escala.',
      'O que começou como um nome pessoal cresceu junto com a experiência, os aprendizados e a vontade de construir algo maior. O caminho não foi fácil, mas foi constante: entre desafios, decisões solitárias e pequenas vitórias, a navike21 foi tomando forma como um espaço que valoriza as pessoas, a responsabilidade e o aprendizado contínuo.',
      'Hoje, seguimos nesse caminho. Porque não acreditamos no que está pronto, mas no que evolui. Essa história está viva. E a construímos com cada cliente, cada colaborador e cada linha de código escrita com intenção.'
    ]
  },
  [ZH]: {
    subTitle: '我们的故事：',
    title: '从**第一天起**就带着初心构建未来。',
    description: [
      'navike21 并不是出自某个战略或企业计划，而是源于一种渴望：用技术解决真实问题、有目的地创造。从最初作为独立开发者的项目到为大型企业提供技术方案，我们一直秉持初心。',
      '这个最初仅仅是一个个人名称的品牌，随着经验、学习和对更大愿景的追求而不断成长。一路上，我们经历了挑战、孤独的决策和一次次的小胜利，最终逐渐形成了如今的 navike21 —— 一个重视人、责任与持续学习的空间。',
      '今天，我们仍在前行。因为我们不相信所谓“完成”，我们相信“不断进化”。这个故事仍在继续，它是活的。我们与每一位客户、每一位合作者，还有每一行充满用心的代码，共同书写这个故事。'
    ]
  }
}
