import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "motion/react";

export const useScrollTrigger = (threshold: number = 50) => {
  const scrollY = useMotionValue(0);
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      scrollY.set(scrollPos);
      setIsScrolled(scrollPos > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, threshold]);

  return { scrollY: smoothScrollY, isScrolled };
};
