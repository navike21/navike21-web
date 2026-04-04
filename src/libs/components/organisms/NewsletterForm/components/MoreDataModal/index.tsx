import imageNewsletter from '@Assets/background/smiling-girl-student-looking.jpg'
import { Button } from '@Components/atoms'
import { InputField, Modal, Select } from '@Components/molecules'
import {
  EMAIL_REGEX,
  NAME_REGEX
} from '@Components/organisms/NewsletterForm/NewsletterForm.constants'
import { subscriberService } from '@Services/subscriber.service'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { NewsletterFormData } from '../../NewsletterForm.types'
import { ESP } from '@Constants/languages'
import { newsletterForm } from '@I18n/common/newsletterForm'
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FIRST_NAME_INVALID,
  FIRST_NAME_MIN_LENGTH,
  FIRST_NAME_REQUIRED,
  LAST_NAME_INVALID,
  LAST_NAME_MIN_LENGTH,
  LAST_NAME_REQUIRED,
  SEX_REQUIRED
} from '@I18n/common/newsletterForm/constants'

interface MoreDataModalProps {
  isOpenModal: boolean
  emailValue: string
  handleCloseModal: () => void
}

type MoreDataModalFormValues = Omit<NewsletterFormData, 'sex'> & {
  sex: NewsletterFormData['sex'] | ''
}

export const MoreDataModal = ({
  isOpenModal,
  emailValue,
  handleCloseModal
}: MoreDataModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<MoreDataModalFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      sex: '',
      email: emailValue
    }
  })
  const {
    form: { email, firstName, lastName, sex, submitButton }
  } = newsletterForm[ESP]

  useEffect(() => {
    reset({
      firstName: '',
      lastName: '',
      sex: '',
      email: emailValue
    })
  }, [emailValue, reset])

  const getFieldError = (
    field: Record<string, string> & {
      fieldName: keyof MoreDataModalFormValues
    },
    fieldName: keyof MoreDataModalFormValues
  ) => {
    const errorMessage = errors[fieldName]?.message

    return {
      isError: Boolean(errors[fieldName]),
      errorMessage: errorMessage ? field[errorMessage] : ''
    }
  }

  const firstNameError = getFieldError(firstName, firstName.fieldName)
  const lastNameError = getFieldError(lastName, lastName.fieldName)
  const emailError = getFieldError(email, email.fieldName)
  const sexError = getFieldError(sex, sex.fieldName)

  const onSubmit: SubmitHandler<MoreDataModalFormValues> = async ({
    firstName = '',
    lastName = '',
    email,
    sex
  }) => {
    const gender = sex === '' || sex === undefined ? 'prefer_not_to_say' : sex

    const response = await subscriberService.subscribe({
      firstName,
      lastName,
      contactInformation: { email },
      personalInformation: {
        gender
      }
    })

    if (response.success) {
      reset()
    }
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={handleCloseModal}
      title="Espera, queremos conocerte un poco más."
      image={imageNewsletter}
      size="large"
      animation="slide"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <p className={clsx('text-gray-700 text-sm leading-relaxed')}>
          Para ofrecerte contenido relevante y personalizado, nos encantaría
          conocer un poco más sobre ti.
        </p>
        <div className={clsx('w-full grid col-span-1 gap-5')}>
          <InputField
            label={firstName.label}
            placeholder={firstName.placeholder}
            errorMessage={firstNameError.errorMessage}
            variant={firstNameError.isError ? 'error' : 'default'}
            {...register(firstName.fieldName, {
              required: FIRST_NAME_REQUIRED,
              minLength: {
                value: 3,
                message: FIRST_NAME_MIN_LENGTH
              },
              pattern: {
                value: NAME_REGEX,
                message: FIRST_NAME_INVALID
              }
            })}
          />
          <InputField
            label={lastName.label}
            placeholder={lastName.placeholder}
            errorMessage={lastNameError.errorMessage}
            variant={lastNameError.isError ? 'error' : 'default'}
            {...register(lastName.fieldName, {
              required: LAST_NAME_REQUIRED,
              minLength: {
                value: 2,
                message: LAST_NAME_MIN_LENGTH
              },
              pattern: {
                value: NAME_REGEX,
                message: LAST_NAME_INVALID
              }
            })}
          />
          <InputField
            type="email"
            label={email.label}
            placeholder={email.placeholder}
            errorMessage={emailError.errorMessage}
            variant={emailError.isError ? 'error' : 'default'}
            {...register(email.fieldName, {
              required: EMAIL_REQUIRED,
              pattern: {
                value: EMAIL_REGEX,
                message: EMAIL_INVALID
              }
            })}
          />
          <Select
            label={sex.label}
            options={[
              {
                label: sex.placeholder,
                value: '',
                disabled: true
              },
              {
                label: 'Masculino',
                value: 'male'
              },
              {
                label: 'Femenino',
                value: 'female'
              }
            ]}
            placeholder={sex.placeholder}
            errorMessage={sexError.errorMessage}
            variant={sexError.isError ? 'error' : 'default'}
            {...register(sex.fieldName, {
              required: SEX_REQUIRED
            })}
          />
        </div>
        <div className={clsx('w-full flex justify-end mt-3')}>
          <Button
            variant="primary"
            size="medium"
            type="submit"
            icon="RiArrowRightLine"
          >
            {submitButton}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
