import { styled } from "@mui/material";
import Image from "next/image";

export const MainClients = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(4, 0),
    width: "100%",
    display: "flex",
    gap: theme.spacing(6),
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

export const ContentClientLogo = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(2.4),
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(0),
    justifyContent: "space-between",
  },
}));

export const ClientLogo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: theme.typography.pxToRem(58),
    height: theme.typography.pxToRem(58),
    objectFit: "contain",
  },
  [theme.breakpoints.up("md")]: {
    width: theme.typography.pxToRem(45),
    height: theme.typography.pxToRem(45),
  },
  [theme.breakpoints.up("lg")]: {
    width: theme.typography.pxToRem(70),
    height: theme.typography.pxToRem(70),
  },
}));
