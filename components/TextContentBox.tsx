import { PropsWithChildren } from "react";
import { Card, CardContent, SxProps, Theme } from "@mui/material";

interface Props {
  sx: SxProps<Theme>;
}

export const TextContentBox = ({ children, sx }: PropsWithChildren<Props>) => {
  return (
    <Card sx={sx}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
