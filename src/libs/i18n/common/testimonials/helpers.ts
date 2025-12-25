import { TESTIMONIALS_INFORMATION } from './constants'
import type { ITestimony, TTestimonyItem } from './types'

export const formatTestimonials = (
  testimonials: ITestimony[]
): TTestimonyItem[] =>
  testimonials.map(testimonial => {
    const localizedInfo = TESTIMONIALS_INFORMATION[testimonial.name]

    return {
      ...testimonial,
      ...localizedInfo
    }
  })
