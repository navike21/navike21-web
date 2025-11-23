import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Logo } from './Logo'

describe('Logo component', () => {
  describe('basic rendering', () => {
    it('should render SVG logo', () => {
      const { container } = render(<Logo />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should render logo container', () => {
      const { container } = render(<Logo />)
      const logoContainer = container.querySelector('.logo-navike21')
      expect(logoContainer).toBeInTheDocument()
    })
  })

  describe('text rendering', () => {
    it('should render text when showText is true', () => {
      const { container } = render(<Logo showText />)
      expect(container.textContent).toContain('navike21')
    })

    it('should not render text when showText is false', () => {
      const { container } = render(<Logo showText={false} />)
      expect(container.textContent).not.toContain('navike21')
    })

    it('should not render text by default', () => {
      const { container } = render(<Logo />)
      expect(container.textContent).not.toContain('navike21')
    })
  })

  describe('size variants', () => {
    it('should apply xs size classes', () => {
      const { container } = render(<Logo size="xs" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('w-8', 'h-8')
    })

    it('should apply sm size classes by default', () => {
      const { container } = render(<Logo />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('w-12', 'h-12')
    })

    it('should apply md size classes', () => {
      const { container } = render(<Logo size="md" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('w-14', 'h-14')
    })

    it('should apply lg size classes', () => {
      const { container } = render(<Logo size="lg" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('w-18', 'h-18')
    })

    it('should apply xl size classes', () => {
      const { container } = render(<Logo size="xl" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('w-24', 'h-24')
    })
  })

  describe('text size variants', () => {
    it('should apply correct text size for xs', () => {
      const { container } = render(<Logo showText size="xs" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-md')
    })

    it('should apply correct text size for sm', () => {
      const { container } = render(<Logo showText size="sm" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-xl')
    })

    it('should apply correct text size for md', () => {
      const { container } = render(<Logo showText size="md" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-2xl')
    })

    it('should apply correct text size for lg', () => {
      const { container } = render(<Logo showText size="lg" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-3xl')
    })

    it('should apply correct text size for xl', () => {
      const { container } = render(<Logo showText size="xl" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-5xl')
    })
  })

  describe('logo color variants', () => {
    it('should apply gradient color by default', () => {
      const { container } = render(<Logo />)
      const paths = container.querySelectorAll('path')
      const mainPath = paths[1] // Second path is the main logo
      expect(mainPath).toHaveAttribute('fill', 'url(#gradient)')
    })

    it('should apply gradient color when specified', () => {
      const { container } = render(<Logo logoColor="gradient" />)
      const paths = container.querySelectorAll('path')
      const mainPath = paths[1]
      expect(mainPath).toHaveAttribute('fill', 'url(#gradient)')
    })

    it('should apply black color', () => {
      const { container } = render(<Logo logoColor="black" />)
      const paths = container.querySelectorAll('path')
      const mainPath = paths[1]
      expect(mainPath).toHaveAttribute('fill', '#000000')
    })

    it('should apply white color', () => {
      const { container } = render(<Logo logoColor="white" />)
      const paths = container.querySelectorAll('path')
      const mainPath = paths[1]
      expect(mainPath).toHaveAttribute('fill', '#FFFFFF')
    })
  })

  describe('text color variants', () => {
    it('should apply black text color by default', () => {
      const { container } = render(<Logo showText />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-primary-text')
    })

    it('should apply black text color', () => {
      const { container } = render(<Logo showText textColor="black" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-primary-text')
    })

    it('should apply white text color', () => {
      const { container } = render(<Logo showText textColor="white" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('text-white')
    })

    it('should apply gradient text color', () => {
      const { container } = render(<Logo showText textColor="gradient" />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('bg-clip-text', 'text-transparent')
    })
  })

  describe('custom text color class', () => {
    it('should apply custom text color className', () => {
      const { container } = render(
        <Logo showText classNameTextColor="custom-text-class" />
      )
      const text = container.querySelector('span')
      expect(text).toHaveClass('custom-text-class')
    })

    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Logo showText classNameTextColor="custom-class" />
      )
      const text = container.querySelector('span')
      expect(text).toHaveClass('font-medium', 'custom-class')
    })
  })

  describe('SVG structure', () => {
    it('should have linear gradient definition', () => {
      const { container } = render(<Logo />)
      const gradient = container.querySelector('#gradient')
      expect(gradient).toBeInTheDocument()
    })

    it('should have two path elements', () => {
      const { container } = render(<Logo />)
      const paths = container.querySelectorAll('path')
      expect(paths).toHaveLength(2)
    })

    it('should have correct viewBox', () => {
      const { container } = render(<Logo />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('viewBox', '0 0 224 224')
    })
  })

  describe('transitions', () => {
    it('should have transition classes on paths', () => {
      const { container } = render(<Logo />)
      const paths = container.querySelectorAll('path')
      paths.forEach(path => {
        expect(path).toHaveClass('transition-all', 'duration-500')
      })
    })

    it('should have transition classes on text when shown', () => {
      const { container } = render(<Logo showText />)
      const text = container.querySelector('span')
      expect(text).toHaveClass('transition-all', 'duration-500')
    })
  })
})
