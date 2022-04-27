import Head from "next/head";
import { Header } from "./Header";
import { PropsWithChildren } from "react";
import { Container } from "@mui/material";

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>森羅 SHINRA - Wikipedia 構造化プロジェクト</title>
    </Head>
    <Header />
    <Container component="main" sx={{ p: 2 }}>
      {children}
    </Container>
  </>
);
