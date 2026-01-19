import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Header, BgHeader } from '.'
import * as headerHooks from './Header.hooks'
import { HeaderProvider } from '@Context/index'
import type { IconName } from '@Types/icons'

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

vi.mock('./Header.hooks')

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<HeaderProvider>{ui}</HeaderProvider>)
}

const mockHeaderData = {
  headerRef: { current: null },
  isSolid: false,
  socialMedia: [
    {
      icon: 'RiFacebookFill' as IconName,
      name: 'Facebook',
      url: 'https://facebook.com',
      active: true
    },
    {
      icon: 'RiTwitterFill' as IconName,
      name: 'Twitter',
      url: 'https://twitter.com',
      active: true
    }
  ],
  toggleMenu: false,
  setToggleMenu: vi.fn()
}

describe('Header component', () => {
  beforeEach(() => {
    vi.mocked(headerHooks.useHeader).mockReturnValue(mockHeaderData)
  })

  describe('basic rendering', () => {
    it('should render header element', () => {
      const { container } = renderWithProvider(<Header />)
      const header = container.querySelector('header')
      expect(header).toBeInTheDocument()
    })

    it('should call useHeader hook', () => {
      renderWithProvider(<Header />)
      expect(headerHooks.useHeader).toHaveBeenCalled()
    })

    it('should apply base classes to header', () => {
      const { container } = renderWithProvider(<Header />)
      const header = container.querySelector('header')
      expect(header).toHaveClass(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'z-50',
        'flex',
        'justify-center',
        'transition-all',
        'duration-500'
      )
    })
  })

  describe('logo section', () => {
    it('should render logo as link to home', () => {
      renderWithProvider(<Header />)
      const logoLink = screen.getByRole('link', { name: /navike21/i })
      expect(logoLink).toHaveAttribute('href', '/')
    })

    it('should render Logo component', () => {
      const { container } = renderWithProvider(<Header />)
      const logoLink = container.querySelector('a[href="/"]')
      expect(logoLink).toBeInTheDocument()
    })
  })

  describe('social media section', () => {
    it('should render all social media links', () => {
      renderWithProvider(<Header />)
      const links = screen.getAllByRole('link')
      const socialLinks = links.filter(
        link =>
          link.getAttribute('href')?.includes('facebook.com') ||
          link.getAttribute('href')?.includes('twitter.com')
      )
      expect(socialLinks.length).toBe(2)
    })

    it('should render social media links with target="_blank"', () => {
      renderWithProvider(<Header />)
      const facebookLink = screen
        .getAllByRole('link')
        .find(link => link.getAttribute('href')?.includes('facebook.com'))
      expect(facebookLink).toBeDefined()
      expect(facebookLink!).toHaveAttribute('target', '_blank')
    })

    it('should render social media links with rel="noopener noreferrer"', () => {
      renderWithProvider(<Header />)
      const facebookLink = screen
        .getAllByRole('link')
        .find(link => link.getAttribute('href')?.includes('facebook.com'))
      expect(facebookLink).toBeDefined()
      expect(facebookLink!).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should render social media links with aria-label', () => {
      renderWithProvider(<Header />)
      expect(screen.getByLabelText('Visitar Facebook')).toBeInTheDocument()
      expect(screen.getByLabelText('Visitar Twitter')).toBeInTheDocument()
    })
  })

  describe('menu button', () => {
    it('should render menu button', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText(/menú/i)
      expect(menuButton).toBeInTheDocument()
    })

    it('should have correct aria-label when menu is closed', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText('Abrir menú')
      expect(menuButton).toBeInTheDocument()
    })

    it('should have correct aria-label when menu is open', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        toggleMenu: true
      })
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText('Cerrar menú')
      expect(menuButton).toBeInTheDocument()
    })

    it('should have aria-expanded attribute', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText(/menú/i)
      expect(menuButton).toHaveAttribute('aria-expanded')
    })

    it('should have aria-controls attribute', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText(/menú/i)
      expect(menuButton).toHaveAttribute('aria-controls', 'main-menu')
    })

    it('should call setToggleMenu when clicked', () => {
      const setToggleMenu = vi.fn()
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        setToggleMenu
      })
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText(/menú/i)
      fireEvent.click(menuButton)
      expect(setToggleMenu).toHaveBeenCalledWith(true)
    })

    it('should toggle menu state on click', () => {
      const setToggleMenu = vi.fn()
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        toggleMenu: true,
        setToggleMenu
      })
      renderWithProvider(<Header />)
      const menuButton = screen.getByLabelText(/menú/i)
      fireEvent.click(menuButton)
      expect(setToggleMenu).toHaveBeenCalledWith(false)
    })
  })

  describe('solid state styling', () => {
    it('should apply shadow when solid and menu closed', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<Header />)
      const header = container.querySelector('header')
      expect(header).toHaveClass('shadow-xl', 'h-20')
    })

    it('should not apply shadow when not solid', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: false,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<Header />)
      const header = container.querySelector('header')
      expect(header).toHaveClass('shadow-none', 'h-28')
    })

    it('should not apply shadow when menu is open', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: true
      })
      const { container } = renderWithProvider(<Header />)
      const header = container.querySelector('header')
      expect(header).toHaveClass('shadow-none', 'h-28')
    })
  })

  describe('icon color styling', () => {
    it('should use dark icons when solid and menu closed', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<Header />)
      const menuIcon = container.querySelector('.stroke-slate-950')
      expect(menuIcon).toBeInTheDocument()
    })

    it('should use white icons when not solid', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: false,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<Header />)
      const menuIcon = container.querySelector('.stroke-white')
      expect(menuIcon).toBeInTheDocument()
    })

    it('should use white icons when menu is open', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: true
      })
      const { container } = renderWithProvider(<Header />)
      const menuIcon = container.querySelector('.stroke-white')
      expect(menuIcon).toBeInTheDocument()
    })
  })

  describe('responsive layout', () => {
    it('should render Container component', () => {
      const { container } = renderWithProvider(<Header />)
      const headerContainer = container.querySelector('header > div')
      expect(headerContainer).toBeInTheDocument()
    })

    it('should apply flex layout to container', () => {
      const { container } = renderWithProvider(<Header />)
      const headerContainer = container.querySelector('header > div')
      expect(headerContainer).toHaveClass(
        'flex',
        'items-center',
        'justify-between'
      )
    })
  })
})

describe('BgHeader component', () => {
  beforeEach(() => {
    vi.mocked(headerHooks.useHeader).mockReturnValue(mockHeaderData)
  })

  describe('basic rendering', () => {
    it('should render background div', () => {
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toBeInTheDocument()
    })

    it('should call useHeader hook', () => {
      renderWithProvider(<BgHeader />)
      expect(headerHooks.useHeader).toHaveBeenCalled()
    })

    it('should apply base classes', () => {
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'pointer-events-none',
        'z-30',
        'transition-all',
        'duration-500',
        'ease-in-out'
      )
    })

    it('should have aria-hidden attribute', () => {
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('solid state styling', () => {
    it('should apply white background when solid and menu closed', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass('bg-white', 'h-20')
    })

    it('should apply transparent background when not solid', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: false,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass('bg-white/0', 'h-28')
    })

    it('should apply transparent background when menu is open', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: true
      })
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass('bg-white/0', 'h-28')
    })
  })

  describe('height changes', () => {
    it('should have smaller height when solid and menu closed', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: true,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass('h-20')
    })

    it('should have larger height when not solid or menu open', () => {
      vi.mocked(headerHooks.useHeader).mockReturnValue({
        ...mockHeaderData,
        isSolid: false,
        toggleMenu: false
      })
      const { container } = renderWithProvider(<BgHeader />)
      const bgDiv = container.querySelector('.bg-header')
      expect(bgDiv).toHaveClass('h-28')
    })
  })
})
