import { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { LinkButtonElement, TextLinkButton } from "./linkButton.style";

interface LinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const LinkButton = ({
  children,
  href,
  onClick,
  ...props
}: LinkButtonProps) => {
  const createRipple = (event: MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <LinkButtonElement href={href} onClick={handleOnClick} {...props}>
      <TextLinkButton>{children}</TextLinkButton>
    </LinkButtonElement>
  );
};
