import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterFormSchema } from './newsletterForm.schema'
import type { NewsletterFormData } from './newsletterForm.types'

export const useNewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    trigger,
    setValue
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema)
  })

  const onSubmit: SubmitHandler<NewsletterFormData> = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    reset()
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isSubmitSuccessful,
    trigger,
    setValue
  }
}
