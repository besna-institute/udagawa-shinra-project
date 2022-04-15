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
          <h2>データ形式</h2>
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
          <h2>End-to-endタスクのデータ形式について</h2>
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
          <h2>サンプルファイル（入力）</h2>
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
          <h2>サンプルファイル（出力）</h2>
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
          <h2>スキーマファイル（出力）</h2>
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
          <h2>分類タスクのデータ形式について</h2>
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
          <h2>サンプルファイル（入力）</h2>
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
          <h2>サンプルファイル（出力）</h2>
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
          <h2>スキーマファイル（出力）</h2>
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
          <h2>属性抽出タスクのデータ形式について</h2>
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
          <h2>サンプルファイル（入力）</h2>
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
          <h2>サンプルファイル（出力）</h2>
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
          <h2>スキーマファイル（出力）</h2>
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
          <h2>リンクタスクのデータ形式について</h2>
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
          <h2>サンプルファイル（入力）</h2>
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
          <h2>サンプルファイル（出力）</h2>
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
          <h2>スキーマファイル（出力）</h2>
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
          <h2>フォーマットチェッカーについて</h2>
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
          <h2>データ形式についてのFAQ</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ResultSubmission;
