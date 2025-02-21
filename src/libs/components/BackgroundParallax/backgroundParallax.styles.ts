import { styled } from "@mui/material";
import { IBackgroundParallaxProps } from "./BackgroundParallax";
import { EBlackOpacity } from "@Enums/color";
import { motion } from "framer-motion";

export const Background = styled(motion.div)<IBackgroundParallaxProps>(
  ({ theme, backgroundImage, overlay }) => ({
    [theme.breakpoints.up("xs")]: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center 50%",
      backgroundRepeat: "no-repeat",
      willChange: "background-position",
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",

      ...(overlay && {
        "&::before": {
          content: "''",
          backgroundColor: EBlackOpacity._700,
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
