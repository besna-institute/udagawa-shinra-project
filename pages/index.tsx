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
