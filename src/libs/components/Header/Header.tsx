"use client";

import {
  MotionHeaderContent,
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
  const {
    animate,
    contactMenu,
    principalMenu,
    language,
    breakpoints,
    initialAnimation,
  } = useHeader();

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
    <MotionHeaderContent
      initial={initialAnimation}
      animate={animate}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <LogoContent href={`/${language}`} replace>
        <IsoLogo src={logo} alt={"logo"} width={10} height={10} />
        <CompanyName>navike21</CompanyName>
      </LogoContent>
      {breakpoints.lg && <MenuContent>{menuNav}</MenuContent>}
      {breakpoints.md && !breakpoints.lg && contactMenu && (
        <LinkButton href={`${contactMenu.slug}`}>{contactMenu.name}</LinkButton>
      )}
    </MotionHeaderContent>
  );
};
