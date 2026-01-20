import { z } from 'zod'
import {
  FIRST_NAME_MIN_LENGTH,
  INVALID_EMAIL,
  LAST_NAME_MIN_LENGTH,
  LETTERS_ONLY,
  TERMS_REQUIRED,
  EMAIL_REGEX
} from './NewsletterForm.constants'

export const newsletterFormSchema = z.object({
  firstName: z
    .string()
    .min(3, FIRST_NAME_MIN_LENGTH)
    .regex(/^\p{L}+$/u, LETTERS_ONLY),

  lastName: z
    .string()
    .min(3, LAST_NAME_MIN_LENGTH)
    .regex(/^\p{L}+$/u, LETTERS_ONLY),

  email: z.string().refine(value => EMAIL_REGEX.test(value), INVALID_EMAIL),

  termsAccepted: z.boolean().refine(val => val === true, TERMS_REQUIRED)
})
