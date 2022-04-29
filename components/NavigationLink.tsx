import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

interface Props {
  href: string;
}

export const NavigationLink = ({
  href,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="outlined"
        href={href}
        sx={{ marginInline: "0.5rem", background: "white" }}
      >
        {children}
      </Button>
    </Link>
  );
};
