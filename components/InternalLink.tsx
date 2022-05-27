import { PropsWithChildren } from "react";
import Link from 'next/link'

interface Props {
  href: string;
}

export const InternalLink = ({ children, href }: PropsWithChildren<Props>) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
};
