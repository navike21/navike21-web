import { MainContent } from "@Components/Content/MainContent";
import { styled } from "@mui/material";
import Image from "next/image";

export const MainContentAbout = styled(MainContent)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(8),
  },
}));

export const ImageAboutUs = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: theme.typography.pxToRem(150),
    objectFit: "cover",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    height: "auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
}));

export const AboutUsInfo = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    padding: theme.spacing(3, 0),
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
    width: "60%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
}));

export const AboutUsContent = styled("p")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.primary,
    margin: 0,
  },
}));
