import type { NextPage } from "next";
import { Paper } from "@mui/material";
import { BasicTabs, ContentBox, MediaBox, TabItem } from "../components";
import Link from "next/link";

const evaluationMethodItems: TabItem[] = [
  {
    label: "分類",
    panel: (
      <>
        <p>マイクロ平均F1スコアで評価します。</p>
        <MediaBox height={564} width={688} style={{ width: "50%" }}>
          <img
            alt="formula classification"
            src="/formula-classification.png"
            style={{
              margin: 0,
            }}
          />
        </MediaBox>
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
        <p>属性ごとのマイクロ平均F1スコアのマクロ平均</p>
        <MediaBox height={607} width={829} style={{ width: "50%" }}>
          <img
            alt="formula classification"
            src="/formula-attribution-extraction.png"
            style={{
              margin: 0,
            }}
          />
        </MediaBox>
        <p>
          結果は
          <Link href="/result-submission">こちら</Link>
          からご提出ください。
        </p>
      </>
    ),
  },
  {
    label: "リンキング",
    panel: (
      <>
        <p>TBA（基本的にはRecallとPrecisionによる評価を考えています）</p>
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
