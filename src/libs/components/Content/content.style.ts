import { Grid2, styled } from "@mui/material";
import { WrapProps } from "./Content";

export const Wrap = styled("section")<WrapProps>(
  ({ theme, backgroundImage, backgroundColor }) => ({
    [theme.breakpoints.up("xs")]: {
      ...(backgroundImage && {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }),
      ...(backgroundColor && { backgroundColor }),
      padding: theme.spacing(0, 4),
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
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.breakpoints.values.lg,
    gap: theme.spacing(8),
    width: "100%",
    padding: theme.spacing(0, 6),
  },
}));

export const MainContainer = styled(Grid2)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(6, 0),
    width: "100%",
    display: "flex",
    gap: theme.spacing(6),
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));
