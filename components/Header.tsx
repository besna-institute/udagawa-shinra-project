import * as React from "react";
import { AppBar, Toolbar, Typography, Stack, Avatar } from "@mui/material";
import NextLink from "next/link";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ px: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <NextLink href="/" passHref>
            <Stack
              direction="row"
              spacing={2}
              padding={3}
              sx={{ cursor: "pointer" }}
            >
              <Avatar
                src="/udagawa-shinra-project/logo.jpeg"
                alt="logo"
                variant="square"
              />
              <Typography variant="h1" color="inherit" component="div">
                森羅プロジェクト
              </Typography>
            </Stack>
          </NextLink>
          <Typography variant="h2" color="inherit" component="div">
            拡張固有表現
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
