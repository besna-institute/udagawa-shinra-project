import { AppBar, Toolbar, Typography, Avatar, Link, Box } from "@mui/material";
import NextLink from "next/link";

export const Header = () => (
  <AppBar position="sticky">
    <Toolbar variant="dense" sx={{ px: 2 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <NextLink href="/" passHref>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              padding: "0.5rem 0",
              cursor: "pointer",
              columnGap: "1rem",
            }}
          >
            <Avatar
              src="/logo.jpeg"
              alt="logo"
              variant="square"
              sx={{
                height: "3rem",
                width: "3rem",
              }}
            />
            <div>
              <Typography variant="h5" color="inherit" component="h1">
                森羅 2022
              </Typography>
              <Typography
                component="h1"
                color="inherit"
                sx={{ fontSize: "0.8rem" }}
              >
                Wikipedia構造化プロジェクト
              </Typography>
            </div>
          </div>
        </NextLink>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            margin: "auto 0 0.5rem 0",
            columnGap: "1rem",
          }}
        >
          <NextLink href="http://ene-project.info/" passHref>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              拡張固有表現
            </Link>
          </NextLink>
          <NextLink href="https://liat-aip.sakura.ne.jp/wp/" passHref>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              理研AIP 言語情報アクセス技術チーム
            </Link>
          </NextLink>
          <NextLink href="http://shinra-project.info/" passHref>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              森羅トップページ
            </Link>
          </NextLink>
        </div>
      </div>
    </Toolbar>
  </AppBar>
);
