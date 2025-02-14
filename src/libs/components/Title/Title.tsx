import { TypographyProps } from "@mui/material";
import { TitleMui } from "./title.style";

export interface ITitleProps extends TypographyProps {
  type: "subtitle" | "title" | "title2";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textAlign?: "left" | "center" | "right";
  color?: "primary" | "white";
}

export const Title = ({
  variant,
  children,
  textAlign = "left",
  color = "white",
  ...props
}: ITitleProps) => (
  <TitleMui variant={variant} textAlign={textAlign} color={color} {...props}>
    {children}
  </TitleMui>
);
