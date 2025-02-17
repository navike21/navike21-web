import { Grid2, styled } from "@mui/material";
import { IWrapProps } from "./Content";

export const Wrap = styled("section")<IWrapProps>(
  ({ theme, backgroundImage, backgroundColor }) => ({
    [theme.breakpoints.up("xs")]: {
      ...(backgroundImage && {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }),
      ...(backgroundColor && { backgroundColor }),
      padding: theme.spacing(0, 4),
      zIndex: 1,
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 2),
    },
  })
);

export const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    width: "95%",
    maxWidth: theme.breakpoints.values.sm,
    gap: theme.spacing(4),
    margin: "0 auto",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.typography.pxToRem(1100),
    gap: theme.spacing(8),
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: theme.typography.pxToRem(1150),
  },
}));

export const MainContainer = styled(Grid2)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(8, 0),
    width: "100%",
    display: "flex",
    gap: theme.spacing(6),
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
    gap: theme.spacing(4),
  },
}));

export const ContentTitle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    // width: theme.typography.pxToRem(400),
    width: "100%",
    margin: "0 auto",
  },
}));
