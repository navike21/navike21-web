import { styled, Typography } from "@mui/material";
import { ITitleProps } from "./Title";

export const TitleMui = styled(Typography)<ITitleProps>(
  ({ theme, color, type, textAlign }) => ({
    [theme.breakpoints.up("xs")]: {
      ...(type === "subtitle" && {
        fontSize: theme.typography.pxToRem(16),
        textTransform: "uppercase",
      }),
      ...(type === "title" && {
        fontFamily: "var(--font-syne)",
        fontSize: theme.typography.pxToRem(30),
      }),
      fontWeight: theme.typography.fontWeightBold,
      color:
        color === "white"
          ? theme.palette.common.white
          : theme.palette.primary.main,
      letterSpacing: 1,
      margin: 0,
      textAlign,
    },
    [theme.breakpoints.up("sm")]: {
      ...(type === "subtitle" && {
        fontSize: theme.typography.pxToRem(18),
      }),
    },
    [theme.breakpoints.up("md")]: {
      ...(type === "title" && {
        fontSize: theme.typography.pxToRem(40),
      }),
    },
    [theme.breakpoints.up("lg")]: {
      ...(type === "title" && {
        fontSize: theme.typography.pxToRem(45),
      }),
    },
  })
);
