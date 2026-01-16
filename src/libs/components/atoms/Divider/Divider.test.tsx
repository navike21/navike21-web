import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Divider } from '.'
import * as hooks from './divider.hooks'

describe('Divider component', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('basic rendering', () => {
    it('should render as an hr element when no children', () => {
      const { container } = render(<Divider />)
      const hr = container.querySelector('hr')
      expect(hr).toBeInTheDocument()
    })

    it('should have horizontal orientation by default', () => {
      const { container } = render(<Divider />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('should have vertical orientation when specified', () => {
      const { container } = render(<Divider orientation="vertical" />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveAttribute('aria-orientation', 'vertical')
    })

    it('should render divider with children and be accessible', () => {
      render(<Divider>Text</Divider>)
      const text = screen.getByText('Text')
      expect(text).toBeInTheDocument()
    })
  })

  describe('rendering without children', () => {
    it('should render single hr element when no children provided', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t border-gray-300',
        containerClass: 'flex items-center',
        textClass: 'px-3 text-gray-500'
      })

      const { container } = render(<Divider />)
      const hr = container.querySelector('hr')
      expect(hr).toBeInTheDocument()
    })

    it('should apply w-full class for horizontal divider without children', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center w-full',
        textClass: 'px-3'
      })

      const { container } = render(<Divider />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveClass('w-full')
    })

    it('should apply h-full class for vertical divider without children', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: false,
        lineClass: 'border-l',
        containerClass: 'flex items-center h-full',
        textClass: 'py-3'
      })

      const { container } = render(<Divider orientation="vertical" />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveClass('h-full')
    })
  })

  describe('rendering with children', () => {
    it('should render text content', () => {
      render(<Divider>OR</Divider>)
      expect(screen.getByText('OR')).toBeInTheDocument()
    })

    it('should render two hr elements as lines when children provided (line, text, line)', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center',
        textClass: 'px-3'
      })

      const { container } = render(<Divider>Text</Divider>)
      const lines = container.querySelectorAll('hr')
      expect(lines).toHaveLength(2)
    })

    it('should apply text class to children span', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center',
        textClass: 'px-3 text-gray-500 custom-text-class'
      })

      const { container } = render(<Divider>Content</Divider>)
      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass('px-3', 'text-gray-500', 'custom-text-class')
    })
  })

  describe('custom styling', () => {
    it('should apply custom className', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center',
        textClass: 'px-3'
      })

      const { container } = render(<Divider className="custom-divider-class" />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveClass('custom-divider-class')
    })

    it('should merge custom className with container class', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center base-class',
        textClass: 'px-3'
      })

      const { container } = render(<Divider className="custom-class" />)
      const hr = container.querySelector('hr')
      expect(hr).toHaveClass(
        'flex',
        'items-center',
        'base-class',
        'custom-class'
      )
    })
  })

  describe('color variants', () => {
    it('should pass color prop to hook', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      render(<Divider color="light" />)

      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          color: 'light'
        })
      )
    })

    it('should pass dark color to hook', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      render(<Divider color="dark" />)

      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          color: 'dark'
        })
      )
    })

    it('should pass gradient color to hook', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      render(<Divider color="gradient" />)

      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          color: 'gradient'
        })
      )
    })

    it('should pass gradient color with vertical orientation to hook', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      render(<Divider color="gradient" orientation="vertical" />)

      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          color: 'gradient',
          orientation: 'vertical'
        })
      )
    })
  })

  describe('text alignment', () => {
    it('should align text to start', () => {
      const { container } = render(<Divider align="start">Text</Divider>)
      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass(
        'mx-2',
        'text-sm',
        'select-none',
        'text-gray-500',
        'self-start'
      )
    })

    it('should align text to center by default', () => {
      const { container } = render(<Divider>Text</Divider>)
      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass(
        'mx-2',
        'text-sm',
        'select-none',
        'text-gray-500',
        'self-center'
      )
    })

    it('should align text to center explicitly', () => {
      const { container } = render(<Divider align="center">Text</Divider>)
      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass(
        'mx-2',
        'text-sm',
        'select-none',
        'text-gray-500',
        'self-center'
      )
    })

    it('should align text to end', () => {
      const { container } = render(<Divider align="end">Text</Divider>)
      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass(
        'mx-2',
        'text-sm',
        'select-none',
        'text-gray-500',
        'self-end'
      )
    })
  })

  describe('hook integration', () => {
    it('should use classes from useDivider hook', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'custom-line-class',
        containerClass: 'custom-container-class',
        textClass: 'custom-text-class'
      })

      const { container } = render(<Divider>Text</Divider>)

      const divContainer = container.querySelector('div')
      expect(divContainer).toHaveClass('custom-container-class')

      const lines = container.querySelectorAll('hr')
      lines.forEach(line => {
        expect(line).toHaveClass('custom-line-class')
      })

      const textSpan = container.querySelector('span')
      expect(textSpan).toHaveClass('custom-text-class')
    })

    it('should pass props to useDivider hook', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      const props = {
        orientation: 'vertical' as const,
        color: 'dark' as const,
        align: 'center' as const
      }

      render(<Divider {...props} />)

      expect(useDividerSpy).toHaveBeenCalled()
      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          color: 'dark',
          align: 'center'
        })
      )
    })
  })

  describe('sonar coverage branches', () => {
    it('explicitly renders with horizontal orientation', () => {
      const { container } = render(<Divider orientation="horizontal" />)
      const hr = container.querySelector('hr')

      expect(hr).toBeInTheDocument()
      expect(hr).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('passes multiple props through spread to useDivider', () => {
      const useDividerSpy = vi.spyOn(hooks, 'useDivider')

      render(<Divider orientation="horizontal" color="dark" align="end" />)

      expect(useDividerSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          orientation: 'horizontal',
          color: 'dark',
          align: 'end'
        })
      )
    })

    it('renders hr when children is null', () => {
      const { container } = render(<Divider>{null}</Divider>)
      const hr = container.querySelector('hr')

      expect(hr).toBeInTheDocument()
    })

    it('handles missing className correctly', () => {
      const { container } = render(<Divider />)
      const hr = container.querySelector('hr')

      expect(hr).toBeInTheDocument()
    })

    it('renders both hr elements explicitly when children are provided', () => {
      const { container } = render(<Divider>Text</Divider>)
      const hrs = container.querySelectorAll('hr')

      expect(hrs).toHaveLength(2)
      expect(hrs[0]).toBeInTheDocument()
      expect(hrs[1]).toBeInTheDocument()
    })
  })
})
