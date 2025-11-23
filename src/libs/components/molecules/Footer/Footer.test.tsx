import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Footer } from './Footer'
import * as footerHooks from './footer.hooks'
import { EServiceIds } from '@I18n/common/services/types'
import { ELegalPageSlugs } from '@I18n/common/legalArea/types'
import type { TIconName } from '@Types/icons'

// Mock the footer hook
vi.mock('./footer.hooks')

// Mock Next.js Link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

const mockFooterData = {
  structure: {
    textFooter: 'Footer description text',
    servicesTitle: 'Services',
    legalAreaTitle: 'Legal',
    contactTitle: 'Contact',
    rightsReserved: 'All rights reserved'
  },
  itemsInformation: {
    services: [
      {
        id: EServiceIds.WEB_PAGES_DEVELOPMENT,
        title: 'Web Development',
        slug: '/services/web',
        icon: 'RiCodeSSlashLine' as TIconName,
        shortDescription: 'Web development services',
        description: 'Full web development description'
      },
      {
        id: EServiceIds.MOBILE_APPS,
        title: 'Mobile Apps',
        slug: '/services/mobile',
        icon: 'RiSmartphoneLine' as TIconName,
        shortDescription: 'Mobile app services',
        description: 'Full mobile app description'
      }
    ],
    legalArea: [
      {
        id: ELegalPageSlugs.PRIVACY_POLICY,
        slug: '/privacy',
        title: 'Privacy Policy',
        shortDescription: 'Privacy policy description',
        description: 'Full privacy policy',
        lastUpdated: '2024-01-01',
        showInFooter: true
      },
      {
        id: ELegalPageSlugs.TERMS_AND_CONDITIONS,
        slug: '/terms',
        title: 'Terms of Service',
        shortDescription: 'Terms description',
        description: 'Full terms',
        lastUpdated: '2024-01-01',
        showInFooter: true
      }
    ],
    contactInfo: [
      {
        key: 'email',
        value: 'test@example.com',
        href: 'mailto:test@example.com'
      },
      { key: 'phone', value: '+1234567890', href: 'tel:+1234567890' }
    ],
    socialMedia: [
      {
        icon: 'RiFacebookFill' as TIconName,
        name: 'Facebook',
        url: 'https://facebook.com',
        active: true
      },
      {
        icon: 'RiTwitterFill' as TIconName,
        name: 'Twitter',
        url: 'https://twitter.com',
        active: true
      }
    ]
  }
}

describe('Footer component', () => {
  beforeEach(() => {
    vi.mocked(footerHooks.useFooter).mockReturnValue(mockFooterData)
  })

  describe('basic rendering', () => {
    it('should render footer element', () => {
      const { container } = render(<Footer />)
      const footer = container.querySelector('footer')
      expect(footer).toBeInTheDocument()
    })

    it('should apply correct classes to footer', () => {
      const { container } = render(<Footer />)
      const footer = container.querySelector('footer')
      expect(footer).toHaveClass(
        'bg-black',
        'flex',
        'flex-col',
        'gap-10',
        'text-white'
      )
    })

    it('should call useFooter hook', () => {
      render(<Footer />)
      expect(footerHooks.useFooter).toHaveBeenCalled()
    })
  })

  describe('logo and description section', () => {
    it('should render footer description text', () => {
      render(<Footer />)
      expect(screen.getByText('Footer description text')).toBeInTheDocument()
    })

    it('should render description with correct class', () => {
      render(<Footer />)
      const description = screen.getByText('Footer description text')
      expect(description).toHaveClass('text-sm')
    })
  })

  describe('services section', () => {
    it('should render services title', () => {
      render(<Footer />)
      expect(screen.getByText('Services')).toBeInTheDocument()
    })

    it('should render all service links', () => {
      render(<Footer />)
      expect(screen.getByText('Web Development')).toBeInTheDocument()
      expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    })

    it('should render service links with correct hrefs', () => {
      render(<Footer />)
      const webDevLink = screen.getByText('Web Development').closest('a')
      const mobileLink = screen.getByText('Mobile Apps').closest('a')
      expect(webDevLink).toHaveAttribute('href', '/services/web')
      expect(mobileLink).toHaveAttribute('href', '/services/mobile')
    })
  })

  describe('legal area section', () => {
    it('should render legal title', () => {
      render(<Footer />)
      expect(screen.getByText('Legal')).toBeInTheDocument()
    })

    it('should render all legal links', () => {
      render(<Footer />)
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
      expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    })

    it('should render legal links with correct hrefs', () => {
      render(<Footer />)
      const privacyLink = screen.getByText('Privacy Policy').closest('a')
      const termsLink = screen.getByText('Terms of Service').closest('a')
      expect(privacyLink).toHaveAttribute('href', '/privacy')
      expect(termsLink).toHaveAttribute('href', '/terms')
    })
  })

  describe('contact section', () => {
    it('should render contact title', () => {
      render(<Footer />)
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('should render all contact info', () => {
      render(<Footer />)
      expect(screen.getByText('test@example.com')).toBeInTheDocument()
      expect(screen.getByText('+1234567890')).toBeInTheDocument()
    })

    it('should render contact links with correct hrefs', () => {
      render(<Footer />)
      const emailLink = screen.getByText('test@example.com').closest('a')
      const phoneLink = screen.getByText('+1234567890').closest('a')
      expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com')
      expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890')
    })
  })

  describe('dividers', () => {
    it('should render gradient divider at top', () => {
      const { container } = render(<Footer />)
      const dividers = container.querySelectorAll('[role="separator"]')
      expect(dividers.length).toBeGreaterThanOrEqual(2)
    })

    it('should render light divider in middle', () => {
      const { container } = render(<Footer />)
      const dividers = container.querySelectorAll('[role="separator"]')
      expect(dividers.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('social media section', () => {
    it('should render all social media links', () => {
      render(<Footer />)
      const socialLinks = screen
        .getAllByRole('link')
        .filter(
          link =>
            link.getAttribute('href')?.includes('facebook.com') ||
            link.getAttribute('href')?.includes('twitter.com')
        )
      expect(socialLinks.length).toBeGreaterThanOrEqual(2)
    })

    it('should render social media links with target="_blank"', () => {
      const { container } = render(<Footer />)
      const socialLinks = container.querySelectorAll('a[target="_blank"]')
      expect(socialLinks.length).toBeGreaterThanOrEqual(2)
    })

    it('should render social media links with rel="noopener noreferrer"', () => {
      const { container } = render(<Footer />)
      const socialLinks = container.querySelectorAll(
        'a[rel="noopener noreferrer"]'
      )
      expect(socialLinks.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('copyright section', () => {
    it('should render copyright text', () => {
      render(<Footer />)
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument()
    })

    it('should render rights reserved text', () => {
      render(<Footer />)
      expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    })

    it('should render copyright with correct classes', () => {
      render(<Footer />)
      const copyright = screen.getByText(/All rights reserved/)
      expect(copyright).toHaveClass('text-sm', 'text-center')
    })
  })

  describe('grid layout', () => {
    it('should render main container with grid classes', () => {
      const { container } = render(<Footer />)
      const gridContainer = container.querySelector('.grid')
      expect(gridContainer).toHaveClass(
        'grid',
        'grid-cols-2',
        'gap-8',
        'md:grid-cols-3',
        'lg:grid-cols-5'
      )
    })
  })

  describe('responsive behavior', () => {
    it('should apply responsive classes to bottom container', () => {
      const { container } = render(<Footer />)
      // Find the bottom container with md:flex-row-reverse class (copyright section)
      const bottomContainer = container.querySelector(
        'footer .flex.flex-col.items-center.md\\:flex-row-reverse'
      )
      expect(bottomContainer).toBeInTheDocument()
      expect(bottomContainer).toHaveClass(
        'flex',
        'flex-col',
        'md:flex-row-reverse',
        'md:justify-between'
      )
    })
  })

  describe('accessibility', () => {
    it('should render semantic footer element', () => {
      const { container } = render(<Footer />)
      expect(container.querySelector('footer')).toBeInTheDocument()
    })

    it('should render headings with correct hierarchy', () => {
      render(<Footer />)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThanOrEqual(3)
    })
  })
})
