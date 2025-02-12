import { styled } from "@mui/material";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

export const ContentClientLogo = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2.5),
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  mode: string;
}

export const ClientLogo = styled(Image)<IImageProps>(({ theme, mode }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
    maxHeight:
      (mode === "vertical" && theme.typography.pxToRem(85)) ||
      (mode === "square" && theme.typography.pxToRem(60)) ||
      (mode === "semi-square" && theme.typography.pxToRem(38)) ||
      (mode === "horizontal" && theme.typography.pxToRem(30)) ||
      (mode === "horizontal-xl" && theme.typography.pxToRem(25)),
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  [theme.breakpoints.up("md")]: {
    maxHeight:
      (mode === "vertical" && theme.typography.pxToRem(70)) ||
      (mode === "square" && theme.typography.pxToRem(50)) ||
      (mode === "semi-square" && theme.typography.pxToRem(32)) ||
      (mode === "horizontal" && theme.typography.pxToRem(22)) ||
      (mode === "horizontal-xl" && theme.typography.pxToRem(18)),
  },
  [theme.breakpoints.up("xl")]: {
    maxHeight:
      (mode === "vertical" && theme.typography.pxToRem(100)) ||
      (mode === "square" && theme.typography.pxToRem(60)) ||
      (mode === "horizontal" && theme.typography.pxToRem(26)) ||
      (mode === "semi-square" && theme.typography.pxToRem(32)) ||
      (mode === "horizontal-xl" && theme.typography.pxToRem(20)),
  },
}));
