import type { NextPage } from "next";
import { Paper } from "@mui/material";
import { ContentBox, Step, TextStepper } from "../components";
import Link from "next/link";
import { useEffect, useRef } from "react";

const steps: Step[] = [
  {
    label: "1. リーダーボードへログインする",
    description: (
      <>
        <p>
          下記のリーダーボードの左側のメニューから「ログイン・参加登録」を選択し、「ログイン」タブから登録時に記録したアクセストークンを用いてログインしてください。
        </p>
      </>
    ),
  },
  {
    label: "2. 実行結果を投稿する",
    description: (
      <>
        <p>
          下記のリーダーボードの左側のメニューから参加されるタスクを選択し、「新規投稿」というタブを選択し、必要事項を入力して投稿してください。
          <br />
          投稿の更新は24時間で３回まで可能です。
        </p>
        <p>投稿後はチームのすべての投稿の採点結果が表示されます。</p>
        <p>
          採点エラー時は、「More...」下の矢印を押下し、エラー内容を確認してください。
        </p>
      </>
    ),
  },
  {
    label: "3. 結果の投稿は完了！",
    description: (
      <>
        <p>
          下記のリーダーボードの左側のメニューから参加されるタスクを選択し、「サブタスク」というタブを選択すると各チームのスコアを確認できます。
          <br />
          結果提出の回数に関わらず、各チームの最高スコアだけが表示されます。
        </p>
      </>
    ),
  },
];

const ResultSubmission: NextPage = () => {
  const leaderboardRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const elem = leaderboardRef.current;
    if (elem) {
      window.addEventListener("message", (event) => {
        if (event.origin !== "https://leaderboard2022.shinra-project.info")
          return;
        elem.style.maxHeight = event.data.height;
        elem.height = event.data.height;
      });
    }
  });
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "1rem",
        gridTemplateAreas: `
          "result-submission-flow"
          "stepper"
          "leaderboard"
        `,
      }}
    >
      <ContentBox
        style={{
          gridArea: "result-submission-flow",
        }}
        theme="white"
      >
        <h2 id="result-submission-flow">結果提出の流れ</h2>
        <p>
          以下の手順に従ってリーダーボードから結果を提出してください。リーダーボードへのログイン情報が未入手の方は
          <Link href="/join">こちらの手順</Link>
          をご参照ください。
        </p>
      </ContentBox>
      <div
        style={{
          gridArea: "stepper",
        }}
      >
        <TextStepper steps={steps} />
      </div>
      <div
        style={{
          gridArea: "leaderboard",
        }}
      >
        <iframe
          ref={leaderboardRef}
          id="leaderboard"
          src="https://leaderboard2022.shinra-project.info/leaderboard/"
        />
      </div>
    </Paper>
  );
};

export default ResultSubmission;
