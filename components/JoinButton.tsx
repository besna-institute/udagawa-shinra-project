import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Groups } from "@mui/icons-material";

interface Props {
  href: string;
}

export const JoinButton = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="outlined"
        href={href}
        sx={{ marginInline: "0.5rem", background: "white" }}
        size="small"
        startIcon={<Groups />}
      >
        {children}
      </Button>
    </Link>
  );
};
