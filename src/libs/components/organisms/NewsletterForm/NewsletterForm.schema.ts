import { z } from 'zod'
import { EMAIL_REGEX, NAME_REGEX } from './NewsletterForm.constants'
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FIRST_NAME_MIN_LENGTH,
  LAST_NAME_MIN_LENGTH,
  LETTERS_ONLY
} from '@I18n/common/newsletterForm/constants'

export const newsletterFormSchema = z.object({
  firstName: z
    .string()
    .min(3, FIRST_NAME_MIN_LENGTH)
    .regex(NAME_REGEX, LETTERS_ONLY)
    .optional(),

  lastName: z
    .string()
    .min(2, LAST_NAME_MIN_LENGTH)
    .regex(NAME_REGEX, LETTERS_ONLY)
    .optional(),

  email: z
    .string()
    .min(1, EMAIL_REQUIRED)
    .refine(value => EMAIL_REGEX.test(value), EMAIL_INVALID),

  sex: z.enum(['male', 'female', 'other']).optional()
})
