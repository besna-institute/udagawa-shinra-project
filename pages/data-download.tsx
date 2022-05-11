import type { NextPage } from "next";
import { Paper } from "@mui/material";
import {
  BasicTabs,
  ContentBox,
  InlineList,
  SingleLineList,
  TabItem,
} from "../components";

const subtaskCommonItems = [
  <>
    <h3>Wikipedia2019</h3>
    <SingleLineList
      disablePadding
      items={[
        <>
          <a href="">CirrusSearchDump</a>
          （主に分類学習用）
        </>,
        <>
          <a href="">WikiDump</a>
          （主に分類学習用）
        </>,
        <>
          <a href="">HTML</a>
          （主に属性値、リンキング学習用）
        </>,
        <>
          <a href="">Text</a>
          （主に属性値、リンキング学習用）
        </>,
      ]}
    />
  </>,
  <>
    <h3>Wikipedia2021</h3>
    <SingleLineList
      disablePadding
      items={[
        <>
          <a href="">CirrusSearchDump</a>
          （主に分類学習用）
        </>,
        <>
          <a href="">WikiDump</a>
          （主に分類学習用）
        </>,
        <>
          <a href="">HTML</a>
          （主に属性値、リンキング学習用）
        </>,
        <>
          <a href="">Text</a>
          （主に属性値、リンキング学習用）
        </>,
      ]}
    />
  </>,
];
const subtaskUniqueItems: TabItem[] = [
  {
    label: "分類",
    panel: (
      <>
        <SingleLineList
          divider
          items={[
            <>
              教師データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                  <a key="CirrusSearchDump" href="">
                    CirrusSearchDump(2019)
                  </a>,
                  <a key="WikiDump" href="">
                    WikiDump(2019)
                  </a>,
                ]}
              />
            </>,
            <>
              本評価の入力データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                  <a key="CirrusSearchDump" href="">
                    CirrusSearchDump(2021)
                  </a>,
                  <a key="WikiDump" href="">
                    WikiDump(2021)
                  </a>,
                ]}
              />
            </>,
            <>
              リーダーボードの入力データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                ]}
              />
            </>,
          ]}
        />
      </>
    ),
  },
  {
    label: "属性値抽出",
    panel: (
      <>
        <SingleLineList
          divider
          items={[
            <>
              教師データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                  <a key="CirrusSearchDump" href="">
                    CirrusSearchDump(2019)
                  </a>,
                  <a key="WikiDump" href="">
                    WikiDump(2019)
                  </a>,
                ]}
              />
            </>,
            <>
              ベースラインデータ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                ]}
              />
            </>,
            <>
              リーダボード入力データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                ]}
              />
            </>,
          ]}
        />
      </>
    ),
  },
  {
    label: "リンキング",
    panel: (
      <>
        <SingleLineList
          divider
          items={[
            <>
              サンプルデータ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                  <a key="CirrusSearchDump" href="">
                    CirrusSearchDump(2019)
                  </a>,
                  <a key="WikiDump" href="">
                    WikiDump(2019)
                  </a>,
                ]}
              />
            </>,
            <>
              ベースラインデータ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                ]}
              />
            </>,
            <>
              リーダボード入力データ
              <InlineList
                items={[
                  <a key="JSONL" href="">
                    JSONL
                  </a>,
                ]}
              />
            </>,
          ]}
        />
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
        <h2 id="subtask-common">サブタスク共通データ</h2>
        <SingleLineList items={subtaskCommonItems} divider />
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
