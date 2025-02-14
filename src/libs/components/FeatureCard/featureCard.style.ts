import { Title } from "@Components/Title/Title";
import { styled, Typography } from "@mui/material";

export const FeatureCardWrapper = styled("article")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    position: "relative",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderWidth: theme.typography.pxToRem(0.5),
      borderColor: theme.palette.common.white,
      borderStyle: "solid",
      zIndex: -1,
      opacity: 0.2,
      transition: "all 0.3s ease-in-out",
    },
    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
  },
}));

export const ContentInfoCard = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),
  },
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.typography.pxToRem(50),
    height: theme.typography.pxToRem(50),
    borderRadius: "50%",
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(25),
    margin: 0,
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      zIndex: -1,
      opacity: 0.2,
    },

    svg: {
      fill: theme.palette.primary.main,
    },
  },
}));

export const TitleCard = styled(Title)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textTransform: "initial",
    fontSize: theme.typography.pxToRem(18),
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.pxToRem(16),
    opacity: 0.8,
  },
}));
