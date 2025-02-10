import { Button as ButtonMui, ButtonProps } from "@mui/material";
import React from "react";

export const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonMui {...props}>{children}</ButtonMui>
);
