import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Home } from './index'
import { useHome } from './home.hooks'
import { EHeroSectionId } from '@I18n/pages/home/types'

vi.mock(
  '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg',
  () => ({
    default: 'mock-hero-image'
  })
)

vi.mock('@Components/atoms', () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
  ItemLinkCard: ({ title }: { title: string }) => (
    <div data-testid="item-link-card">{title}</div>
  ),
  LinkButton: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="link-button">{children}</div>
  ),
  Title: ({ title }: { title: string }) => (
    <div data-testid="title">{title}</div>
  )
}))

vi.mock('@Components/molecules', () => ({
  ItemHeroSection: ({ title }: { title: string }) => (
    <div data-testid="item-hero-section">{title}</div>
  )
}))

vi.mock('@Components/organisms', () => ({
  Clients: () => <div data-testid="clients">Clients</div>,
  Testimonials: () => <div data-testid="testimonials">Testimonials</div>,
  NewsletterForm: () => <div data-testid="newsletter-form">NewsletterForm</div>
}))

vi.mock('./home.hooks', () => ({
  useHome: vi.fn(() => ({
    heroSectionCurrent: [
      { title: 'Hero Title', description: 'Hero Desc', controlActions: [] }
    ],
    servicesListCurrent: [
      { id: 1, title: 'Service 1', shortDescription: 'Desc 1', icon: 'icon1' },
      { id: 2, title: 'Service 2', shortDescription: 'Desc 2', icon: 'icon2' }
    ],
    servicesSectionCurrent: {
      title: 'Services Title',
      description: 'Services Desc',
      controlAction: {
        href: '/services',
        icon: 'arrow',
        children: 'View All',
        variant: 'primary'
      }
    },
    metricsSectionCurrent: {
      title: 'Metrics Title',
      description: 'Metrics Desc'
    },
    companyMetricsCurrent: [
      { id: 1, label: 'Projects', value: 100, suffix: '+' },
      { id: 2, label: 'Clients', value: 50, suffix: '+' }
    ],
    testimonialsSectionCurrent: {
      title: 'Testimonials Title',
      description: 'Testimonials Desc'
    },
    areThereTestimonials: true
  }))
}))

describe('Home component', () => {
  it('should render hero section', () => {
    render(<Home />)
    expect(screen.getByTestId('item-hero-section')).toBeInTheDocument()
  })

  it('should render services section', () => {
    render(<Home />)
    expect(screen.getByText('Services Title')).toBeInTheDocument()
    expect(screen.getAllByTestId('item-link-card')).toHaveLength(2)
    expect(screen.getByTestId('link-button')).toHaveTextContent('View All')
  })

  it('should render metrics section', () => {
    render(<Home />)
    expect(screen.getByText('Metrics Title')).toBeInTheDocument()
  })

  it('should render clients section', () => {
    render(<Home />)
    expect(screen.getByTestId('clients')).toBeInTheDocument()
  })

  it('should render testimonials section when there are testimonials', () => {
    render(<Home />)
    expect(screen.getByText('Testimonials Title')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
  })

  it('should not render testimonials section when there are no testimonials', () => {
    vi.mocked(useHome).mockReturnValue({
      heroSectionCurrent: [
        {
          title: 'Hero Title',
          description: 'Hero Desc',
          controlActions: [],
          id: EHeroSectionId.PROJECTS_SLIDE
        }
      ],
      servicesListCurrent: [],
      servicesSectionCurrent: {
        title: 'Services Title',
        description: 'Services Desc',
        controlAction: {
          href: '/services',
          icon: 'Ri24HoursFill',
          children: 'View All',
          variant: 'primary'
        }
      },
      metricsSectionCurrent: {
        title: 'Metrics Title',
        description: 'Metrics Desc'
      },
      companyMetricsCurrent: [],
      testimonialsSectionCurrent: {
        title: 'Testimonials Title',
        description: 'Testimonials Desc'
      },
      areThereTestimonials: false
    })

    render(<Home />)
    expect(screen.queryByTestId('testimonials')).not.toBeInTheDocument()
  })
})
