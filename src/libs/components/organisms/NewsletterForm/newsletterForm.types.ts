import type z from 'zod'
import type { newsletterFormSchema } from './newsletterForm.schema'

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
