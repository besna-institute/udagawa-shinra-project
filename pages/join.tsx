import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Alert, Paper } from "@mui/material";
import { ContentBox, JoinButton, Step, TextStepper } from "../components";
import Link from "next/link";
import { useEffect, useState } from "react";

const getSteps = (regist: boolean): Step[] => [
  {
    label: "1. メーリングリストへ参加する",
    description: (
      <>
        <p>
          下記のリーダーボードの左側のメニューから「ログイン・参加登録」を選択し、「ログイン」タブから登録時に記録したアクセストークンを用いてログインしてください。
        </p>
      </>
    ),
  },
  {
    label: "2. 森羅2022のSlackへ参加する",
    description: (
      <>
        <p>
          Slackにてイベントなどの随時アナウンスします。
          <JoinButton href="https://join.slack.com/t/shinra2022/shared_invite/zt-14qkpf21i-lQNKlT0aIOU5We7xlZBqfQ">
            参加リンク
          </JoinButton>
        </p>
      </>
    ),
  },
  {
    label: "3. #shinra2022というSlackチャンネルから参加する",
    description: (
      <>
        <p>
          #shinra2022チャンネル上部の「参加登録」ボタンを押してください。
          参加登録を押すと、別途で次の手順へ進むようになります。
        </p>
      </>
    ),
  },
  {
    label: "4. 情報を入力する",
    description: (
      <>
        {regist ? (
          <p>
            下記のリーダーボードの左側のメニューから「ログイン・参加登録」を選択し、「参加登録」というタブを選択し、チーム名など必要事項を入力して送信してください。
          </p>
        ) : (
          <Alert severity="error">
            手順３は完了していないようです。前の手順をご確認ください。
          </Alert>
        )}
      </>
    ),
  },
  {
    label: "5. 登録は完了！",
    description: (
      <>
        <p>
          登録後に表示されるアクセストークンを必ず記録してください。ログインに必要となります。
          <br />
          データは
          <Link href="/data-download">こちら</Link>
          から入手できます。
          <br />
          結果の提出の流れは
          <Link href="/result-submission">こちら</Link>
          のページをご参照ください。
        </p>
      </>
    ),
  },
];

const Join: NextPage = () => {
  const router = useRouter();
  const [isRegist, setIsRegist] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;
      const regist = query.regist === "true";
      setIsRegist(regist);
    }
  }, [router.isReady, router.query]);

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
        <h2 id="result-submission-flow">タスク参加の流れ</h2>
        <p>以下の手順に従ってコミュニティへ参加してください。</p>
      </ContentBox>
      <div
        style={{
          gridArea: "stepper",
        }}
      >
        <TextStepper steps={getSteps(isRegist)} />
      </div>
      {isRegist ? (
        <div
          style={{
            gridArea: "leaderboard",
          }}
        >
          <iframe
            id="leaderboard"
            src="https://leaderboard2022.shinra-project.info/leaderboard-dev/"
          />
        </div>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default Join;
