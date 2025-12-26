import { TESTIMONIALS_INFORMATION } from './constants'
import type { Testimony, TestimonyItem } from './types'

export const formatTestimonials = (
  testimonials: Testimony[]
): TestimonyItem[] =>
  testimonials.map(testimonial => {
    const localizedInfo = TESTIMONIALS_INFORMATION[testimonial.name]

    return {
      ...testimonial,
      ...localizedInfo
    }
  })
