"use client";

import React from "react";

import {
  HeaderContent,
  LogoContent,
  IsoLogo,
  MenuContent,
  ItemMenu,
} from "./header.style";
import logo from "@Public/iso-logo.svg";
import { useHeader } from "./header.hook";

export const Header = () => {
  const { menuNavigation, lang } = useHeader();

  return (
    <HeaderContent>
      <LogoContent href={`/${lang}`} replace>
        <IsoLogo src={logo} alt={"logo"} width={10} height={10} priority />
      </LogoContent>
      <MenuContent>
        {menuNavigation[lang].map((item) => (
          <ItemMenu key={item.slug} href={`/${lang}/${item.slug}`}>
            {item.name}
          </ItemMenu>
        ))}
      </MenuContent>
    </HeaderContent>
  );
};
