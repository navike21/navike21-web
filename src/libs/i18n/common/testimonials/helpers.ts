import { testimonialsInformation } from './constants'
import type { ITestimony, TTestimonyItem } from './types'

export const formatTestimonials = (
  testimonials: ITestimony[]
): TTestimonyItem[] =>
  testimonials.map(testimonial => {
    const localizedInfo = testimonialsInformation[testimonial.name]

    return {
      ...testimonial,
      ...localizedInfo
    }
  })
