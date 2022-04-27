import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";

const DataDownload: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "3rem",
        gridTemplateAreas: `
          "data-download"
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
          gridArea: "data-download",
        }}
      >
        <h2 id="data-download">データダウンロード</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "end-to-end-task",
        }}
      >
        <h2 id="end-to-end-task">End-to-endタスクのデータダウンロード</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "classification-task",
        }}
      >
        <h2 id="classification-task">分類タスクのデータダウンロード</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task",
        }}
      >
        <h2 id="attribute-extraction-task">
          属性抽出タスクのデータダウンロード
        </h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "link-task",
        }}
      >
        <h2 id="link-task">リンクタスクのデータダウンロード</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "faq",
        }}
      >
        <h2 id="faq">データダウンロードについてのFAQ</h2>
        <p>TBA</p>
      </div>
    </Paper>
  );
};

export default DataDownload;
