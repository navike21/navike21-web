import type { BaseFormField } from '@Types/baseFormField'
import type {
  EMAIL_FIELD,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FIRST_NAME_FIELD,
  FIRST_NAME_INVALID,
  FIRST_NAME_MIN_LENGTH,
  FIRST_NAME_REQUIRED,
  LAST_NAME_FIELD,
  LAST_NAME_INVALID,
  LAST_NAME_MIN_LENGTH,
  LAST_NAME_REQUIRED,
  LETTERS_ONLY,
  SEX_FIELD,
  SEX_REQUIRED,
  TERMS_ACCEPTED_FIELD
} from './constants'

export type NewsletterFormFields = {
  [FIRST_NAME_FIELD]: BaseFormField<
    typeof FIRST_NAME_FIELD,
    | typeof FIRST_NAME_REQUIRED
    | typeof FIRST_NAME_MIN_LENGTH
    | typeof FIRST_NAME_INVALID
  >
  [LAST_NAME_FIELD]: BaseFormField<
    typeof LAST_NAME_FIELD,
    | typeof LAST_NAME_REQUIRED
    | typeof LAST_NAME_MIN_LENGTH
    | typeof LAST_NAME_INVALID
  >
  [EMAIL_FIELD]: BaseFormField<
    typeof EMAIL_FIELD,
    typeof EMAIL_REQUIRED | typeof EMAIL_INVALID
  >
  [SEX_FIELD]: BaseFormField<typeof SEX_FIELD, typeof SEX_REQUIRED>

  [TERMS_ACCEPTED_FIELD]: {
    fieldName: typeof TERMS_ACCEPTED_FIELD
    disclaimer: string
    textPolicy: string
  }
}

export type BaseFormSchema<TFields> = {
  title: string
  subTitle: string
  form: TFields & {
    [LETTERS_ONLY]: string
    submitButton: string
  }
}
