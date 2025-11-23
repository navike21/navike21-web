import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Clients } from './Clients'

// Mock the clients constants
vi.mock('@Constants/clients', () => ({
  CLIENTS: [
    {
      id: 'client-1',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-1">
          Logo 1
        </svg>
      ),
      url: 'https://client1.com'
    },
    {
      id: 'client-2',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-2">
          Logo 2
        </svg>
      ),
      url: 'https://client2.com'
    },
    {
      id: 'client-3',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-3">
          Logo 3
        </svg>
      ),
      url: 'https://client3.com'
    }
  ]
}))

describe('Clients component', () => {
  describe('rendering', () => {
    it('should render the main container', () => {
      const { container } = render(<Clients />)
      const clientsArea = container.querySelector('.clients-area')
      expect(clientsArea).toBeInTheDocument()
    })

    it('should render the title "¿Te sumas?"', () => {
      render(<Clients />)
      expect(screen.getByText('¿Te sumas?')).toBeInTheDocument()
    })

    it('should render the subtitle', () => {
      render(<Clients />)
      expect(
        screen.getByText('Así como ellos que confían en nosotros')
      ).toBeInTheDocument()
    })

    it('should apply correct responsive classes to main container', () => {
      const { container } = render(<Clients />)
      const clientsArea = container.querySelector('.clients-area')
      expect(clientsArea).toHaveClass(
        'flex',
        'flex-col',
        'items-center',
        'gap-10',
        'md:flex-row',
        'md:gap-20',
        'md:justify-center'
      )
    })
  })

  describe('title section', () => {
    it('should render title with correct classes', () => {
      render(<Clients />)
      const title = screen.getByText('¿Te sumas?')
      expect(title).toHaveClass(
        'text-center',
        'text-3xl',
        'font-semibold',
        'w-full',
        'md:text-left',
        'lg:text-4xl'
      )
    })

    it('should render subtitle with correct classes', () => {
      render(<Clients />)
      const subtitle = screen.getByText(
        'Así como ellos que confían en nosotros'
      )
      expect(subtitle).toHaveClass(
        'text-center',
        'text-xl',
        'font-medium',
        'w-full',
        'md:text-left',
        'lg:text-2xl'
      )
    })
  })

  describe('clients grid', () => {
    it('should render all client logos', () => {
      render(<Clients />)
      expect(screen.getByTestId('logo-1')).toBeInTheDocument()
      expect(screen.getByTestId('logo-2')).toBeInTheDocument()
      expect(screen.getByTestId('logo-3')).toBeInTheDocument()
    })

    it('should render grid with correct responsive classes', () => {
      const { container } = render(<Clients />)
      const grid = container.querySelector('section:last-child')
      expect(grid).toHaveClass(
        'grid',
        'grid-cols-2',
        'gap-6',
        'w-full',
        'sm:grid-cols-3',
        'md:grid-cols-5',
        'lg:grid-cols-6'
      )
    })

    it('should render correct number of clients', () => {
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')
      expect(clientDivs).toHaveLength(3)
    })

    it('should render each client logo wrapper with correct classes', () => {
      const { container } = render(<Clients />)
      const firstClientDiv = container.querySelector('section:last-child > div')
      expect(firstClientDiv).toHaveClass(
        'max-w-32',
        'w-full',
        'aspect-square',
        'col-span-1',
        'm-auto',
        'lg:max-w-28'
      )
    })
  })

  describe('client links', () => {
    it('should render all client links with correct URLs', () => {
      render(<Clients />)
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(3)
      expect(links[0]).toHaveAttribute('href', 'https://client1.com')
      expect(links[1]).toHaveAttribute('href', 'https://client2.com')
      expect(links[2]).toHaveAttribute('href', 'https://client3.com')
    })

    it('should render links with target="_blank"', () => {
      render(<Clients />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
      })
    })

    it('should render links with rel="noopener noreferrer"', () => {
      render(<Clients />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })

    it('should apply correct classes to link containers', () => {
      render(<Clients />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveClass(
          'w-full',
          'h-full',
          'flex',
          'items-center',
          'justify-center'
        )
      })
    })
  })

  describe('logo components', () => {
    it('should pass className to logo components', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      logos.forEach(logo => {
        expect(logo).toHaveClass('w-auto', 'h-full')
      })
    })

    it('should render logos with unique keys', () => {
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')
      // Keys are used internally by React for reconciliation, not as DOM attributes
      // We verify that each client div is rendered (one per client)
      expect(clientDivs.length).toBe(3)
    })
  })

  describe('data integration', () => {
    it('should use CLIENTS constant from imports', () => {
      // The component imports and uses CLIENTS directly
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      // If CLIENTS is being used, we should have logos rendered
      expect(logos.length).toBeGreaterThan(0)
    })

    it('should map over all clients from CLIENTS array', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      // Verify we have the expected number of clients from the mock
      expect(logos.length).toBe(3)
    })
  })
})
