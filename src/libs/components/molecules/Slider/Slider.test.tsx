import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Slider } from '.'

vi.mock('@Helpers/uuid', () => ({
  uuid: () => 'test-uuid-' + Math.random()
}))

vi.mock('@splidejs/react-splide', () => ({
  Splide: ({
    children,
    options,
    hasTrack
  }: React.PropsWithChildren<{
    options?: Record<string, unknown>
    hasTrack?: boolean
  }>) => (
    <div
      data-testid="splide"
      data-has-track={hasTrack}
      data-options={JSON.stringify(options)}
    >
      {children}
    </div>
  ),
  SplideTrack: ({ children }: React.PropsWithChildren) => (
    <div data-testid="splide-track">{children}</div>
  ),
  SplideSlide: ({ children }: React.PropsWithChildren) => (
    <div data-testid="splide-slide">{children}</div>
  )
}))

describe('Slider component', () => {
  describe('basic rendering', () => {
    it('should render Splide component', () => {
      render(
        <Slider>
          <div>Slide 1</div>
        </Slider>
      )
      expect(screen.getByTestId('splide')).toBeInTheDocument()
    })

    it('should render single child', () => {
      render(
        <Slider>
          <div>Single Slide</div>
        </Slider>
      )
      expect(screen.getByText('Single Slide')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      render(
        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>
      )
      expect(screen.getByText('Slide 1')).toBeInTheDocument()
      expect(screen.getByText('Slide 2')).toBeInTheDocument()
      expect(screen.getByText('Slide 3')).toBeInTheDocument()
    })

    it('should set hasTrack to false', () => {
      render(
        <Slider>
          <div>Content</div>
        </Slider>
      )
      const splide = screen.getByTestId('splide')
      expect(splide).toHaveAttribute('data-has-track', 'false')
    })
  })

  describe('children wrapping', () => {
    it('should wrap each child in SplideSlide', () => {
      render(
        <Slider>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </Slider>
      )
      const slides = screen.getAllByTestId('splide-slide')
      expect(slides.length).toBe(2)
    })

    it('should wrap single child in SplideSlide', () => {
      render(
        <Slider>
          <div>Single Slide</div>
        </Slider>
      )
      const slides = screen.getAllByTestId('splide-slide')
      expect(slides.length).toBe(1)
    })

    it('should wrap children in SplideTrack', () => {
      render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      expect(screen.getByTestId('splide-track')).toBeInTheDocument()
    })
  })

  describe('options configuration', () => {
    it('should merge custom options with defaults', () => {
      const customOptions = { perPage: 3, gap: '1rem' }
      render(
        <Slider options={customOptions}>
          <div>Slide</div>
        </Slider>
      )
      const splide = screen.getByTestId('splide')
      const options = JSON.parse(splide.dataset['options'] || '{}')
      expect(options.perPage).toBe(3)
      expect(options.gap).toBe('1rem')
    })

    it('should apply default pagination classes', () => {
      render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const splide = screen.getByTestId('splide')
      const options = JSON.parse(splide.dataset['options'] || '{}')
      expect(options.classes.pagination).toBe(
        'splide__pagination flex gap-2 mt-4 justify-center'
      )
    })

    it('should override default options with custom options', () => {
      const customOptions = {
        classes: {
          pagination: 'custom-pagination-class'
        }
      }
      render(
        <Slider options={customOptions}>
          <div>Slide</div>
        </Slider>
      )
      const splide = screen.getByTestId('splide')
      const options = JSON.parse(splide.dataset['options'] || '{}')
      expect(options.classes.pagination).toBe('custom-pagination-class')
    })

    it('should handle undefined options', () => {
      render(
        <Slider options={undefined}>
          <div>Slide</div>
        </Slider>
      )
      expect(screen.getByTestId('splide')).toBeInTheDocument()
    })
  })

  describe('navigation controls', () => {
    it('should render prev button', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const prevButton = container.querySelector('.splide__arrow--prev')
      expect(prevButton).toBeInTheDocument()
    })

    it('should render next button', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const nextButton = container.querySelector('.splide__arrow--next')
      expect(nextButton).toBeInTheDocument()
    })

    it('should render pagination', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const pagination = container.querySelector('.splide__pagination')
      expect(pagination).toBeInTheDocument()
    })

    it('should render arrows container with correct classes', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const arrowsContainer = container.querySelector('.splide__arrows')
      expect(arrowsContainer).toHaveClass('flex', 'gap-3')
    })
  })

  describe('layout structure', () => {
    it('should render controls container', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const controlsContainer = container.querySelector(
        '.flex.w-full.justify-between'
      )
      expect(controlsContainer).toBeInTheDocument()
    })

    it('should apply correct classes to controls container', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const controlsContainer = container.querySelector(
        '.flex.w-full.justify-between'
      )
      expect(controlsContainer).toHaveClass('items-center', 'mt-4')
    })

    it('should render outer flex container', () => {
      const { container } = render(
        <Slider>
          <div>Slide</div>
        </Slider>
      )
      const outerContainer = container.querySelector('.flex.flex-col')
      expect(outerContainer).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('should handle empty children array', () => {
      render(<Slider>{[]}</Slider>)
      const slides = screen.queryAllByTestId('splide-slide')
      expect(slides.length).toBe(0)
    })

    it('should handle null children', () => {
      render(<Slider>{null}</Slider>)
      expect(screen.getByTestId('splide')).toBeInTheDocument()
    })

    it('should handle complex child elements', () => {
      render(
        <Slider>
          <div>
            <h2>Title</h2>
            <p>Description</p>
          </div>
        </Slider>
      )
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    it('should handle large number of slides', () => {
      const slides = Array.from({ length: 100 }, (_, i) => (
        <div key={i}>Slide {i}</div>
      ))
      render(<Slider>{slides}</Slider>)
      expect(screen.getAllByTestId('splide-slide').length).toBe(100)
    })
  })

  describe('responsive configuration', () => {
    it('should accept responsive breakpoints in options', () => {
      const responsiveOptions = {
        breakpoints: {
          640: { perPage: 1 },
          768: { perPage: 2 },
          1024: { perPage: 3 }
        }
      }
      render(
        <Slider options={responsiveOptions}>
          <div>Slide</div>
        </Slider>
      )
      const splide = screen.getByTestId('splide')
      const options = JSON.parse(splide.dataset['options'] || '{}')
      expect(options.breakpoints).toBeDefined()
      expect(options.breakpoints['640']).toEqual({ perPage: 1 })
    })
  })
})
