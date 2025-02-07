import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const HeaderContent = styled("header")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    height: theme.typography.pxToRem(100),
    justifyContent: "space-between",
    left: 0,
    margin: "0 auto",
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(0, 2),
    position: "fixed",
    right: 0,
    top: theme.typography.pxToRem(10),
    width: "90%",
    zIndex: 999,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: theme.breakpoints.values.md,
  },
}));

export const LogoContent = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export const IsoLogo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    height: theme.typography.pxToRem(60),
    width: theme.typography.pxToRem(60),
  },
}));

export const MenuContent = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    gap: theme.spacing(2),
  },
}));

export const ItemMenu = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    color: theme.palette.text.primary,
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
