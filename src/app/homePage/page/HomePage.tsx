"use client";

import React from "react";
import {
  AboutUs,
  Clients,
  Contact,
  HeroSection,
  Services,
} from "../components";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Clients />
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
};
