"use client";

import React from "react";

import {
  HeaderContent,
  LogoContent,
  IsoLogo,
  MenuContent,
  ItemMenu,
  CompanyName,
} from "./header.style";
import logo from "@Public/iso-logo.svg";
import { useHeader } from "./header.hook";
import { LinkButton } from "@Components/LinkButton/LinkButton";

export const Header = () => {
  const { menuContact, principalMenu, language, breakpoints } = useHeader();

  const menuNav = principalMenu.map(({ id, name, slug }) => {
    if (id === "contact") {
      return (
        <LinkButton key={slug} href={`/${language}/${slug}`}>
          {name}
        </LinkButton>
      );
    }
    return (
      <ItemMenu key={slug} href={`/${language}/${slug}`}>
        {name}
      </ItemMenu>
    );
  });

  return (
    <HeaderContent>
      <LogoContent href={`/${language}`} replace>
        <IsoLogo src={logo} alt={"logo"} width={10} height={10} priority />
        <CompanyName>navike21</CompanyName>
      </LogoContent>
      {breakpoints.lg && <MenuContent>{menuNav}</MenuContent>}
      {breakpoints.sm && !breakpoints.lg && menuContact && (
        <LinkButton href={`/${language}/${menuContact.slug}`}>
          {menuContact.name}
        </LinkButton>
      )}
    </HeaderContent>
  );
};
