import { Typography, TypographyProps } from '@mui/material'

export const Paragraph = ({ children, variant }: TypographyProps) => {
  return <Typography variant={variant}>{children}</Typography>
}
