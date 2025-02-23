import { useEffect, useState } from "react";

export const useBackgroundParallax = () => {
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

  return {
    backgroundPositionY,
  };
};
