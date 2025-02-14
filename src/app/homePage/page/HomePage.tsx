"use client";

import React from "react";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Clients } from "../components/Clients/Clients";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Services } from "../components/Services/Services";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Clients />
      <AboutUs />
      <Services />
    </>
  );
};
