import { styled } from "@mui/material";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { EPaletteText, ESecondary } from "@Enums/color";
import { ETypography } from "@Enums/typography";

export const MotionHeaderContent = styled(motion.header)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: theme.spacing(2),
  height: theme.typography.pxToRem(82),
  justifyContent: "space-between",
  left: 0,
  margin: "0 auto",
  padding: theme.spacing(2, 3),
  position: "fixed",
  right: 0,
  top: theme.typography.pxToRem(10),
  zIndex: 999,
  width: "90%",
}));

export const LogoContent = styled(Link)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  width: "fit-content",
}));

export const IsoLogo = styled(Image)(({ theme }) => ({
  height: theme.typography.pxToRem(50),
  width: theme.typography.pxToRem(50),
  [theme.breakpoints.up("lg")]: {
    height: theme.typography.pxToRem(40),
    width: theme.typography.pxToRem(40),
  },
}));

export const CompanyName = styled("span")(({ theme }) => ({
  color: EPaletteText.PRIMARY,
  display: "none",
  fontSize: theme.typography.pxToRem(20),
  fontWeight: "bold",
  fontFamily: ETypography.TITLE,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.pxToRem(24),
  },
}));

export const MenuContent = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    gap: theme.spacing(1.5),
  },
}));

export const ItemMenu = styled(Link)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
  color: EPaletteText.PRIMARY,
  padding: theme.spacing(1, 1),
  transition: "all ease 0.3s",
  "&:hover": {
    transition: "all ease 0.3s",
    color: ESecondary.MAIN,
  },
}));
