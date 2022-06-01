/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Alert, Paper } from "@mui/material";
import {
  ContentBox,
  InternalLink,
  JoinButton,
  LeaderBoard,
  MediaBox,
  Step,
  TextStepper,
} from "../components";
import { useEffect, useState } from "react";

const getSteps = (regist: boolean): Step[] => [
  {
    label: "1. メーリングリストへ参加する",
    description: (
      <>
        <p>
          メールにてイベントなどの随時アナウンスします。
          <JoinButton href="https://groups.google.com/g/shinra2022-all">
            参加リンク
          </JoinButton>
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <p>
            #shinra2022チャンネル上部の「参加登録」ボタンを押してください。
            参加登録を押すと、別途で次の手順へ進むようになります。
          </p>
          <MediaBox
            height={445}
            width={854}
            style={{ margin: "0 auto", width: "75%" }}
          >
            <img
              alt="register"
              loading="lazy"
              src="/register.png"
              style={{
                margin: 0,
              }}
            />
          </MediaBox>
        </div>
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
          <InternalLink href="/data-download">こちら</InternalLink>
          から入手できます。
          <br />
          提出する結果は以下の2種類があります。
          <ul>
            <li>Wikipedia全件</li>
            <li>リーダーボード（任意）</li>
          </ul>
          Wikipedia全件の結果の提出の流れは
          こちら（TBA）
          のページをご参照ください。
          <br />
          リーダーボードへの結果の提出の流れは
          <InternalLink href="/result-submission">こちら</InternalLink>
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
          <LeaderBoard regist style={{ maxHeight: "913px", height: "913px" }} />
        </div>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default Join;
