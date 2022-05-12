import { PropsWithChildren } from "react";

interface Props {
  href: string;
}

export const ExternalLink = ({ children, href }: PropsWithChildren<Props>) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
