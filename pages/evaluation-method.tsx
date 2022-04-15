import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";

const EvaluationMethod: NextPage = () => {
  return (
    <Paper
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
          <h1>評価方法</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h1>End-to-endタスクの評価方法</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h1>分類タスクの評価方法</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h1>属性抽出タスクの評価方法</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h1>リンクタスクの評価方法</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "span 1 / span 1",
          gridRow: "span 1 / span 1",
        }}
      >
        <CardContent>
          <h1>評価方法についてのFAQ</h1>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default EvaluationMethod;
