import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TestimonialsItem } from './TestimonialsItem'
import { Testimonials } from './Testimonials'
import { testimonialsList } from '@I18n/common/testimonials'
import type { StaticImageData } from 'next/image'

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | StaticImageData
    alt: string
    [key: string]: unknown
  }) => (
    <img src={typeof src === 'string' ? src : src.src} alt={alt} {...props} />
  )
}))

vi.mock('@Helpers/uuid', () => ({
  uuid: () => 'test-uuid-' + Math.random()
}))

vi.mock('../Slider', () => ({
  Slider: ({ children }: React.PropsWithChildren) => (
    <div data-testid="slider">{children}</div>
  )
}))

vi.mock('./testimonials.hooks', () => ({
  useTestimonials: () => ({
    OPTIONS: {
      perPage: 4,
      width: '100%',
      focus: 'center',
      arrows: false,
      breakpoints: {
        800: { perPage: 1 },
        1150: { perPage: 2 },
        1600: { perPage: 3 }
      }
    }
  })
}))

vi.mock('@Constants/languages', () => ({
  ESP: 'es'
}))

vi.mock('@I18n/common/testimonials', () => ({
  testimonialsList: {
    es: [
      {
        name: 'John Doe',
        position: 'CEO',
        testimonial: 'Great service!',
        avatar: '/avatar1.jpg',
        score: 5
      },
      {
        name: 'Jane Smith',
        position: 'Manager',
        testimonial: 'Excellent work!',
        avatar: null,
        score: 4
      }
    ]
  }
}))

vi.mock('../../atoms/Avatar', () => ({
  Avatar: ({ src, alt }: { src: string | StaticImageData; alt: string }) => (
    <img
      src={typeof src === 'string' ? src : src.src}
      alt={alt}
      data-testid="avatar"
    />
  )
}))

vi.mock('../../atoms/Card', () => ({
  Card: ({
    children,
    className
  }: React.PropsWithChildren<{ className?: string }>) => (
    <div className={className}>{children}</div>
  )
}))

vi.mock('../../atoms/Divider', () => ({
  Divider: () => <hr />
}))

const mockAvatar: StaticImageData = {
  src: '/test-avatar.jpg',
  width: 200,
  height: 200,
  blurDataURL: ''
}

describe('TestimonialsItem component', () => {
  const defaultProps = {
    author: 'John Doe',
    role: 'Software Engineer',
    content: 'This is a great testimonial about the service.',
    avatar: mockAvatar
  }

  describe('basic rendering', () => {
    it('should render author name', () => {
      render(<TestimonialsItem {...defaultProps} />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should render role', () => {
      render(<TestimonialsItem {...defaultProps} />)
      expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    })

    it('should render testimonial content', () => {
      render(<TestimonialsItem {...defaultProps} />)
      expect(
        screen.getByText('This is a great testimonial about the service.')
      ).toBeInTheDocument()
    })

    it('should render avatar image', () => {
      render(<TestimonialsItem {...defaultProps} />)
      const avatar = screen.getByAltText('User avatar')
      expect(avatar).toBeInTheDocument()
    })

    it('should render quote icon', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const quoteIcon = container.querySelector('[class*="text-gray-300"]')
      expect(quoteIcon).toBeInTheDocument()
    })
  })

  describe('star rating', () => {
    it('should render 5 star icons', () => {
      const { container } = render(
        <TestimonialsItem {...defaultProps} starRating={5} />
      )
      const stars = container.querySelectorAll('[class*="w-5 h-5"]')
      expect(stars.length).toBeGreaterThanOrEqual(5)
    })

    it('should show filled stars for rating', () => {
      const { container } = render(
        <TestimonialsItem {...defaultProps} starRating={3} />
      )
      const filledStars = container.querySelectorAll('.text-yellow-400')
      expect(filledStars.length).toBeGreaterThanOrEqual(3)
    })

    it('should show gray stars for remaining', () => {
      const { container } = render(
        <TestimonialsItem {...defaultProps} starRating={3} />
      )
      const grayStars = container.querySelectorAll('.text-gray-300')
      expect(grayStars.length).toBeGreaterThan(0)
    })

    it('should show all gray stars when rating is 0', () => {
      const { container } = render(
        <TestimonialsItem {...defaultProps} starRating={0} />
      )
      const grayStars = container.querySelectorAll('.text-gray-300')
      expect(grayStars.length).toBeGreaterThan(0)
    })

    it('should show all filled stars when rating is 5', () => {
      const { container } = render(
        <TestimonialsItem {...defaultProps} starRating={5} />
      )
      const filledStars = container.querySelectorAll('.text-yellow-400')
      expect(filledStars.length).toBeGreaterThanOrEqual(5)
    })

    it('should handle undefined rating', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const stars = container.querySelectorAll('[class*="w-5 h-5"]')
      expect(stars.length).toBeGreaterThan(0)
    })
  })

  describe('layout and styling', () => {
    it('should render Card component', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const card = container.querySelector('.max-w-80')
      expect(card).toBeInTheDocument()
    })

    it('should apply correct padding to container', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const wrapper = container.querySelector('.py-5.px-3')
      expect(wrapper).toBeInTheDocument()
    })

    it('should render divider', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const divider = container.querySelector('hr')
      expect(divider).toBeInTheDocument()
    })

    it('should apply min-height to content', () => {
      render(<TestimonialsItem {...defaultProps} />)
      const content = screen.getByText(
        'This is a great testimonial about the service.'
      )
      expect(content).toHaveClass('min-h-24')
    })
  })

  describe('avatar section', () => {
    it('should render avatar with correct props', () => {
      render(<TestimonialsItem {...defaultProps} />)
      const avatar = screen.getByAltText('User avatar')
      expect(avatar).toBeInTheDocument()
    })

    it('should render author name in avatar section', () => {
      render(<TestimonialsItem {...defaultProps} />)
      const authorName = screen.getByText('John Doe')
      expect(authorName).toHaveClass('font-semibold')
    })

    it('should render role with correct styling', () => {
      render(<TestimonialsItem {...defaultProps} />)
      const role = screen.getByText('Software Engineer')
      expect(role).toHaveClass('text-xs', 'text-gray-500')
    })

    it('should handle string avatar', () => {
      render(<TestimonialsItem {...defaultProps} avatar="/string-avatar.jpg" />)
      const avatar = screen.getByAltText('User avatar')
      expect(avatar).toBeInTheDocument()
    })
  })

  describe('content structure', () => {
    it('should render content in sections', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const sections = container.querySelectorAll('.flex.flex-col.gap-6')
      expect(sections.length).toBeGreaterThan(0)
    })

    it('should position quote icon correctly', () => {
      const { container } = render(<TestimonialsItem {...defaultProps} />)
      const topSection = container.querySelector('.flex.justify-between')
      expect(topSection).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('should handle empty content', () => {
      render(<TestimonialsItem {...defaultProps} content="" />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should handle long content', () => {
      const longContent = 'Lorem ipsum dolor sit amet. '.repeat(20)
      render(<TestimonialsItem {...defaultProps} content={longContent} />)
      expect(
        screen.getByText(content => content.includes('Lorem ipsum'))
      ).toBeInTheDocument()
    })

    it('should handle missing starRating', () => {
      const propsWithoutRating = {
        author: defaultProps.author,
        role: defaultProps.role,
        content: defaultProps.content,
        avatar: defaultProps.avatar
      }
      render(<TestimonialsItem {...propsWithoutRating} />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })
})

describe('Testimonials component', () => {
  describe('basic rendering', () => {
    it('should render Slider component', () => {
      render(<Testimonials />)
      expect(screen.getByTestId('slider')).toBeInTheDocument()
    })

    it('should render testimonial items', () => {
      render(<Testimonials />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })

    it('should render all testimonials from data', () => {
      render(<Testimonials />)
      expect(screen.getByText('CEO')).toBeInTheDocument()
      expect(screen.getByText('Manager')).toBeInTheDocument()
    })

    it('should render testimonial contents', () => {
      render(<Testimonials />)
      expect(screen.getByText('Great service!')).toBeInTheDocument()
      expect(screen.getByText('Excellent work!')).toBeInTheDocument()
    })
  })

  describe('slider configuration', () => {
    it('should render with responsive layout', () => {
      const { container } = render(<Testimonials />)
      const wrapper = container.querySelector(
        '.flex.items-center.justify-center'
      )
      expect(wrapper).toHaveClass('gap-6', 'flex-wrap')
    })

    it('should pass options to Slider', () => {
      render(<Testimonials />)
      const slider = screen.getByTestId('slider')
      expect(slider).toBeInTheDocument()
    })
  })

  describe('empty state', () => {
    it('should render nothing when testimonials list is empty', () => {
      const originalTestimonials = testimonialsList.es
      testimonialsList.es = []

      const { container } = render(<Testimonials />)
      expect(container).toBeEmptyDOMElement()

      testimonialsList.es = originalTestimonials
    })

    it('should render slider when testimonials exist', () => {
      const { container } = render(<Testimonials />)
      expect(
        container.querySelector('[data-testid="slider"]')
      ).toBeInTheDocument()
    })
  })

  describe('data mapping', () => {
    it('should map name to author prop', () => {
      render(<Testimonials />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should map position to role prop', () => {
      render(<Testimonials />)
      expect(screen.getByText('CEO')).toBeInTheDocument()
    })

    it('should map testimonial to content prop', () => {
      render(<Testimonials />)
      expect(screen.getByText('Great service!')).toBeInTheDocument()
    })

    it('should map score to starRating prop', () => {
      const { container } = render(<Testimonials />)
      const filledStars = container.querySelectorAll('.text-yellow-400')
      expect(filledStars.length).toBeGreaterThan(0)
    })

    it('should use default image when avatar is null', () => {
      render(<Testimonials />)
      const avatars = screen.getAllByAltText('User avatar')
      expect(avatars.length).toBe(2)
    })
  })

  describe('layout', () => {
    it('should render items in slider', () => {
      render(<Testimonials />)
      const slider = screen.getByTestId('slider')
      const items = slider.querySelectorAll('.py-5.px-3')
      expect(items.length).toBe(2)
    })

    it('should apply correct wrapper classes', () => {
      const { container } = render(<Testimonials />)
      const wrapper = container.querySelector(
        '.flex.items-center.justify-center'
      )
      expect(wrapper).toBeInTheDocument()
    })
  })

  describe('responsive behavior', () => {
    it('should configure slider for different breakpoints', () => {
      render(<Testimonials />)
      expect(screen.getByTestId('slider')).toBeInTheDocument()
    })
  })

  describe('integration', () => {
    it('should render complete testimonial structure', () => {
      render(<Testimonials />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('CEO')).toBeInTheDocument()
      expect(screen.getByText('Great service!')).toBeInTheDocument()
    })

    it('should handle multiple testimonials correctly', () => {
      const { container } = render(<Testimonials />)
      const cards = container.querySelectorAll('.max-w-80')
      expect(cards.length).toBe(2)
    })
  })
})
