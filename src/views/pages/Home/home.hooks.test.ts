import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useHome } from './home.hooks'
import { testimonialsList } from '@I18n/common/testimonials'
import { TestimonialIds } from '@I18n/common/testimonials/types'

vi.mock('@Constants/languages', () => ({
  ESP: 'es'
}))

vi.mock('@I18n/common/metrics', () => ({
  companyMetrics: {
    es: [
      { id: 1, label: 'Projects', value: 100, suffix: '+' },
      { id: 2, label: 'Clients', value: 50, suffix: '+' }
    ]
  }
}))

vi.mock('@I18n/common/services', () => ({
  servicesList: {
    es: [
      { id: 1, title: 'Service 1', shortDescription: 'Desc 1', icon: 'icon1' },
      { id: 2, title: 'Service 2', shortDescription: 'Desc 2', icon: 'icon2' }
    ]
  }
}))

vi.mock('@I18n/common/testimonials', () => ({
  testimonialsList: {
    es: []
  }
}))

vi.mock('@I18n/pages/home', () => ({
  heroSection: {
    es: [{ title: 'Hero Title', description: 'Hero Desc', controlActions: [] }]
  },
  servicesSection: {
    es: {
      title: 'Services Title',
      description: 'Services Desc',
      controlAction: {
        href: '/services',
        icon: 'arrow',
        children: 'View All',
        variant: 'primary'
      }
    }
  },
  metricsSection: {
    es: {
      title: 'Metrics Title',
      description: 'Metrics Desc'
    }
  },
  testimonialsSection: {
    es: {
      title: 'Testimonials Title',
      description: 'Testimonials Desc'
    }
  }
}))

describe('useHome hook', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    testimonialsList.es = []
  })

  describe('with testimonials', () => {
    it('should return all home data correctly', () => {
      testimonialsList.es = [
        {
          name: TestimonialIds.JOHN_DOE,
          position: 'Dev',
          testimonial: 'Good',
          avatar: 'avatar1.png',
          score: 5,
          originalLanguage: 'es'
        }
      ]

      const { result } = renderHook(() => useHome())

      expect(result.current.heroSectionCurrent).toEqual([
        { title: 'Hero Title', description: 'Hero Desc', controlActions: [] }
      ])
      expect(result.current.servicesSectionCurrent).toEqual({
        title: 'Services Title',
        description: 'Services Desc',
        controlAction: {
          href: '/services',
          icon: 'arrow',
          children: 'View All',
          variant: 'primary'
        }
      })
      expect(result.current.servicesListCurrent).toEqual([
        {
          id: 1,
          title: 'Service 1',
          shortDescription: 'Desc 1',
          icon: 'icon1'
        },
        { id: 2, title: 'Service 2', shortDescription: 'Desc 2', icon: 'icon2' }
      ])
      expect(result.current.metricsSectionCurrent).toEqual({
        title: 'Metrics Title',
        description: 'Metrics Desc'
      })
      expect(result.current.companyMetricsCurrent).toEqual([
        { id: 1, label: 'Projects', value: 100, suffix: '+' },
        { id: 2, label: 'Clients', value: 50, suffix: '+' }
      ])
      expect(result.current.testimonialsSectionCurrent).toEqual({
        title: 'Testimonials Title',
        description: 'Testimonials Desc'
      })
      expect(result.current.areThereTestimonials).toBe(true)
    })
  })

  describe('without testimonials', () => {
    it('should return areThereTestimonials as false when no testimonials', () => {
      const { result } = renderHook(() => useHome())

      expect(result.current.areThereTestimonials).toBe(false)
    })
  })
})
