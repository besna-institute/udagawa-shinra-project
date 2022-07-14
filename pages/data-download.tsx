import type { NextPage } from "next";
import { Paper } from "@mui/material";
import {
  BasicTabs,
  ContentBox,
  ExternalLink,
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
          <ExternalLink href="https://drive.google.com/drive/folders/1hQ898ZBLXuluP73-5GzL-HouMki9X631?usp=sharing">
            CirrusSearchDump
          </ExternalLink>
          （主に分類学習用）
        </>,
        <>
          <ExternalLink href="https://drive.google.com/drive/folders/1XKUi9jLysbxHKitJH4u_l4NMOwJ_Xn-T?usp=sharing">
            WikiDump
          </ExternalLink>
          （主に分類学習用）
        </>,
        <>
          <ExternalLink href="https://drive.google.com/file/d/1Dn5R_GKgM9g7Yl0LqgBsWtXLHRzeSbCs/view?usp=sharing">
            HTML
          </ExternalLink>
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
          <ExternalLink href="https://drive.google.com/file/d/1cJ55I8O9B6RW6J-3FDLsmjeNtEDGQuma/view?usp=sharing">
            CirrusSearchDump
          </ExternalLink>
          （主に分類実行用）
        </>,
        <>
          <ExternalLink href="https://drive.google.com/file/d/1q1atU7xzjr-ZMTA53z6PKOzS5kfHm6g2/view?usp=sharing">
            WikiDump
          </ExternalLink>
          （主に分類実行用）
        </>,
        <>
          <ExternalLink href="https://drive.google.com/file/d/1isbdgJl-pkvSci5KGmxHWIREwPI1Ns_3/view?usp=sharing">
            HTML
          </ExternalLink>
          （主に属性値抽出、リンキング実行用）
        </>,
        <>
          <ExternalLink href="https://drive.google.com/file/d/1qiWxkCXMCmMvLZa12LhXWE9_dJR8M9Xx/view?usp=sharing">
            PlainText
          </ExternalLink>
          （主に属性値抽出、リンキング実行用）
        </>,
      ]}
    />
  </>,
  <>
    <h3>拡張固有表現ver9.0</h3>
    <SingleLineList
      disablePadding
      items={[
        <>
          <ExternalLink href="https://drive.google.com/file/d/1sGUEfncCezzBUk-3DBFE4FbMTvC9VADE/view?usp=sharing">
            Definition_v9.0.0
          </ExternalLink>
        </>,
        <>
          <ExternalLink href="https://drive.google.com/file/d/1lK0GCdS644YF96n_qV4_Z4ZxAatPxdyi/view?usp=sharing">
            AttributeDefinitions
          </ExternalLink>
          （主に属性値抽出、リンキング実行用）         
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
              <ExternalLink href="https://drive.google.com/file/d/1r8X0vVZtJstgJQ6eaojyE8oy17v8Jokl/view?usp=sharing">
                教師データ（JSONL）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://drive.google.com/drive/folders/1hQ898ZBLXuluP73-5GzL-HouMki9X631?usp=sharing">
                      Wikipedia2019 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://drive.google.com/drive/folders/1XKUi9jLysbxHKitJH4u_l4NMOwJ_Xn-T?usp=sharing">
                      Wikipedia2019 (WikiDump)
                    </ExternalLink>
                    が必要です。
                  </>,
                ]}
              />
            </>,
            <>
              <ExternalLink href="https://drive.google.com/file/d/1b-ge9hTzNIQgR1zerdje5deUEVXe7JJk/view?usp=sharing">
                本評価の入力データ（JSONL）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://drive.google.com/file/d/1cJ55I8O9B6RW6J-3FDLsmjeNtEDGQuma/view?usp=sharing">
                      Wikipedia2021 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://drive.google.com/file/d/1q1atU7xzjr-ZMTA53z6PKOzS5kfHm6g2/view?usp=sharing">
                      Wikipedia2021 (WikiDump)
                    </ExternalLink>
                    が必要です。
                  </>,
                ]}
              />
            </>,
            <>
              <ExternalLink href="https://drive.google.com/file/d/1KKaZp9_H19o21WSPqCdGU8Wqo1qt4ymr/view?usp=sharing">
                リーダボード入力データ（JSONL）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://drive.google.com/file/d/1cJ55I8O9B6RW6J-3FDLsmjeNtEDGQuma/view?usp=sharing">
                      Wikipedia2021 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://drive.google.com/file/d/1q1atU7xzjr-ZMTA53z6PKOzS5kfHm6g2/view?usp=sharing">
                      Wikipedia2021 (WikiDump)
                    </ExternalLink>
                    が必要です。
                  </>,
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
      <SingleLineList
        divider
        items={[
          <>
            <ExternalLink href="https://drive.google.com/file/d/1Vq3T2q26AoBgSyPVEvlv5WjkSZG2agj4/view?usp=sharing">
              教師データ
            </ExternalLink>
            <SingleLineList
              disablePadding
              items={[
                <>
                  以下のコンテンツが含まれています。
                  <SingleLineList
                    disablePadding
                    items={[
                      <>
                        annotation（属性値抽出結果のアノテーションデータ。JSONL形式）
                      </>,
                      <>
                        html（Wikipedia2019のHTML版。ただし、annotation対応部分のみ）
                      </>,
                      <>
                        plain（Wikipedia2019のPlainText版。ただし、annotation対応部分のみ）
                      </>,
                    ]}
                  />
                </>,
              ]}
            />
          </>,
          <>
            <ExternalLink href="https://drive.google.com/file/d/1OGveXeubPZ2FtY8VsGV8caP5vyYZ6tjE/view?usp=sharing">
              ベースラインデータ（属性値抽出タスクのみの参加者用）（JSONL）
            </ExternalLink>
            <SingleLineList
              disablePadding
              items={[
                <>
                  別途、
                  <ExternalLink href="https://drive.google.com/file/d/1PdyibeXeYTa93Blj_px9Z-QLzEaWoKQi/view?usp=sharing">
                    Wikipedia2021 (HTML)
                  </ExternalLink>
                  か
                  <ExternalLink href="https://drive.google.com/file/d/1qiWxkCXMCmMvLZa12LhXWE9_dJR8M9Xx/view?usp=sharing">
                    Wikipedia2021 (PlainText)
                  </ExternalLink>
                  が必要です
                </>,
              ]}
            />
          </>,
          <>
            <ExternalLink href="https://drive.google.com/file/d/1FxarCRNnjf6PeA_aY7zQ0n-hJ4eZKZ0P/view?usp=sharing">
              リーダーボード入力データ（JSONL）
            </ExternalLink>
            <SingleLineList
              disablePadding
              items={[
                <>
                  別途、
                  <ExternalLink href="https://drive.google.com/file/d/1PdyibeXeYTa93Blj_px9Z-QLzEaWoKQi/view?usp=sharing">
                    Wikipedia2021 (HTML)
                  </ExternalLink>
                  か
                  <ExternalLink href="https://drive.google.com/file/d/1qiWxkCXMCmMvLZa12LhXWE9_dJR8M9Xx/view?usp=sharing">
                    Wikipedia2021 (PlainText)
                  </ExternalLink>
                  が必要です
                </>,
              ]}
            />
          </>,
        ]}
      />
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
              <ExternalLink href="https://drive.google.com/file/d/12aR95_a0oSTeEBG6fgBvxjDq-trEruWc/view?usp=sharing">
                サンプルデータ
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    以下のコンテンツが含まれています。
                    <SingleLineList
                      disablePadding
                      items={[
                        <>
                          ene_annotation（属性値抽出結果のアノテーションデータ。入力に相当。JSONL形式）
                        </>,
                        <>
                          link_annotation（リンキング結果のアノテーションデータ。出力に相当。JSONL形式）
                        </>,
                        <>
                          html（Wikipedia2019のHTML版。ただし、ene_annotation、link_annotation対応部分のみ）
                        </>,
                        <>
                          plain（Wikipedia2019のHTML版。ただし、ene_annotation、link_annotation対応部分のみ）
                        </>,
                      ]}
                    />
                  </>,
                ]}
              />
            </>,
            <>
              ベースラインデータ（属性値抽出タスクのみの参加者用）（JSONL）（TBA）
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://drive.google.com/file/d/1PdyibeXeYTa93Blj_px9Z-QLzEaWoKQi/view?usp=sharing">
                      Wikipedia2021 (HTML)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://drive.google.com/file/d/1qiWxkCXMCmMvLZa12LhXWE9_dJR8M9Xx/view?usp=sharing">
                      Wikipedia2021 (PlainText)
                    </ExternalLink>
                    が必要です
                  </>,
                ]}
              />
            </>,
            <>
              リーダーボード入力データ（JSONL）（TBA）
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://drive.google.com/file/d/1PdyibeXeYTa93Blj_px9Z-QLzEaWoKQi/view?usp=sharing">
                      Wikipedia2021 (HTML)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://drive.google.com/file/d/1qiWxkCXMCmMvLZa12LhXWE9_dJR8M9Xx/view?usp=sharing">
                      Wikipedia2021 (PlainText)
                    </ExternalLink>
                    が必要です
                  </>,
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
