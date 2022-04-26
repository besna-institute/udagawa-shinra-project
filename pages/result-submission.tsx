import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";

const ResultSubmission: NextPage = () => {
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
          <h2>結果の提出</h2>
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
          <h2>End-to-endタスクの結果の提出</h2>
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
          <h2>分類タスクの結果の提出</h2>
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
          <h2>属性抽出タスクの結果の提出</h2>
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
          <h2>リンクタスクの結果の提出</h2>
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
          <h2>結果の提出についてのFAQ</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ResultSubmission;