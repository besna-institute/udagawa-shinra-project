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
    <h3>Wikipedia2019（訓練データ用）</h3>
    <SingleLineList
      disablePadding
      items={[
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20190121-json.zip">
            CirrusSearchDump
          </ExternalLink>
          （主に分類学習用）
        </>,
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20190120-dump.zip">
            WikiDump
          </ExternalLink>
          （主に分類学習用）
        </>,
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20190120-html.zip">
            HTML
          </ExternalLink>
          （主に属性値、リンキング学習用）
        </>,
      ]}
    />
  </>,
  <>
    <h3>Wikipedia2021（評価データ用）</h3>
    <SingleLineList
      disablePadding
      items={[
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210823-json.gz">
            CirrusSearchDump
          </ExternalLink>
          （主に分類実行用）
        </>,
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-xml.bz2">
            WikiDump
          </ExternalLink>
          （主に分類実行用）
        </>,
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-html-v2.zip">
            HTML
          </ExternalLink>
          （主に属性値抽出、リンキング実行用）
        </>,
        <>
          <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-plain.zip">
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
          <ExternalLink href="https://drive.google.com/file/d/1kOvhBGTxoN2DeLFOh_hYlfMo7SMmYyFV/view?usp=sharing">
            Definition_v9.0.0(森羅タスク用。属性値抽出タスク及びリンキングタスクの対象属性の情報あり)
          </ExternalLink>
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
              <ExternalLink href="https://drive.google.com/file/d/1w83JrR24rN-GsywkfpvOCfRXBgRKOtl_/view?usp=sharing">
                教師データ（JSONL）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20190121-json.zip">
                      Wikipedia2019 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20190120-dump.zip">
                      Wikipedia2019 (WikiDump)
                    </ExternalLink>
                    が必要です。
                  </>,
                ]}
              />
            </>,
            <>
              <ExternalLink href="https://storage.googleapis.com/shinra_data/%E9%85%8D%E5%B8%83%E8%B3%87%E6%96%99/DevData_20220714.tsv">
                開発データ（tsv）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    「page_id」と「ENEラベル（日本語）」のタブ区切りのファイルで、複数のENEラベルがあるときの区切り文字は「:」です。「ENEラベル」と「ENE_id」との対応関係は
                    <ExternalLink href="https://drive.google.com/file/d/1kOvhBGTxoN2DeLFOh_hYlfMo7SMmYyFV/view?usp=sharing">
                      Definition_v9.0.0(森羅タスク用。属性値抽出タスク及びリンキングタスクの対象属性の情報あり)
                    </ExternalLink>
                    を参照してください。
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
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210823-json.gz">
                      Wikipedia2021 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-xml.bz2">
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
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210823-json.gz">
                      Wikipedia2021 (CirrusSearchDump)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-xml.bz2">
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
            <ExternalLink href="https://storage.googleapis.com/shinra_data/data/attribute_extraction-20221116.zip">
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
                  <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-html-v2.zip">
                    Wikipedia2021 (HTML)
                  </ExternalLink>
                  か
                  <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-plain.zip">
                    Wikipedia2021 (PlainText)
                  </ExternalLink>
                  が必要です
                </>,
              ]}
            />
          </>,
          <>
            <ExternalLink href="https://storage.googleapis.com/shinra_data/data/attribute_extraction.zip">
              リーダーボード入力データ（JSONL+Wikipedia2021_subset(該当ページのみ、HTML+PlainText)+拡張固有表現ver9.0）
            </ExternalLink>
            <SingleLineList
              disablePadding
              items={[
                <>
                  JSONLデータのみ欲しい方は、
                  <ExternalLink href="https://drive.google.com/file/d/1FxarCRNnjf6PeA_aY7zQ0n-hJ4eZKZ0P/view?usp=sharing">
                    こちら
                  </ExternalLink>
                  からどうぞ
                </>,
                <>
                  全体のWikipediaデータが欲しい方は、
                  <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-html-v2.zip">
                    Wikipedia2021 (HTML)
                  </ExternalLink>
                  または
                  <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-plain.zip">
                    Wikipedia2021 (PlainText)
                  </ExternalLink>
                  からどうぞ
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
              <ExternalLink href="https://storage.googleapis.com/shinra_data/data/linking-20221116.zip">
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
              ベースラインデータ（リンキングタスクのみの参加者用）（JSONL）（TBA）
              <SingleLineList
                disablePadding
                items={[
                  <>
                    別途、
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-html-v2.zip">
                      Wikipedia2021 (HTML)
                    </ExternalLink>
                    か
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-plain.zip">
                      Wikipedia2021 (PlainText)
                    </ExternalLink>
                    が必要です
                  </>,
                ]}
              />
            </>,
            <>
              <ExternalLink href="https://storage.googleapis.com/shinra_data/data/linking.zip">
                リーダーボード入力データ（JSONL+wikipedia2021(PlainText)+拡張固有表現ver9.0）
              </ExternalLink>
              <SingleLineList
                disablePadding
                items={[
                  <>
                    JSONLデータのみ欲しい方は、
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/data/attribute-extraction-prediction-leaderboard-20220629.jsonl">
                      こちら
                    </ExternalLink>
                    からどうぞ                    
                  </>,
                  <>
                    HTML版のWikipedia2021データが欲しい方は、
                    <ExternalLink href="https://storage.googleapis.com/shinra_data/wikipedia/wikipedia-ja-20210820-html-v2.zip">
                      こちら
                    </ExternalLink>
                    からどうぞ
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
      <ContentBox
        style={{
          gridArea: "subtask-common",
        }}
        theme="green"
      >
        <h2 id="subtask-common">サブタスク共通データ</h2>
        <SingleLineList items={subtaskCommonItems} divider />
      </ContentBox>
    </Paper>
  );
};

export default DataDownload;
