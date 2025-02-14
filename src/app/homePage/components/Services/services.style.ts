import { styled } from "@mui/material";

export const ContentTitle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    width: theme.typography.pxToRem(400),
    margin: "0 auto",
  },
}));

export const ServicesWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    gap: theme.spacing(2),
    padding: theme.spacing(4, 0),
    gridAutoFlow: "row",
    transition: "all 0.3s ease-in-out",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));
