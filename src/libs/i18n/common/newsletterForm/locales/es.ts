import { privacyPolicyEs } from '@I18n/common/legalArea/locales/es/privacyPolicy'
import {
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
} from '../constants'
import type { BaseFormSchema, NewsletterFormFields } from '../types'

export const newsletterFormEs = {
  title: 'Suscríbete a nuestro boletín informativo',
  subTitle: 'Entérate de todas nuestras novedades',
  form: {
    [FIRST_NAME_FIELD]: {
      label: 'Nombres:',
      placeholder: 'Ingresa tus nombres',
      fieldName: FIRST_NAME_FIELD,
      [FIRST_NAME_REQUIRED]: 'El nombre es obligatorio',
      [FIRST_NAME_MIN_LENGTH]: 'El nombre debe tener al menos 3 caracteres',
      [FIRST_NAME_INVALID]: 'El nombre es inválido'
    },
    [LAST_NAME_FIELD]: {
      label: 'Apellidos:',
      placeholder: 'Ingresa tus apellidos',
      fieldName: LAST_NAME_FIELD,
      [LAST_NAME_REQUIRED]: 'El apellido es obligatorio',
      [LAST_NAME_MIN_LENGTH]: 'El apellido debe tener al menos 2 caracteres',
      [LAST_NAME_INVALID]: 'El apellido es inválido'
    },
    [EMAIL_FIELD]: {
      label: 'Correo electrónico:',
      placeholder: 'Ingresa tu correo electrónico',
      fieldName: EMAIL_FIELD,
      [EMAIL_REQUIRED]: 'El correo electrónico es obligatorio',
      [EMAIL_INVALID]: 'El correo electrónico es inválido'
    },
    [SEX_FIELD]: {
      label: 'Sexo:',
      placeholder: 'Selecciona tu sexo',
      fieldName: SEX_FIELD,
      [SEX_REQUIRED]: 'Debe seleccionar un sexo'
    },
    [TERMS_ACCEPTED_FIELD]: {
      fieldName: TERMS_ACCEPTED_FIELD,
      disclaimer: 'Al suscribirte aceptas nuestra, ',
      textPolicy: privacyPolicyEs.title.toLowerCase()
    },
    [LETTERS_ONLY]: 'Solo se permiten letras en este campo',
    submitButton: 'Suscríbete'
  }
} satisfies BaseFormSchema<NewsletterFormFields>
