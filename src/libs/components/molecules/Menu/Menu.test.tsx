import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Menu } from './Menu'
import * as menuHooks from './menu.hooks'
import { HeaderProvider } from '@Context/HeaderContext'
import { Pages } from '@Types/pages'

const renderWithProvider = (ui: React.ReactElement) =>
  render(<HeaderProvider>{ui}</HeaderProvider>)

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: React.PropsWithChildren<{ href: string; [key: string]: unknown }>) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | { src: string }
    alt: string
    [key: string]: unknown
  }) => (
    <img src={typeof src === 'string' ? src : src?.src} alt={alt} {...props} />
  )
}))

vi.mock('motion/react', () => ({
  default: {},
  AnimatePresence: ({ children }: React.PropsWithChildren) => (
    <>{children || null}</>
  ),
  motion: {
    div: (props: React.PropsWithChildren<Record<string, unknown>>) => {
      const { children, ...rest } = props || {}
      return <div {...rest}>{children || null}</div>
    },
    h2: (props: React.PropsWithChildren<Record<string, unknown>>) => {
      const { children, ...rest } = props || {}
      return <h2 {...rest}>{children || null}</h2>
    }
  }
}))

vi.mock('./menu.hooks')

const mockMenuData = {
  toggleMenu: false,
  menuList: [
    { id: Pages.HOME, name: 'Home', slug: '/' },
    {
      id: Pages.SERVICES,
      name: 'Services',
      slug: '/services'
    },
    {
      id: Pages.ABOUT,
      name: 'About',
      slug: '/about'
    }
  ],
  menuVariants: {
    initial: { height: 0 },
    animate: { height: '100dvh' },
    exit: { height: 0 }
  },
  imageVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  itemMenuVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }
}

describe('Menu component', () => {
  describe('when menu is closed', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue(mockMenuData)
    })

    it('should not render menu', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).not.toBeInTheDocument()
    })

    it('should not render menu items', () => {
      renderWithProvider(<Menu />)
      expect(screen.queryByText('Home')).not.toBeInTheDocument()
    })

    it('should not render menu image', () => {
      renderWithProvider(<Menu />)
      const image = screen.queryByAltText('Menu Image')
      expect(image).not.toBeInTheDocument()
    })
  })

  describe('when menu is open', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should render menu container', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toBeInTheDocument()
    })

    it('should render all menu items', () => {
      renderWithProvider(<Menu />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('should render menu with correct id', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toHaveAttribute('id', 'main-menu')
    })

    it('should have role="dialog"', () => {
      renderWithProvider(<Menu />)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
    })

    it('should have aria-modal="true"', () => {
      renderWithProvider(<Menu />)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-modal', 'true')
    })
  })

  describe('menu container styling', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should apply correct base classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toHaveClass(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'bg-black',
        'z-40',
        'overflow-y-auto',
        'flex',
        'justify-between',
        'items-center',
        'md:overflow-hidden'
      )
    })

    it('should apply motion variants', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toHaveAttribute('variants')
      expect(menu).toHaveAttribute('initial', 'initial')
      expect(menu).toHaveAttribute('animate', 'animate')
      expect(menu).toHaveAttribute('exit', 'exit')
    })
  })

  describe('menu image', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should render menu image', () => {
      renderWithProvider(<Menu />)
      const image = screen.getByAltText('Menu Image')
      expect(image).toBeInTheDocument()
    })

    it('should apply correct classes to image container', () => {
      const { container } = renderWithProvider(<Menu />)
      const imageContainer = container.querySelector('.absolute.left-0.top-0')
      expect(imageContainer).toHaveClass(
        'w-full',
        'h-full',
        'absolute',
        'left-0',
        'top-0',
        'z-0',
        'md:relative',
        'md:w-1/2'
      )
    })

    it('should apply correct classes to image element', () => {
      renderWithProvider(<Menu />)
      const image = screen.getByAltText('Menu Image')
      expect(image).toHaveClass(
        'object-cover',
        'object-center',
        'h-dvh',
        'opacity-20',
        'blur-sm',
        'transition-all',
        'ease-in-out',
        'duration-500',
        'md:opacity-100',
        'md:blur-none'
      )
    })

    it('should have priority loading', () => {
      renderWithProvider(<Menu />)
      const image = screen.getByAltText('Menu Image')
      expect(image).toBeInTheDocument()
      expect(image.tagName).toBe('IMG')
    })

    it('should have motion variants on image container', () => {
      const { container } = renderWithProvider(<Menu />)
      const imageContainer = container.querySelector('.absolute.left-0.top-0')
      expect(imageContainer).toHaveAttribute('variants')
    })
  })

  describe('menu items', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should render correct number of menu items', () => {
      renderWithProvider(<Menu />)
      const links = screen.getAllByRole('link')
      expect(links.length).toBe(3)
    })

    it('should render menu items with correct text', () => {
      renderWithProvider(<Menu />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('should render menu items with correct hrefs', () => {
      renderWithProvider(<Menu />)
      const homeLink = screen.getByText('Home').closest('a')
      const servicesLink = screen.getByText('Services').closest('a')
      const aboutLink = screen.getByText('About').closest('a')

      expect(homeLink).toHaveAttribute('href', '/')
      expect(servicesLink).toHaveAttribute('href', '/services')
      expect(aboutLink).toHaveAttribute('href', '/about')
    })

    it('should apply correct classes to menu items', () => {
      renderWithProvider(<Menu />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveClass('text-white')
      })
    })

    it('should render menu items as h2 elements', () => {
      const { container } = renderWithProvider(<Menu />)
      const headings = container.querySelectorAll('h2')
      expect(headings.length).toBe(3)
    })

    it('should apply motion variants to menu items', () => {
      const { container } = renderWithProvider(<Menu />)
      const menuItems = container.querySelectorAll('h2')
      menuItems.forEach(item => {
        expect(item).toHaveAttribute('variants')
      })
    })

    it('should apply responsive text classes to items', () => {
      const { container } = renderWithProvider(<Menu />)
      const menuItems = container.querySelectorAll('h2')
      menuItems.forEach(item => {
        expect(item).toHaveClass(
          'text-xl',
          'w-full',
          'text-center',
          'md:text-2xl',
          'md:w-[80%]',
          'landscape:text-left'
        )
      })
    })
  })

  describe('menu items container', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should apply correct base classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const itemsContainer = container.querySelector(String.raw`.w-\[80\%\]`)
      expect(itemsContainer).toHaveClass(
        'w-[80%]',
        'h-dvh',
        'flex',
        'flex-col',
        'justify-center',
        'items-start',
        'text-white',
        'z-10',
        'relative',
        'gap-2',
        'transition-all',
        'ease-in-out',
        'duration-500'
      )
    })

    it('should apply landscape classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const itemsContainer = container.querySelector(String.raw`.w-\[80\%\]`)
      expect(itemsContainer).toHaveClass(
        'landscape:grid',
        'landscape:grid-cols-3',
        'landscape:pt-20',
        'landscape:justify-between',
        'landscape:items-center',
        'landscape:gap-3',
        'landscape:content-center'
      )
    })

    it('should apply md landscape classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const itemsContainer = container.querySelector(String.raw`.w-\[80\%\]`)
      expect(itemsContainer).toHaveClass(
        'landscape:md:flex',
        'landscape:md:flex-col',
        'landscape:items-center',
        'landscape:md:justify-center',
        'landscape:md:content-center',
        'landscape:md:pt-0',
        'landscape:md:w-1/2'
      )
    })

    it('should apply md classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const itemsContainer = container.querySelector(String.raw`.w-\[80\%\]`)
      expect(itemsContainer).toHaveClass(
        'md:w-1/2',
        'md:items-center',
        'md:gap-6'
      )
    })
  })

  describe('inner container', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should apply correct classes', () => {
      const { container } = renderWithProvider(<Menu />)
      const innerContainer = container.querySelector('.flex-col.justify-center')
      expect(innerContainer).toHaveClass(
        'w-full',
        'h-dvh',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'overflow-x-hidden',
        'transition-all',
        'ease-in-out',
        'duration-500',
        'relative',
        'overflow-hidden',
        'md:flex-row'
      )
    })
  })

  describe('hook integration', () => {
    it('should call useMenu hook', () => {
      renderWithProvider(<Menu />)
      expect(menuHooks.useMenu).toHaveBeenCalled()
    })

    it('should use toggleMenu from hook', () => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
      const { container } = renderWithProvider(<Menu />)
      expect(container.querySelector('#main-menu')).toBeInTheDocument()
    })

    it('should use menuList from hook', () => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
      renderWithProvider(<Menu />)
      mockMenuData.menuList.forEach(item => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
      })
    })

    it('should use variants from hook', () => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toHaveAttribute('variants')
    })
  })

  describe('accessibility', () => {
    beforeEach(() => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true
      })
    })

    it('should have dialog role', () => {
      renderWithProvider(<Menu />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('should have aria-modal attribute', () => {
      renderWithProvider(<Menu />)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-modal', 'true')
    })

    it('should have id for aria-controls', () => {
      const { container } = renderWithProvider(<Menu />)
      const menu = container.querySelector('#main-menu')
      expect(menu).toHaveAttribute('id', 'main-menu')
    })

    it('should render semantic heading elements', () => {
      const { container } = renderWithProvider(<Menu />)
      const headings = container.querySelectorAll('h2')
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should have navigable links', () => {
      renderWithProvider(<Menu />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
      })
    })
  })

  describe('edge cases', () => {
    it('should handle empty menu list', () => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true,
        menuList: []
      })
      renderWithProvider(<Menu />)
      const links = screen.queryAllByRole('link')
      expect(links.length).toBe(0)
    })

    it('should handle single menu item', () => {
      vi.mocked(menuHooks.useMenu).mockReturnValue({
        ...mockMenuData,
        toggleMenu: true,
        menuList: [mockMenuData.menuList[0]!]
      })
      renderWithProvider(<Menu />)
      const links = screen.getAllByRole('link')
      expect(links.length).toBe(1)
    })
  })
})
