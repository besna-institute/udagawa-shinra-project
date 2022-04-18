import type { NextPage } from "next";
import { NavigationLink, NewsList } from "../components";
import { Box, Paper, CardContent, CardMedia, Card } from "@mui/material";

const newsItems = [
  <>
    言語処理学会第28回年次大会(NLP2022)で森羅プロジェクトの
    <a href="https://drive.google.com/file/d/1fHXpMsTc1AMu19aDGzIHz6GLKJbRJMae/view?usp=sharing">
      発表
    </a>
    を行い、委員特別賞を
    <a href="http://shinra-project.info/wp-content/uploads/sites/8/2022/03/委員特別賞.png">
      受賞
    </a>
    しました。(2022/3/18)
  </>,
  <>
    <span>
      森羅プロジェクトが英国の雑誌Impactの
      <a href="http://shinra-project.info/wp-content/uploads/sites/8/2022/02/Impact-publication.pdf">
        記事
      </a>
      として取り上げられました。どうぞご覧ください。(2022/2/24)
    </span>
  </>,
  <>
    森羅2021の最終報告会(12月20日)にご参加いただき、ありがとうございました。資料を
    <a href="http://shinra-project.info/shinra2021-final-report-meeting/">
      最終報告会ページ
    </a>
    に掲載していますので、どうぞご覧ください。(2021/12/24)
  </>,
  <>
    LinkJPタスクの
    <a href="https://drive.google.com/file/d/1Lqy480YwG8SbTWz56I_w6IKEw421n5IM/view?usp=sharing">
      テストデータ正解
    </a>
    を公開しました。(2021/11/15)
  </>,
  <>
    MLタスクの実行結果の提出〆切を11月15日に延長しました。ぜひタスク参加をご検討下さい。(2021/10/4)
  </>,
  <>
    LinkJPタスクの
    <a href="https://drive.google.com/file/d/1iEciat50vSaGJ9d9FQz20k8eRt2mMGN7/view?usp=sharing">
      テストデータ
    </a>
    を公開しました。
    <a href="http://shinra-project.info/shinra2021linkjp/result_submission/">
      実行結果提出
    </a>
    の締切は9月30日です。(2021/9/10)
  </>,
  <>
    森羅プロジェクトの紹介ビデオを公開しました（[
    <a href="https://www.youtube.com/watch?v=lCYj3x6pu1w">日本語版</a>][
    <a href="https://www.youtube.com/watch?v=yQ2xeq7rbeU">英語版</a>
    ])。（2021/6/30）
  </>,
];

const Home: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 2fr) minmax(0, 2fr) minmax(0, 3fr)",
        gridGap: "1rem",
      }}
    >
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "1 / span 1",
        }}
      >
        <CardContent>
          <h2>森羅プロジェクトとは?</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h2>プロジェクト紹介動画</h2>
        </CardContent>
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/lCYj3x6pu1w"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h2>スケジュール</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "3 / span 1",
        }}
      >
        <CardContent>
          <h2>新着情報</h2>
          <NewsList items={newsItems} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "1 / span 2",
        }}
      >
        <CardContent>
          <h2>リーダーボード</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <NavigationLink href="/data-format">
            データ形式について
          </NavigationLink>
          <NavigationLink href="/evaluation-method">
            評価方法について
          </NavigationLink>
        </Box>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "3 / span 1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <NavigationLink href="/data-download">
            データダウンロードについて
          </NavigationLink>
          <NavigationLink href="/result-submission">
            結果の提出について
          </NavigationLink>
        </Box>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "4 / span 2",
        }}
      >
        <CardContent>
          <h2>森羅プロジェクト紹介</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "4 / span 1",
        }}
      >
        <CardContent>
          <h2>実行委員会</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "5 / span 1",
        }}
      >
        <CardContent>
          <h2>コミュニティ／連絡先</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "6 / span 1",
        }}
      >
        <CardContent>
          <h2>タスク概要</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "7 / span 1",
        }}
      >
        <CardContent>
          <h2>タスク詳細</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "8 / span 1",
        }}
      >
        <CardContent>
          <h2>システム制作の参考資料</h2>
        </CardContent>
        <CardContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gridGap: "2rem",
            }}
          >
            <Card>
              <CardContent>
                <h3>システム制作実況チャンネル</h3>
              </CardContent>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/lCYj3x6pu1w"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
            <Card>
              <CardContent>
                <h3>ベースラインシステム等参考システム</h3>
                <p>概</p>
                <p>要</p>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "9 / span 1",
        }}
      >
        <CardContent>
          <h2>関連研究</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "10 / span 1",
        }}
      >
        <CardContent>
          <h2>タスク参加についてのFAQ</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "11 / span 1",
        }}
      >
        <CardContent>
          <h2>過去の共有タスク</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Home;
