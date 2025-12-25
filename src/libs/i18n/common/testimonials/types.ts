import type { TLanguage } from '@Types/languages'
import type { TRange } from '@Types/range'

export interface ITestimony {
  name: ETestimonialIds
  position: string
  testimonial: string
}

export interface ITestimonyLocalized {
  avatar?: string
  score: TRange<1, 5>
  originalLanguage: TLanguage
}

export type TTestimonyItem = ITestimony & ITestimonyLocalized

export enum ETestimonialIds {
  JOHN_DOE = 'John Doe'
}

export type TTestimonialsInformation = {
  [key in ETestimonialIds]: ITestimonyLocalized
}
