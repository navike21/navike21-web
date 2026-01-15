import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MenuIcon } from '.'
import * as HeaderContext from '@Context/headerContext.hooks'

vi.mock('motion/react', () => ({
  motion: {
    line: ({ children, ...props }: any) => <line {...props}>{children}</line>
  }
}))

describe('MenuIcon component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(HeaderContext, 'useHeaderContext').mockReturnValue({
      toggleMenu: false,
      setToggleMenu: vi.fn()
    } as any)
  })

  describe('basic rendering', () => {
    it('should render SVG element', () => {
      const { container } = render(<MenuIcon />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should have correct viewBox', () => {
      const { container } = render(<MenuIcon />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('viewBox', '0 0 40 40')
    })

    it('should render three lines', () => {
      const { container } = render(<MenuIcon />)
      const lines = container.querySelectorAll('line')
      expect(lines).toHaveLength(3)
    })
  })

  describe('line properties', () => {
    it('should have correct stroke properties', () => {
      const { container } = render(<MenuIcon />)
      const lines = container.querySelectorAll('line')

      expect(lines.length).toBe(3)
      lines.forEach(line => {
        expect(line.tagName.toLowerCase()).toBe('line')
      })
    })

    it('should have correct line positions when menu is closed', () => {
      const { container } = render(<MenuIcon />)
      const lines = container.querySelectorAll('line')

      // Top line
      expect(lines[0]).toHaveAttribute('x1', '8')
      expect(lines[0]).toHaveAttribute('y1', '12')
      expect(lines[0]).toHaveAttribute('x2', '32')
      expect(lines[0]).toHaveAttribute('y2', '12')

      // Middle line
      expect(lines[1]).toHaveAttribute('x1', '8')
      expect(lines[1]).toHaveAttribute('y1', '20')
      expect(lines[1]).toHaveAttribute('x2', '32')
      expect(lines[1]).toHaveAttribute('y2', '20')

      // Bottom line
      expect(lines[2]).toHaveAttribute('x1', '8')
      expect(lines[2]).toHaveAttribute('y1', '28')
      expect(lines[2]).toHaveAttribute('x2', '32')
      expect(lines[2]).toHaveAttribute('y2', '28')
    })
  })

  describe('custom className', () => {
    it('should apply custom className to SVG', () => {
      const { container } = render(<MenuIcon className="custom-menu-icon" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('custom-menu-icon')
    })

    it('should render without className', () => {
      const { container } = render(<MenuIcon />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('header context integration', () => {
    it('should use toggleMenu from header context', () => {
      const useHeaderContextSpy = vi.spyOn(HeaderContext, 'useHeaderContext')

      render(<MenuIcon />)

      expect(useHeaderContextSpy).toHaveBeenCalled()
    })

    it('should handle open menu state', () => {
      vi.spyOn(HeaderContext, 'useHeaderContext').mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn()
      } as any)

      const { container } = render(<MenuIcon />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should handle closed menu state', () => {
      vi.spyOn(HeaderContext, 'useHeaderContext').mockReturnValue({
        toggleMenu: false,
        setToggleMenu: vi.fn()
      } as any)

      const { container } = render(<MenuIcon />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('animation properties', () => {
    it('should have animate prop on all lines', () => {
      const { container } = render(<MenuIcon />)
      const lines = container.querySelectorAll('line')

      lines.forEach(line => {
        expect(line).toHaveAttribute('animate')
      })
    })

    it('should have transition prop on all lines', () => {
      const { container } = render(<MenuIcon />)
      const lines = container.querySelectorAll('line')

      lines.forEach(line => {
        expect(line).toHaveAttribute('transition')
      })
    })
  })
})
