import { Grid2, styled } from "@mui/material";
import { IMainContentProps } from "./MainContent";
import { IWrapProps } from "./content.types";
import { ESizes } from "@Enums/size";

export const Wrap = styled("section")<IWrapProps>(
  ({ theme, backgroundImage, backgroundColor }) => ({
    [theme.breakpoints.up(ESizes.XS)]: {
      ...(backgroundImage && {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }),
      ...(backgroundColor && { backgroundColor }),
      padding: theme.spacing(0, 4),
      zIndex: 1,
    },
    [theme.breakpoints.up(ESizes.SM)]: {
      padding: theme.spacing(0, 2),
    },
  })
);

export const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up(ESizes.XS)]: {
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    width: "95%",
    maxWidth: theme.breakpoints.values.sm,
    gap: theme.spacing(4),
    margin: "0 auto",
  },
  [theme.breakpoints.up(ESizes.SM)]: {
    width: "100%",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up(ESizes.LG)]: {
    maxWidth: theme.typography.pxToRem(1100),
    gap: theme.spacing(8),
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.up(ESizes.XL)]: {
    maxWidth: theme.typography.pxToRem(1150),
  },
}));

export const MainContainer = styled(Grid2)<IMainContentProps>(
  ({ theme, contentDirection }) => ({
    [theme.breakpoints.up(ESizes.XS)]: {
      padding: theme.spacing(8, 0),
      width: "100%",
      display: "flex",
      gap: theme.spacing(6),
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up(ESizes.MD)]: {
      padding: theme.spacing(10, 0),
      gap: theme.spacing(4),
      flexDirection: contentDirection,
    },
  })
);

export const ContentTitle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up(ESizes.XS)]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    width: "100%",
  },
  [theme.breakpoints.up(ESizes.MD)]: {
    margin: "0 auto",
  },
}));
