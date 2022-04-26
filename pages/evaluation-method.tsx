import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";

const EvaluationMethod: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "3rem",
        gridTemplateAreas: `
          "evaluation-method"
          "divider1"
          "end-to-end-task"
          "divider2"
          "classification-task"
          "divider3"
          "attribute-extraction-task"
          "divider4"
          "link-task"
          "divider5"
          "faq"
        `,
      }}
    >
      <Divider sx={{ gridArea: "divider1" }} />
      <Divider sx={{ gridArea: "divider2" }} />
      <Divider sx={{ gridArea: "divider3" }} />
      <Divider sx={{ gridArea: "divider4" }} />
      <Divider sx={{ gridArea: "divider5" }} />
      <div
        style={{
          gridArea: "evaluation-method",
        }}
      >
        <h2 id="evaluation-method">評価方法</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "end-to-end-task",
        }}
      >
        <h2 id="end-to-end-task">End-to-endタスクの評価方法</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "classification-task",
        }}
      >
        <h2 id="classification-task">分類タスクの評価方法</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task",
        }}
      >
        <h2 id="attribute-extraction-task">属性抽出タスクの評価方法</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "link-task",
        }}
      >
        <h2 id="link-task">リンクタスクの評価方法</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "faq",
        }}
      >
        <h2 id="faq">評価方法についてのFAQ</h2>
        <p>TBA</p>
      </div>
    </Paper>
  );
};

export default EvaluationMethod;
