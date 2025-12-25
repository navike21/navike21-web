import { ESP } from '@Constants/languages'
import { formatTestimonials } from './helpers'
import { testimonialsEs } from './locales/es'

export const testimonialsList = {
  [ESP]: formatTestimonials(testimonialsEs)
}
