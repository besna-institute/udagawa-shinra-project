import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";

const EvaluationMethod: NextPage = () => {
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
          <h2>評価方法</h2>
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
          <h2>End-to-endタスクの評価方法</h2>
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
          <h2>分類タスクの評価方法</h2>
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
          <h2>属性抽出タスクの評価方法</h2>
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
          <h2>リンクタスクの評価方法</h2>
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
          <h2>評価方法についてのFAQ</h2>
          <p>TBA</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default EvaluationMethod;
