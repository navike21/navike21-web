import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const HeaderContent = styled("header")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(2),
    height: theme.typography.pxToRem(82),
    justifyContent: "space-between",
    left: 0,
    margin: "0 auto",
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(2),
    position: "fixed",
    right: 0,
    top: theme.typography.pxToRem(10),
    width: "90%",
    zIndex: 999,

    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--black-opacity-400)",
      backdropFilter: "blur(10px)",
      zIndex: -1,
    },
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: theme.breakpoints.values.md,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.typography.pxToRem(1150),
  },
}));

export const LogoContent = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
    width: "fit-content",
  },
}));

export const IsoLogo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    height: theme.typography.pxToRem(50),
    width: theme.typography.pxToRem(50),
  },
  [theme.breakpoints.up("lg")]: {
    height: theme.typography.pxToRem(40),
    width: theme.typography.pxToRem(40),
  },
}));

export const CompanyName = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    color: "var(--mui-palette-text-primary)",
    display: "none",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: "bold",
    fontFamily: "var(--font-syne)",
  },
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
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    color: "var(--mui-palette-text-primary)",
    padding: theme.spacing(1, 1),
    transition: "all ease 0.3s",
    "&:hover": {
      transition: "all ease 0.3s",
      color: "var(--mui-palette-secondary-main)",
    },
  },
}));
