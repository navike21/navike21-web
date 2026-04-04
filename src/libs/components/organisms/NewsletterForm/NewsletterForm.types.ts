import type z from 'zod'
import type { newsletterFormSchema } from './NewsletterForm.schema'

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
