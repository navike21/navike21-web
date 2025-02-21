"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { styled } from "@mui/system";
import { EPrimary } from "@Enums/color";

const Cursor = styled(motion.div)(
  ({ isLinkHovered }: { isLinkHovered: boolean }) => ({
    position: "fixed",
    width: 20,
    height: 20,
    backgroundColor: EPrimary.MAIN,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: isLinkHovered ? "difference" : "normal",
  })
);

export const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setCursorScale(2);
    setIsLinkHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorScale(1);
    setIsLinkHovered(false);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      (link as HTMLElement).style.cursor = "none";
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      links.forEach((link) => {
        (link as HTMLElement).style.cursor = "";
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <Cursor
      isLinkHovered={isLinkHovered}
      animate={{
        x: cursorPosition.x - 10,
        y: cursorPosition.y - 10,
        scale: cursorScale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
};
