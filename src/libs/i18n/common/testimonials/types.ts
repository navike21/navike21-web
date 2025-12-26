import type { Language } from '@Types/languages'
import type { Range } from '@Types/range'

export interface Testimony {
  name: TestimonialIds
  position: string
  testimonial: string
}

export interface TestimonyLocalized {
  avatar?: string
  score: Range<1, 5>
  originalLanguage: Language
}

export type TestimonyItem = Testimony & TestimonyLocalized

export enum TestimonialIds {
  JOHN_DOE = 'John Doe'
}

export type TestimonialsInformation = {
  [key in TestimonialIds]: TestimonyLocalized
}
