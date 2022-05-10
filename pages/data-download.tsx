import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";
import { BasicTabs, ContentBox, SingleLineList, TabItem } from "../components";

const subtaskCommonItems = [<>Wikipedia2019</>, <>Wikipedia2021</>];
const subtaskUniqueItems: TabItem[] = [
  {
    label: "分類",
    panel: (
      <>
        <SingleLineList
          items={[
            <>教師データ</>,
            <>本評価の入力データ</>,
            <>リーダーボードの入力データ</>,
          ]}
        />
      </>
    ),
  },
  {
    label: "属性値抽出",
    panel: (
      <>
        <SingleLineList items={[<>教師データ</>, <>本評価の入力データ</>]} />
      </>
    ),
  },
  {
    label: "リンキング",
    panel: (
      <>
        <SingleLineList items={[<>教師データ</>]} />
      </>
    ),
  },
];

const DataDownload: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "3rem",
        gridTemplateAreas: `
          "subtask-common"
          "subtask-unique"
        `,
      }}
    >
      <ContentBox
        style={{
          gridArea: "subtask-common",
        }}
        theme="green"
      >
        <h2 id="subtask-common">サブタスク共通データ（Wikipedia）</h2>
        <SingleLineList items={subtaskCommonItems} />
      </ContentBox>
      <ContentBox
        style={{
          gridArea: "subtask-unique",
        }}
        theme="gray"
      >
        <h2 id="subtask-unique">サブタスク固有データ</h2>
        <BasicTabs
          ariaLabel="subtask unique data tabs"
          tabs={subtaskUniqueItems}
        />
      </ContentBox>
    </Paper>
  );
};

export default DataDownload;
