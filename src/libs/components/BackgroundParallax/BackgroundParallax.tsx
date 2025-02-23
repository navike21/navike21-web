import { motion } from "framer-motion";
import { Background } from "./backgroundParallax.styles";
import { useBackgroundParallax } from "./backgroundParallax.hook";
import { IBackgroundParallaxProps } from "./backgroundParallax.types";

export const BackgroundParallax = ({
  backgroundImage,
  overlay = false,
  children,
  ...props
}: IBackgroundParallaxProps) => {
  const { backgroundPositionY } = useBackgroundParallax();

  return (
    <Background
      as={motion.div}
      backgroundImage={backgroundImage}
      overlay={overlay}
      {...props}
      style={{
        backgroundPosition: `center ${backgroundPositionY}`,
      }}
    >
      {children}
    </Background>
  );
};
