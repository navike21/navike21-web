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
import { ENavigation } from "@Enums/navigation";
import { useNavigation } from "@Hooks/useNavigation";

export const Header = () => {
  const {
    properties: { animate, breakpoints, initialAnimation, transition },
  } = useHeader();

  const { contactMenu, principalMenu, homeMenu } = useNavigation();

  const menuNav = principalMenu.map(({ id, name, slug }) =>
    id === ENavigation.CONTACT ? (
      <LinkButton key={slug} href={slug}>
        {name}
      </LinkButton>
    ) : (
      <ItemMenu key={slug} href={slug}>
        {name}
      </ItemMenu>
    )
  );

  return (
    <MotionHeaderContent
      initial={initialAnimation}
      animate={animate}
      transition={transition}
    >
      <LogoContent href={homeMenu.slug} replace>
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
