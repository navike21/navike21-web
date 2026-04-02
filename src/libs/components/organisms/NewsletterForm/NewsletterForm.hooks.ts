import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterFormSchema } from './NewsletterForm.schema'
import type { NewsletterFormData } from './NewsletterForm.types'
import { newsletterForm } from '@I18n/common/newsletterForm'
import { ESP } from '@Constants/languages'
import { useState } from 'react'

export const useNewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    trigger,
    setValue,
    control
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema)
  })

  const [isOpenModal, setIsOpenModal] = useState(false)

  const { form, subTitle, title } = newsletterForm[ESP]

  const ERROR_EMAIL_MESSAGES = errors[form.email.fieldName]?.message

  const emailValue = useWatch({ control, name: form.email.fieldName })

  const onSubmit: SubmitHandler<NewsletterFormData> = async () => {
    setIsOpenModal(true)
  }

  const inputError = {
    isError: Boolean(errors[form.email.fieldName]),
    errorMessage: form.email[ERROR_EMAIL_MESSAGES as keyof typeof form.email]
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
    reset()
  }

  return {
    error: inputError,
    formText: { form, subTitle, title },
    isSubmitting,
    isSubmitSuccessful,
    isOpenModal,
    emailValue,
    handleSubmit: handleSubmit(onSubmit),
    handleCloseModal,
    register,
    setValue,
    trigger
  }
}
