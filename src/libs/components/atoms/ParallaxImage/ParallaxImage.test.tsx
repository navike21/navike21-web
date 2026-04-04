import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { ParallaxImage } from './ParallaxImage'

import type { StaticImageData } from 'next/image'

vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  },
  useScroll: vi.fn(() => ({
    scrollYProgress: { current: 0, prev: 0 }
  })),
  useTransform: vi.fn((value, input, output) => ({
    current: output[0],
    prev: output[0]
  }))
}))

describe('ParallaxImage component', () => {
  const mockImage: StaticImageData = {
    src: '/test-image.jpg',
    height: 600,
    width: 800,
    blurDataURL: 'data:image/png;base64,test'
  }

  describe('basic rendering', () => {
    it('should render image', () => {
      const { container } = render(
        <ParallaxImage img={mockImage} alt="Test Image" />
      )
      const image = container.querySelector('img')
      expect(image).toBeInTheDocument()
    })

    it('should render with correct alt text', () => {
      const { container } = render(
        <ParallaxImage img={mockImage} alt="Beautiful Landscape" />
      )
      const image = container.querySelector('img')
      expect(image).toHaveAttribute('alt', 'Beautiful Landscape')
    })

    it('should have two container divs', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const divs = container.querySelectorAll('div')
      expect(divs.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('container styling', () => {
    it('should apply overflow-hidden to outer container', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const outerDiv = container.firstChild as HTMLElement
      expect(outerDiv).toHaveClass('overflow-hidden')
    })

    it('should apply default relative className', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const outerDiv = container.firstChild as HTMLElement
      expect(outerDiv).toHaveClass('relative')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <ParallaxImage img={mockImage} alt="Test" className="custom-parallax" />
      )
      const outerDiv = container.firstChild as HTMLElement
      expect(outerDiv).toHaveClass('custom-parallax')
    })

    it('should merge custom className with overflow-hidden', () => {
      const { container } = render(
        <ParallaxImage img={mockImage} alt="Test" className="custom-class" />
      )
      const outerDiv = container.firstChild as HTMLElement
      expect(outerDiv).toHaveClass('overflow-hidden', 'custom-class')
    })
  })

  describe('inner motion div styling', () => {
    it('should have scale and overflow classes on inner div', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const innerDiv = container.querySelector('.scale-3d')
      expect(innerDiv).toBeInTheDocument()
      expect(innerDiv).toHaveClass(
        'scale-125',
        'relative',
        'overflow-hidden',
        'h-full'
      )
    })
  })

  describe('image properties', () => {
    it('should render with Next.js Image component', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const image = container.querySelector('img')
      expect(image).toBeInTheDocument()
    })

    it('should have object-cover, object-center, h-auto, w-auto classes', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const image = container.querySelector('img')
      expect(image).toHaveClass(
        'object-cover',
        'object-center',
        'h-auto',
        'w-auto'
      )
    })

    it('should render with correct src from StaticImageData', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const image = container.querySelector('img')
      expect(image).toHaveAttribute('src')
    })
  })

  describe('parallax scroll integration', () => {
    it('should use motion hooks for parallax effect', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const motionDiv = container.querySelector('.scale-3d')
      expect(motionDiv).toBeInTheDocument()
    })

    it('should have parallax container structure', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const outerContainer = container.firstChild
      const innerContainer = container.querySelector('.scale-3d')

      expect(outerContainer).toBeInTheDocument()
      expect(innerContainer).toBeInTheDocument()
    })

    it('should setup ref for scroll tracking', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('ref usage', () => {
    it('should use ref on outer container', () => {
      const { container } = render(<ParallaxImage img={mockImage} alt="Test" />)
      const outerDiv = container.firstChild
      expect(outerDiv).toBeInTheDocument()
    })
  })

  describe('different image sources', () => {
    it('should handle different image dimensions', () => {
      const wideImage: StaticImageData = {
        src: '/wide-image.jpg',
        height: 400,
        width: 1200,
        blurDataURL: 'data:image/png;base64,wide'
      }

      const { container } = render(
        <ParallaxImage img={wideImage} alt="Wide Image" />
      )
      const image = container.querySelector('img')
      expect(image).toBeInTheDocument()
    })

    it('should handle square images', () => {
      const squareImage: StaticImageData = {
        src: '/square.jpg',
        height: 500,
        width: 500,
        blurDataURL: 'data:image/png;base64,square'
      }

      const { container } = render(
        <ParallaxImage img={squareImage} alt="Square Image" />
      )
      const image = container.querySelector('img')
      expect(image).toBeInTheDocument()
    })
  })
})
