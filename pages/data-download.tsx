import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";

const DataDownload: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "1rem",
      }}
    >
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>データダウンロード</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>End-to-endタスクのデータダウンロード</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>分類タスクのデータダウンロード</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>属性抽出タスクのデータダウンロード</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>リンクタスクのデータダウンロード</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h2>データダウンロードについてのFAQ</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default DataDownload;
