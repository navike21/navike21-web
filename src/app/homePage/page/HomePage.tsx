"use client";

import { BackgroundParallax } from "@Components/BackgroundParallax/BackgroundParallax";
import heroImage from "@Public/backgrounds/team-work-bg.webp";

export const HomePage = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <BackgroundParallax backgroundImage={heroImage.src} overlay />
      </div>
      <div style={{ height: "100vh" }}>Holi</div>
    </>
  );
};
