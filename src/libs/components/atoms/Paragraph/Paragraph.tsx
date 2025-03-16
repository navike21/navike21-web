import { Typography, TypographyProps } from '@mui/material'

export const Paragraph = ({ children, variant, ...props }: TypographyProps) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}
