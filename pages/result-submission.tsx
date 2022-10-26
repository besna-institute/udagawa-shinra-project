import type { NextPage } from "next";
import { Paper } from "@mui/material";
import { ContentBox, InternalLink, LeaderBoard, Step, TextStepper } from "../components";

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
          <InternalLink href="/join">こちらの手順</InternalLink>
          をご参照ください。<br/>
          本評価（分類タスク）の結果はこちらの
          <ExternalLink href="https://forms.gle/rob8e8MruyXUX8NF8">
            フォーム
          </ExternalLink>
          からご提出ください。なお、属性値抽出とリンキングの2022年度の本評価については行いません。
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
        <LeaderBoard />
      </div>
    </Paper>
  );
};

export default ResultSubmission;
