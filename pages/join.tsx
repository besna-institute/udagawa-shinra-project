import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";
import { ContentBox } from "../components";

const Join: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "3rem",
        gridTemplateAreas: `
          "result-submission-flow"
          "leaderboard"
        `,
      }}
    >
      <ContentBox
        style={{
          gridArea: "result-submission-flow",
        }}
        theme="white"
      >
        <h2 id="result-submission-flow">結果提出の流れ</h2>
        <p>TBA</p>
      </ContentBox>
      <div
        style={{
          gridArea: "leaderboard",
        }}
      >
        <h2>リーダーボード</h2>
      </div>
    </Paper>
  );
};

export default Join;
