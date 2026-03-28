import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterFormSchema } from './NewsletterForm.schema'
import type { NewsletterFormData } from './NewsletterForm.types'
import { newsletterForm } from '@I18n/common/newsletterForm'
import { ESP } from '@Constants/languages'
import { subscriberService } from '@Services/subscriber.service'

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

  const { form, subTitle, title } = newsletterForm[ESP]

  const onSubmit: SubmitHandler<NewsletterFormData> = async ({
    firstName,
    lastName,
    email
  }) => {
    const response = await subscriberService.subscribe({
      firstName,
      lastName,
      contactInformation: { email }
    })

    if (response.success) {
      reset()
    }
  }

  const ERROR_EMAIL_MESSAGES = errors[form.email.fieldName]?.message

  const inputError = {
    isError: Boolean(errors[form.email.fieldName]),
    errorMessage: form.email[ERROR_EMAIL_MESSAGES as keyof typeof form.email]
  }

  return {
    error: inputError,
    formText: { form, subTitle, title },
    isSubmitting,
    isSubmitSuccessful,
    handleSubmit: handleSubmit(onSubmit),
    register,
    setValue,
    trigger
  }
}
