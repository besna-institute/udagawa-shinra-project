import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";

const ResultSubmission: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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
          <h1>データ形式</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "2 / span 3",
        }}
      >
        <CardContent>
          <h1>End-to-endタスクのデータ形式について</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（入力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "3 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "4 / span 1",
        }}
      >
        <CardContent>
          <h1>スキーマファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "5 / span 3",
        }}
      >
        <CardContent>
          <h1>分類タスクのデータ形式について</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "5 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（入力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "6 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "7 / span 1",
        }}
      >
        <CardContent>
          <h1>スキーマファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "8 / span 3",
        }}
      >
        <CardContent>
          <h1>属性抽出タスクのデータ形式について</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "8 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（入力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "9 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "10 / span 1",
        }}
      >
        <CardContent>
          <h1>スキーマファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "11 / span 3",
        }}
      >
        <CardContent>
          <h1>リンクタスクのデータ形式について</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "11 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（入力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "12 / span 1",
        }}
      >
        <CardContent>
          <h1>サンプルファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "13 / span 1",
        }}
      >
        <CardContent>
          <h1>スキーマファイル（出力）</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "14 / span 1",
        }}
      >
        <CardContent>
          <h1>フォーマットチェッカーについて</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "15 / span 1",
        }}
      >
        <CardContent>
          <h1>データ形式についてのFAQ</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ResultSubmission;
