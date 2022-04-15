import type { NextPage } from "next";
import Link from "next/link";
import { Box, Paper, CardContent, CardMedia, Card } from "@mui/material";

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
          <h1>森羅プロジェクトとは?</h1>
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
          <h1>プロジェクト紹介動画</h1>
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
          <h1>スケジュール</h1>
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
          <h1>新着情報</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "1 / span 2",
        }}
      >
        <CardContent>
          <h1>リーダーボード</h1>
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
          <Link href="/data-format">
            <a>データ形式について</a>
          </Link>
          <Link href="/evaluation-method">
            <a>評価方法について</a>
          </Link>
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
          <Link href="/data-download">
            <a>データダウンロードについて</a>
          </Link>
          <Link href="/result-submission">
            <a>結果の提出について</a>
          </Link>
        </Box>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "4 / span 2",
        }}
      >
        <CardContent>
          <h1>森羅プロジェクト紹介</h1>
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
          <h1>実行委員会</h1>
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
          <h1>コミュニティ／連絡先</h1>
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
          <h1>タスク概要</h1>
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
          <h1>タスク詳細</h1>
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
          <h1>システム制作の参考資料</h1>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gridGap: "2rem",
            }}
          >
            <Card>
              <CardContent>
                <h2>システム制作実況チャンネル</h2>
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
                <h2>ベースラインシステム等参考システム</h2>
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
          <h1>関連研究</h1>
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
          <h1>タスク参加についてのFAQ</h1>
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
          <h1>過去の共有タスク</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Home;
