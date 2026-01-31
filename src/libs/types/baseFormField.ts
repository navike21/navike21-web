export type BaseFormField<
  TFieldName extends string,
  TMessages extends string = never
> = {
  label: string
  placeholder: string
  fieldName: TFieldName
} & Record<TMessages, string>
