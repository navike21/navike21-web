import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Custom Software',
  descriptionLite:
    'We develop customized software solutions tailored to the unique needs of your business, improving efficiency and competitiveness.',
  path: `${servicesMenu.path}/custom-software`,
  slug: 'custom-software',
  pageSections: {
    metaTag: {
      title: `Custom Software Development | ${COMPANY_NAME}`,
      description:
        'We create customized software that adapts precisely to your company’s needs, improving processes, scalability, and competitiveness.',
      keywords: [
        'custom software',
        'custom development',
        'business solutions',
        'custom applications',
        'enterprise software',
        'software development',
        'custom systems',
        'bespoke development'
      ],
      ogTitle: `Custom Software Development | ${COMPANY_NAME}`,
      ogDescription:
        'We create tailored software adapted to your business to improve processes and scale efficiently.',
      ogImage: coverImage,
      twitterTitle: `Custom Software for Businesses | ${COMPANY_NAME}`,
      twitterDescription:
        'Technological solutions that adapt to your processes and scale with you.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Custom Software Solutions',
      description:
        'We develop custom software to optimize your business processes, fully adapting to your specific needs and providing scalable, secure solutions.'
    },
    description: {
      title: 'Custom Software for Your Business',
      description:
        'Whether it’s a desktop application, mobile app, or a complete enterprise solution, we create software that optimizes your operations, integrates with your systems, and adds immediate value to your business.',
      description2:
        'Our agile and flexible approach allows us to deliver efficient, maintainable software products, ensuring your technology solutions are always aligned with your business vision.'
    },
    features: {
      title: 'What Does Our Service Include?',
      items: [
        {
          title: 'Bespoke Architecture',
          description:
            'We design the software architecture with scalability, security, and long-term performance in mind, tailored to the specific needs of your business.'
        },
        {
          title: 'Full Stack Development',
          description:
            'We have specialized teams in frontend, backend, and mobile development, working with technologies like React, Node.js, .NET, Java, Python, and more to deliver complete solutions.'
        },
        {
          title: 'Integration and APIs',
          description:
            'We build robust integrations between systems and services using APIs, enabling your software to interact efficiently with other platforms and applications.'
        },
        {
          title: 'Testing and QA',
          description:
            'Our QA team performs thorough tests for functionality, performance, and security, ensuring that every component of the software meets the highest quality standards.'
        },
        {
          title: 'Cloud Technologies',
          description:
            'We use cloud platforms like AWS, Azure, and Google Cloud to ensure the availability, scalability, and security of your application, optimizing resources and costs.'
        },
        {
          title: 'Agile Methodology',
          description:
            'We adopt agile methodologies like Scrum, with a Scrum Master facilitating the development process, ensuring continuous value delivery and alignment with business goals.'
        },
        {
          title: 'Personalized Training',
          description:
            'We include comprehensive training for the client’s team, ensuring they can effectively use the software, understand how it works, and have the necessary knowledge for basic maintenance tasks.'
        },
        {
          title: 'Post-Project Support (Additional Service)',
          description:
            'Post-launch support is not included in the standard project scope and is offered as an additional service. This covers ongoing technical support, updates, and software optimization as needed.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Requirement Definition',
        description:
          'We work with you to understand your business needs and clearly define the objectives of the software, involving all stakeholders in the planning process.'
      },
      {
        title: 'System Architecture and Design',
        description:
          'Our architects define the technical architecture, selecting the best technologies and tools to create a scalable and efficient solution, considering security and performance requirements.'
      },
      {
        title: 'Frontend and Backend Development',
        description:
          'Our frontend and backend developers collaborate in creating the application, focusing on designing intuitive user interfaces and developing robust, scalable servers.'
      },
      {
        title: 'Integration and Continuous Testing',
        description:
          'We implement continuous integrations and automated testing to ensure that every part of the system works flawlessly from the start. Quality is our primary focus.'
      },
      {
        title: 'Deployment and Monitoring',
        description:
          'We deploy the software to production environments using cloud tools (AWS, Azure, Google Cloud) and maintain constant monitoring to ensure stability and performance.'
      },
      {
        title: 'Training and Knowledge Transfer',
        description:
          'We provide detailed training to the client’s team to ensure they can operate, manage, and perform basic maintenance on the software independently.'
      },
      {
        title: 'Continuous Support and Maintenance (Additional Service)',
        description:
          'Post-launch support is available as an additional service. It includes updates, bug fixes, performance optimization, and functional improvements as required by the business. The support service is optional and can be contracted according to the client’s needs.'
      }
    ],
    recentWorks: {
      title: 'Recent Projects',
      description:
        'Check out some of the software projects we’ve created for businesses across various industries, showcasing innovation and effectiveness.'
    },
    callToAction: {
      title: 'Need a Custom Software Solution?',
      description:
        'If you’re looking for a technological solution tailored exactly to the needs of your business, let’s talk and build the perfect tool for you!',
      textButton: 'Request a Consultation'
    }
  }
})
