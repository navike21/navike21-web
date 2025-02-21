import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Background } from "./backgroundParallax.styles";

export interface IBackgroundParallaxProps {
  backgroundImage: string;
  overlay?: boolean;
  children?: ReactNode;
}

export const BackgroundParallax = ({
  backgroundImage,
  overlay = false,
  children,
  ...props
}: IBackgroundParallaxProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxSpeed = 0.2;
  const backgroundPositionY = `${scrollPosition * parallaxSpeed}px`;

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
