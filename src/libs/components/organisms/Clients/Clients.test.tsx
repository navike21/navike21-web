import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Clients } from '.'

vi.mock('@Constants/clients', () => ({
  CLIENTS: [
    {
      id: 'client-1',
      name: 'Client 1',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-1">
          Logo 1
        </svg>
      ),
      url: 'https://client1.com'
    },
    {
      id: 'beats',
      name: 'Beats',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-beats">
          Beats Logo
        </svg>
      ),
      url: 'https://beatsmusica.com'
    },
    {
      id: 'client-3',
      name: 'Client 3',
      logo: ({ className }: { className?: string }) => (
        <svg className={className} data-testid="logo-3">
          Logo 3
        </svg>
      ),
      url: 'https://client3.com'
    }
  ]
}))

const mockClients = [
  {
    id: 'client-1',
    name: 'Client 1'
  },
  {
    id: 'beats',
    name: 'Beats'
  },
  {
    id: 'client-3',
    name: 'Client 3'
  }
]

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
        'clients-area',
        'flex',
        'flex-col',
        'items-center',
        'gap-10',
        'lg:flex-row',
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
        'lg:text-4xl',
        'lg:text-left'
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
      expect(screen.getByTestId('logo-beats')).toBeInTheDocument()
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
        'md:grid-cols-4',
        'lg:gap-4',
        'xl:grid-cols-5'
      )
    })

    it('should render correct number of clients', () => {
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')
      expect(clientDivs).toHaveLength(3)
    })

    it('should render each client logo wrapper with correct base classes', () => {
      const { container } = render(<Clients />)
      const firstClientDiv = container.querySelector('section:last-child > div')
      expect(firstClientDiv).toHaveClass(
        'w-full',
        'aspect-3/2',
        'm-auto',
        'shadow-md',
        'h-full',
        'rounded-md',
        'flex',
        'items-center',
        'justify-center'
      )
    })

    it('should apply special classes to "beats" client', () => {
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')
      const beatsDiv = clientDivs[1] // beats is the second client
      expect(beatsDiv).toHaveClass(
        'row-span-2',
        'xl:row-span-2',
        'xl:col-span-2'
      )
    })

    it('should not apply special classes to non-beats clients', () => {
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')
      const firstDiv = clientDivs[0] // client-1
      expect(firstDiv).not.toHaveClass('row-span-2')
      expect(firstDiv).not.toHaveClass('xl:row-span-2')
      expect(firstDiv).not.toHaveClass('xl:col-span-2')
    })
  })

  describe('client logo containers', () => {
    it('should render logo containers with base classes', () => {
      const { container } = render(<Clients />)
      const logoContainers = container.querySelectorAll(
        'section:last-child > div > div'
      )
      logoContainers.forEach(logoContainer => {
        expect(logoContainer).toHaveClass(
          'flex',
          'items-center',
          'justify-center',
          'p-6'
        )
      })
    })

    it('should apply w-full and h-full classes to non-beats clients', () => {
      const { container } = render(<Clients />)
      const logoContainers = container.querySelectorAll(
        'section:last-child > div > div'
      )
      const firstContainer = logoContainers[0] // client-1
      expect(firstContainer).toHaveClass('w-full', 'h-full')
    })

    it('should apply special size classes to beats client', () => {
      const { container } = render(<Clients />)
      const logoContainers = container.querySelectorAll(
        'section:last-child > div > div'
      )
      const beatsContainer = logoContainers[1] // beats
      expect(beatsContainer).toHaveClass('h-10/12', 'w-10/12')
    })

    it('should render rel="noopener noreferrer" attribute on containers', () => {
      const { container } = render(<Clients />)
      const logoContainers = container.querySelectorAll(
        'section:last-child > div > div'
      )
      logoContainers.forEach(logoContainer => {
        expect(logoContainer).toHaveAttribute('rel', 'noopener noreferrer')
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
      expect(clientDivs.length).toBe(3)
    })
  })

  describe('data integration', () => {
    it('should use CLIENTS constant from imports', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      expect(logos.length).toBeGreaterThan(0)
    })

    it('should map over all clients from CLIENTS array', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      expect(logos.length).toBe(3)
    })
  })

  describe('accessibility', () => {
    it('should render semantic HTML with proper heading hierarchy', () => {
      render(<Clients />)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings).toHaveLength(2)
      expect(headings[0]).toHaveTextContent('¿Te sumas?')
      expect(headings[1]).toHaveTextContent(
        'Así como ellos que confían en nosotros'
      )
    })

    it('should have proper structure with sections', () => {
      const { container } = render(<Clients />)
      const sections = container.querySelectorAll('section')
      expect(sections).toHaveLength(2)
    })

    it('should render all logos as SVG elements', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)
      logos.forEach(logo => {
        expect(logo.tagName).toBe('svg')
      })
    })
  })

  describe('snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<Clients />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('integration with real data structure', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should handle the expected data structure from CLIENTS constant', () => {
      render(<Clients />)
      const { container } = render(<Clients />)
      const clientDivs = container.querySelectorAll('section:last-child > div')

      // Verify that each client follows the expected structure
      mockClients.forEach((client, index) => {
        const clientDiv = clientDivs[index]
        expect(clientDiv).toBeInTheDocument()

        // Verify special handling for beats
        if (client.id === 'beats') {
          expect(clientDiv).toHaveClass('row-span-2')
        }
      })
    })

    it('should render without errors when CLIENTS array is not empty', () => {
      expect(() => render(<Clients />)).not.toThrow()
    })

    it('should apply correct className prop to all logo components', () => {
      render(<Clients />)
      const logos = screen.getAllByTestId(/logo-/)

      logos.forEach(logo => {
        expect(logo).toHaveClass('w-auto', 'h-full')
      })
    })
  })
})
