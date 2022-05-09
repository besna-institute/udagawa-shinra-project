import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";

const LeaderBoard: NextPage = () => {
  return (
    <>
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
      </Head>
      <Script src="https://leaderboard2022.shinra-project.info/leaderboard/js/chunk-vendors.latest.js" />
      <Script src="https://leaderboard2022.shinra-project.info/leaderboard/js/app.latest.js" />
      <div id="leaderboard" />
    </>
  );
};

export default LeaderBoard;
