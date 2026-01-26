import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterFormSchema } from './NewsletterForm.schema'
import type { NewsletterFormData } from './NewsletterForm.types'

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

  const inputError = {
    isError: Boolean(errors.email),
    errorMessage: errors.email?.message
  }

  return {
    error: inputError,
    isSubmitting,
    isSubmitSuccessful,
    handleSubmit: handleSubmit(onSubmit),
    register,
    setValue,
    trigger
  }
}
