import type { NextPage } from "next";
import Script from "next/script";

const LeaderBoard: NextPage = () => {
  return (
    <>
      <Script src="https://leaderboard2022.shinra-project.info/leaderboard/js/chunk-vendors.latest.js" />
      <Script src="https://leaderboard2022.shinra-project.info/leaderboard/js/app.latest.js" />
      <div id="app" />
    </>
  );
};

export default LeaderBoard;
