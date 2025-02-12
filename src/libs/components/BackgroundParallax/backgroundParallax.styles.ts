import { styled } from "@mui/material";
import { IBackgroundParallaxProps } from "./BackgroundParallax";

export const Background = styled("div")<IBackgroundParallaxProps>(
  ({ theme, backgroundImage, overlay }) => ({
    [theme.breakpoints.up("xs")]: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      willChange: "transform",
      position: "relative",

      ...(overlay && {
        "&::before": {
          content: "''",
          backgroundColor: "var(--black-opacity-700)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }),
    },
  })
);
