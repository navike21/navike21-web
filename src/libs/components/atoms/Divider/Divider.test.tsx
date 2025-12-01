import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Divider } from './Divider'
import * as hooks from './divider.hooks'

describe('Divider component', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('basic rendering', () => {
    it('should render as a separator', () => {
      render(<Divider />)
      const separator = screen.getByRole('separator')
      expect(separator).toBeInTheDocument()
    })

    it('should have horizontal orientation by default', () => {
      render(<Divider />)
      const separator = screen.getByRole('separator')
      expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('should have vertical orientation when specified', () => {
      render(<Divider orientation="vertical" />)
      const separator = screen.getByRole('separator')
      expect(separator).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('rendering without children', () => {
    it('should render single line when no children provided', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t border-gray-300',
        containerClass: 'flex items-center',
        textClass: 'px-3 text-gray-500'
      })

      const { container } = render(<Divider />)
      const lines = container.querySelectorAll('[aria-hidden="true"]')
      expect(lines).toHaveLength(1)
    })

    it('should apply w-full class for horizontal divider without children', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center',
        textClass: 'px-3'
      })

      const { container } = render(<Divider />)
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass('w-full')
    })

    it('should apply h-full class for vertical divider without children', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: false,
        lineClass: 'border-l',
        containerClass: 'flex',
        textClass: 'py-3'
      })

      const { container } = render(<Divider orientation="vertical" />)
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass('h-full')
    })
  })

  describe('rendering with children', () => {
    it('should render text content', () => {
      render(<Divider>OR</Divider>)
      expect(screen.getByText('OR')).toBeInTheDocument()
    })

    it('should render three elements when children provided (line, text, line)', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center',
        textClass: 'px-3'
      })

      const { container } = render(<Divider>Text</Divider>)
      const lines = container.querySelectorAll('[aria-hidden="true"]')
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
      const separator = container.querySelector('[role="separator"]')
      expect(separator).toHaveClass('custom-divider-class')
    })

    it('should merge custom className with container class', () => {
      vi.spyOn(hooks, 'useDivider').mockReturnValue({
        isHorizontal: true,
        lineClass: 'border-t',
        containerClass: 'flex items-center base-class',
        textClass: 'px-3'
      })

      const { container } = render(<Divider className="custom-class" />)
      const separator = container.querySelector('[role="separator"]')
      expect(separator).toHaveClass(
        'flex',
        'items-center',
        'base-class',
        'custom-class'
      )
    })
  })

  describe('color variants', () => {
    it('should render light color divider', () => {
      const { container } = render(<Divider color="light" />)
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass('flex-1', 'bg-gray-300', 'h-px', 'w-full')
    })

    it('should render dark color divider', () => {
      const { container } = render(<Divider color="dark" />)
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass('flex-1', 'bg-gray-700', 'h-px', 'w-full')
    })

    it('should render gradient horizontal divider', () => {
      const { container } = render(<Divider color="gradient" />)
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass(
        'flex-1',
        'bg-gradient-diagonal',
        'h-px',
        'w-full'
      )
    })

    it('should render gradient vertical divider', () => {
      const { container } = render(
        <Divider color="gradient" orientation="vertical" />
      )
      const line = container.querySelector('[aria-hidden="true"]')
      expect(line).toHaveClass(
        'flex-1',
        'bg-gradient-vertical',
        'w-px',
        'h-full'
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

      const separator = container.querySelector('[role="separator"]')
      expect(separator).toHaveClass('custom-container-class')

      const lines = container.querySelectorAll('[aria-hidden="true"]')
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
})
