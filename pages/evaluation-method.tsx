import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";
import { BasicTabs, ContentBox, TabItem } from "../components";
import Link from "next/link";

const evaluationMethodItems: TabItem[] = [
  {
    label: "分類",
    panel: (
      <>
        <p>マイクロ平均F1スコアで評価します。</p>
        <p>image</p>
        <p>
          自動評価のプログラムは
          <a href="">こちら</a>
          から入手できます。
        </p>
        <p>
          結果は
          <Link href="/result-submission">こちら</Link>
          からご提出ください。
        </p>
      </>
    ),
  },
  {
    label: "属性値抽出",
    panel: (
      <>
        <p>TBA</p>
      </>
    ),
  },
  {
    label: "リンキング",
    panel: (
      <>
        <p>TBA</p>
      </>
    ),
  },
];
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
        `,
      }}
    >
      <ContentBox
        style={{
          gridArea: "evaluation-method",
        }}
        theme="white"
      >
        <h2 id="evaluation-method">結果の評価方法</h2>
        <BasicTabs
          ariaLabel="evaluation method tabs"
          tabs={evaluationMethodItems}
        />
      </ContentBox>
    </Paper>
  );
};

export default EvaluationMethod;
