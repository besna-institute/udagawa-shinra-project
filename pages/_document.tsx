import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        />
      </Head>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
        />
        <link
          href="https://leaderboard2022.shinra-project.info/leaderboard/css/app.latest.css"
          rel="stylesheet"
        />
        <link
          href="https://leaderboard2022.shinra-project.info/leaderboard/css/chunk-vendors.latest.css"
          rel="stylesheet"
        />
        <script
          defer
          src="https://leaderboard2022.shinra-project.info/leaderboard/js/chunk-vendors.latest.js"
        />
        <script
          defer
          src="https://leaderboard2022.shinra-project.info/leaderboard/js/app.latest.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
