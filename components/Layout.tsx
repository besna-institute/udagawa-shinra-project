import Head from "next/head";
import Header from "./Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>森羅 SHINRA - Wikipedia 構造化プロジェクト</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
