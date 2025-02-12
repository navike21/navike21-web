import React, { ReactNode, useEffect, useRef } from "react";
import { Background } from "./backgroundParallax.styles";

export interface IBackgroundParallaxProps {
  backgroundImage: string;
  overlay?: boolean;
  children: ReactNode;
}

export const BackgroundParallax = ({
  backgroundImage,
  overlay = false,
  children,
  ...props
}: IBackgroundParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const offsetY = window.scrollY;
    if (parallaxRef.current) {
      parallaxRef.current.style.backgroundPosition = `center ${
        offsetY * 0.5
      }px`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Background
      backgroundImage={backgroundImage}
      overlay={overlay}
      {...props}
      ref={parallaxRef}
    >
      {children}
    </Background>
  );
};
