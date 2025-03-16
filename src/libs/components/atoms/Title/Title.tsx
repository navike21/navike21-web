import { Typography, TypographyProps } from '@mui/material'
import { THeading } from '@Types/types/common'

interface ITitleProps extends TypographyProps {
  variant?: THeading
}

export const Title = ({ children, variant = 'h2', ...props }: ITitleProps) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}
