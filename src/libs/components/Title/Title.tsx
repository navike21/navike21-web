import { TypographyProps } from "@mui/material";
import { TitleMui } from "./title.style";

export type TTitleVariation = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TTitleColor = "primary" | "white";
export interface ITitleProps extends TypographyProps {
  type: "subtitle" | "title" | "title2";
  variant?: TTitleVariation;
  textAlign?: "left" | "center" | "right";
  color?: TTitleColor;
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
