import { TEAM_WORK_BACKGROUND } from "@Assets/images/images";
import { Paper, styled, Typography } from "@mui/material";

export const HeroContent = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundImage: `url(${TEAM_WORK_BACKGROUND.src})`,
    width: "100%",
    minHeight: "100dvh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    transition: "all 0.3s ease-in-out",

    "&::before": {
      content: "''",
      backgroundColor: "var(--black-opacity-700)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8),
    paddingTop: theme.typography.pxToRem(120),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(8, 2),
  },
  [theme.breakpoints.up("xl")]: {
    minHeight: "75dvh",
  },
}));

export const HeroTextContentInfo = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(3),
    width: "60%",
  },
  [theme.breakpoints.up("xl")]: {
    gap: theme.spacing(4),
    width: "55%",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    letterSpacing: 1,
    fontSize: theme.typography.pxToRem(16),
    margin: 0,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.pxToRem(18),
  },
}));

export const HeroExperience = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    backgroundImage: "var(--background-gradient)",
    width: theme.typography.pxToRem(250),
    padding: theme.spacing(5),
    color: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export const ContentIcon = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    backgroundColor: "var(--black-opacity-1000)",
    borderRadius: "50%",
    padding: theme.spacing(1.5),
  },
}));

export const YearExperience = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(40),
    letterSpacing: 1,
    fontFamily: "var(--font-syne)",
    margin: 0,
  },
}));

export const YearExperienceText = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    lineHeight: 1.2,
  },
}));
