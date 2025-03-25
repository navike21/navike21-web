import { Button as ButtonMUI, ButtonProps } from '@mui/material'

export const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonMUI {...props}>{children}</ButtonMUI>
)
