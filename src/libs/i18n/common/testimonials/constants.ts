import { ESP } from '@Constants/languages'
import { TestimonialIds, type TestimonialsInformation } from './types'

export const TESTIMONIALS_INFORMATION: TestimonialsInformation = {
  [TestimonialIds.JOHN_DOE]: {
    avatar: '/images/testimonials/john_doe.jpg',
    score: 2,
    originalLanguage: ESP
  }
}
