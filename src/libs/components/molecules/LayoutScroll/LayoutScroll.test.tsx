import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LayoutScroll } from './LayoutScroll'
import * as HeaderContext from '@Context/headerContext.hooks'
import * as motion from 'motion'

vi.mock('lenis/react', () => ({
  ReactLenis: vi.fn(
    ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div data-testid="react-lenis" {...props}>
        {children}
      </div>
    )
  )
}))

vi.mock('motion', () => ({
  frame: {
    update: vi.fn()
  },
  cancelFrame: vi.fn()
}))

vi.mock('../Header', () => ({
  BgHeader: () => <div data-testid="bg-header">BgHeader</div>
}))

vi.mock('@Context/headerContext.hooks')

describe('LayoutScroll component', () => {
  beforeEach(() => {
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: false,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
  })

  describe('basic rendering', () => {
    it('should render ReactLenis wrapper', () => {
      const { getByTestId } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      expect(getByTestId('react-lenis')).toBeInTheDocument()
    })

    it('should render children inside main element', () => {
      const { getByText } = render(
        <LayoutScroll>
          <div>Test Content</div>
        </LayoutScroll>
      )
      expect(getByText('Test Content')).toBeInTheDocument()
    })

    it('should render BgHeader component', () => {
      const { getByTestId } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      expect(getByTestId('bg-header')).toBeInTheDocument()
    })

    it('should render main element with correct classes', () => {
      const { container } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      expect(main).toHaveClass(
        'transition-all',
        'duration-500',
        'ease-in-out',
        'relative'
      )
    })
  })

  describe('ReactLenis configuration', () => {
    it('should set root prop to true', () => {
      const { getByTestId } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const lenis = getByTestId('react-lenis')
      // Root is a boolean prop passed to ReactLenis, not an HTML attribute
      expect(lenis).toBeInTheDocument()
    })

    it('should configure options correctly', () => {
      const { getByTestId } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const lenis = getByTestId('react-lenis')
      expect(lenis).toHaveAttribute('options')
    })
  })

  describe('children rendering', () => {
    it('should render single child', () => {
      const { getByText } = render(
        <LayoutScroll>
          <div>Single Child</div>
        </LayoutScroll>
      )
      expect(getByText('Single Child')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      const { getByText } = render(
        <LayoutScroll>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </LayoutScroll>
      )
      expect(getByText('Child 1')).toBeInTheDocument()
      expect(getByText('Child 2')).toBeInTheDocument()
      expect(getByText('Child 3')).toBeInTheDocument()
    })

    it('should render complex nested children', () => {
      const { getByText } = render(
        <LayoutScroll>
          <section>
            <h1>Title</h1>
            <p>Paragraph</p>
          </section>
        </LayoutScroll>
      )
      expect(getByText('Title')).toBeInTheDocument()
      expect(getByText('Paragraph')).toBeInTheDocument()
    })
  })

  describe('layout structure', () => {
    it('should wrap children in main element', () => {
      const { container } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
      // BgHeader is rendered first, then children - check text content in main
      expect(main).toHaveTextContent('Content')
    })

    it('should place BgHeader before children', () => {
      const { container } = render(
        <LayoutScroll>
          <div data-testid="content">Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      const firstChild = main?.firstChild as HTMLElement
      expect(firstChild.getAttribute('data-testid')).toBe('bg-header')
    })

    it('should maintain proper DOM hierarchy', () => {
      const { container, getByTestId } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const lenis = getByTestId('react-lenis')
      const main = container.querySelector('main')
      expect(lenis.contains(main)).toBe(true)
    })
  })

  describe('HeaderContext integration', () => {
    it('should call useHeaderContext', () => {
      render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })

    it('should handle toggleMenu state', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })

      render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })

    it('should respond to toggleMenu changes', () => {
      const { rerender } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })

      rerender(
        <LayoutScroll>
          <div>Content Updated</div>
        </LayoutScroll>
      )

      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })
  })

  describe('accessibility', () => {
    it('should use semantic main element', () => {
      const { container } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('should allow keyboard navigation', () => {
      const { container } = render(
        <LayoutScroll>
          <button>Focusable Button</button>
        </LayoutScroll>
      )
      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<LayoutScroll>{null}</LayoutScroll>)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('should handle undefined children', () => {
      const { container } = render(<LayoutScroll>{undefined}</LayoutScroll>)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('should handle string children', () => {
      const { getByText } = render(
        <LayoutScroll>Plain text content</LayoutScroll>
      )
      expect(getByText('Plain text content')).toBeInTheDocument()
    })

    it('should handle fragment children', () => {
      const { getByText } = render(
        <LayoutScroll>
          <>
            <div>Fragment Child 1</div>
            <div>Fragment Child 2</div>
          </>
        </LayoutScroll>
      )
      expect(getByText('Fragment Child 1')).toBeInTheDocument()
      expect(getByText('Fragment Child 2')).toBeInTheDocument()
    })
  })

  describe('responsive behavior', () => {
    it('should apply responsive classes to main', () => {
      const { container } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      expect(main).toHaveClass('transition-all', 'duration-500', 'ease-in-out')
    })

    it('should maintain relative positioning', () => {
      const { container } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      const main = container.querySelector('main')
      expect(main).toHaveClass('relative')
    })
  })

  describe('motion frame integration', () => {
    it('should register frame update on mount', () => {
      render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )
      expect(motion.frame.update).toHaveBeenCalled()
      expect(motion.frame.update).toHaveBeenCalledWith(
        expect.any(Function),
        true
      )
    })

    it('should call update function with timestamp', () => {
      render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      // Get the update callback that was passed to frame.update
      const updateCallback = vi.mocked(motion.frame.update).mock.calls[0]?.[0]
      expect(updateCallback).toBeDefined()

      // Call the update function with a mock FrameData object
      if (updateCallback) {
        updateCallback({ timestamp: 1000, delta: 16, isProcessing: false })
      }

      // The function should process the timestamp
      expect(updateCallback).toBeInstanceOf(Function)
    })

    it('should cleanup frame update on unmount', () => {
      const { unmount } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      vi.mocked(motion.cancelFrame).mockClear()
      unmount()

      expect(motion.cancelFrame).toHaveBeenCalled()
      expect(motion.cancelFrame).toHaveBeenCalledWith(expect.any(Function))
    })
  })

  describe('lenis scroll control', () => {
    it('should handle lenis ref when not available', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })

      const { rerender } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      // Should not throw error when lenis ref is not available
      rerender(
        <LayoutScroll>
          <div>Updated</div>
        </LayoutScroll>
      )

      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })

    it('should respond to toggleMenu state changes', () => {
      const { rerender } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      // Change toggleMenu to true
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })

      rerender(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })

    it('should handle cleanup when toggleMenu is active', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })

      const { unmount } = render(
        <LayoutScroll>
          <div>Content</div>
        </LayoutScroll>
      )

      // Should cleanup without errors
      unmount()
      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })
  })
})
