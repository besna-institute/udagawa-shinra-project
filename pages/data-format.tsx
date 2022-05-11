import type { NextPage } from "next";
import { Paper } from "@mui/material";
import {
  BasicTabs,
  CodeBlock,
  Code,
  ContentBox,
  DataFormatTable,
  DataFormatTableRow,
  TabItem,
} from "../components";

interface Props {
  code: {
    classification: {
      input: Code;
      output: Code;
      train: Code;
    };
    attributeExtraction: {
      input: Code;
      outputHtml: Code;
      outputPlain: Code;
      train: Code;
    };
    link: {
      inputHtml: Code;
      inputPlain: Code;
      input: Code;
      output: Code;
      submissionHtml: Code;
      submissionPlain: Code;
    };
  };
}

const classificationRows: DataFormatTableRow[] = [
  {
    label: <>page_id</>,
    description: <>ページID</>,
    note: <></>,
  },
  {
    label: <>title</>,
    description: <>ページタイトル</>,
    note: <></>,
  },
  {
    label: <>ENEs</>,
    description: <>予測(正解)カテゴリ</>,
    note: <>推測対象</>,
  },
  {
    label: <>HAND.AIP.202204</>,
    description: <>アノテータ―名</>,
    note: <></>,
  },
  {
    label: (
      <>
        AUTO.{"{"}YOUR_SYSTEM{"}"}.202205
      </>
    ),
    description: <>システム名</>,
    note: (
      <>
        {"{"}YOUR_SYSTEM{"}"}に参加者のシステム名を入れる
      </>
    ),
  },
  {
    label: <>prob</>,
    description: <>確率スコア</>,
    note: <>推測対象</>,
  },
  {
    label: <>ENE</>,
    description: <>拡張固有表現ver9.0のID</>,
    note: (
      <>
        推測対象
        <br />
        参考：
        <a
          key="ENEv9"
          href="https://liat-aip.sakura.ne.jp/ene/ene9/definition_jp/index.html"
          target="_blank"
          rel="noreferrer"
        >
          拡張固有表現ver9.0
        </a>
      </>
    ),
  },
];
const attributeExtractionRows: DataFormatTableRow[] = [
  {
    label: <>page_id</>,
    description: <>ページID</>,
    note: <></>,
  },
  {
    label: <>title</>,
    description: <>ページタイトル</>,
    note: <></>,
  },
  {
    label: <>attribute</>,
    description: <>属性</>,
    note: (
      <>
        ENEから推測
        <br />
        参考：
        <a
          key="ENEv9"
          href="https://liat-aip.sakura.ne.jp/ene/ene9/definition_jp/index.html"
          target="_blank"
          rel="noreferrer"
        >
          拡張固有表現ver9.0の属性定義
        </a>
      </>
    ),
    slot: "演繹推論",
  },
  {
    label: <>ENE</>,
    description: <>予測カテゴリ</>,
    note: <></>,
  },
  {
    label: <>text_offset</>,
    description: <>PlainText版でのオフセット情報</>,
    note: <>ちらか一方のみでOK</>,
    slot: "推測対象",
  },
  {
    label: <>html_offset</>,
    description: <>HTML版でのオフセット情報</>,
    note: <>text_offsetかhtml_offsetのどちらか一方のみでOK</>,
    slot: "推測対象",
  },
  {
    label: <>start</>,
    description: <>開始位置</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
  {
    label: <>end</>,
    description: <>終了位置</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
  {
    label: <>line_id</>,
    description: <>行番号</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
  {
    label: <>offset</>,
    description: <>オフセット情報</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
  {
    label: <>text</>,
    description: <>文字列</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
];
const linkingRows: DataFormatTableRow[] = [
  {
    label: <>page_id</>,
    description: <>ページID</>,
    note: <></>,
  },
  {
    label: <>title</>,
    description: <>ページタイトル</>,
    note: <></>,
  },
  {
    label: <>attribute</>,
    description: <>属性</>,
    note: <></>,
  },
  {
    label: <>ENE</>,
    description: <>予測カテゴリ</>,
    note: <></>,
  },
  {
    label: <>text_offset</>,
    description: <>PlainText版でのオフセット情報</>,
    note: <></>,
  },
  {
    label: <>html_offset</>,
    description: <>HTML版でのオフセット情報</>,
    note: <></>,
  },
  {
    label: <>start</>,
    description: <>開始位置</>,
    note: <></>,
  },
  {
    label: <>end</>,
    description: <>終了位置</>,
    note: <></>,
  },
  {
    label: <>line_id</>,
    description: <>行番号</>,
    note: <></>,
  },
  {
    label: <>offset</>,
    description: <>オフセット情報</>,
    note: <></>,
  },
  {
    label: <>text</>,
    description: <>文字列</>,
    note: <></>,
  },
  {
    label: <>link_page_id</>,
    description: <>リンク先のページID</>,
    note: <>推測対象</>,
    slot: "推測対象",
  },
  {
    label: <>link_type</>,
    description: <>リンクタイプ</>,
    note: <>今回のタスクでは対象外</>,
    slot: "対象外",
  },
];

const getDataFormatItems = (code: Props["code"]): TabItem[] => [
  {
    label: "End-to-End",
    panel: (
      <>
        <p>
          End-to-Endタスクは、Wikipediaデータと分類タスクの入力データ(JSONL)から、分類タスク、属性値抽出タスク、リンキングタスクの3つの出力データ(JSONL)を提出するタスクになります。
        </p>
        <p>
          各データの詳細については、それぞれのタスク（分類、属性値抽出、リンキング）の説明をご覧ください。
        </p>
      </>
    ),
  },
  {
    label: "分類",
    panel: (
      <>
        <DataFormatTable rows={classificationRows} />
        <h3>教師データ</h3>
        <CodeBlock {...code.classification.train} />
        <h3>入力データ</h3>
        <CodeBlock {...code.classification.input} />
        <h3>出力データ</h3>
        <CodeBlock {...code.classification.output} />
      </>
    ),
  },
  {
    label: "属性値抽出",
    panel: (
      <>
        <DataFormatTable rows={attributeExtractionRows} />
        <h3>教師データ</h3>
        <CodeBlock {...code.attributeExtraction.train} />
        <h3>入力データ（分類タスクの出力結果）</h3>
        <CodeBlock {...code.attributeExtraction.input} />
        <h3>出力データ（PlainTextにおける箇所を特定する場合）</h3>
        <CodeBlock {...code.attributeExtraction.outputPlain} />
        <h3>出力データ（HTMLにおける箇所を特定する場合）</h3>
        <CodeBlock {...code.attributeExtraction.outputHtml} />
      </>
    ),
  },
  {
    label: "リンキング",
    panel: (
      <>
        <DataFormatTable rows={linkingRows} />
        <h3>サンプルデータ（入力相当）</h3>
        <CodeBlock {...code.link.input} />
        <h3>サンプルデータ（出力相当）</h3>
        <CodeBlock {...code.link.output} />
        <h3>入力データ（属性値抽出タスクの出力結果、PlainText版）</h3>
        <CodeBlock {...code.link.inputPlain} />
        <h3>入力データ（属性値抽出タスクの出力結果、HTML版）</h3>
        <CodeBlock {...code.link.inputHtml} />
        <h3>提出データ（PlainText版）</h3>
        <CodeBlock {...code.link.submissionPlain} />
        <h3>提出データ（HTML版）</h3>
        <CodeBlock {...code.link.submissionHtml} />
      </>
    ),
  },
];

const DataFormat: NextPage<Props> = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        gridGap: "3rem",
        gridTemplateAreas: `
          "data-format"
        `,
      }}
    >
      <ContentBox
        style={{
          gridArea: "data-format",
        }}
        theme="white"
      >
        <h2 id="data-format">結果の評価方法</h2>
        <BasicTabs
          ariaLabel="data format tabs"
          tabs={getDataFormatItems(props.code)}
        />
      </ContentBox>
    </Paper>
  );
};

export default DataFormat;

const fetchCode = async (
  srcUrl: string,
  language: Code["language"],
  link?: Code["link"]
): Promise<Code> => {
  const res = await fetch(srcUrl);
  return {
    code: await res.text(),
    language,
    link: typeof link === "undefined" ? srcUrl : link,
  };
};

export async function getStaticProps(): Promise<any> {
  return {
    props: {
      code: {
        classification: {
          input: await fetchCode(
            "https://2022.shinra-project.info/sample-code/classification/input.json",
            "json"
          ),
          output: await fetchCode(
            "https://2022.shinra-project.info/sample-code/classification/output.json",
            "json"
          ),
          train: await fetchCode(
            "https://2022.shinra-project.info/sample-code/classification/train.json",
            "json"
          ),
        },
        attributeExtraction: {
          input: await fetchCode(
            "https://2022.shinra-project.info/sample-code/attribute-extraction/input.json",
            "json"
          ),
          outputHtml: await fetchCode(
            "https://2022.shinra-project.info/sample-code/attribute-extraction/output-html.json",
            "json"
          ),
          outputPlain: await fetchCode(
            "https://2022.shinra-project.info/sample-code/attribute-extraction/output-plain.json",
            "json"
          ),
          train: await fetchCode(
            "https://2022.shinra-project.info/sample-code/attribute-extraction/train.json",
            "json"
          ),
        },
        link: {
          inputHtml: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/input-html.json",
            "json"
          ),
          inputPlain: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/input-plain.json",
            "json"
          ),
          input: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/input.json",
            "json"
          ),
          output: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/output.json",
            "json"
          ),
          submissionHtml: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/submission-html.json",
            "json"
          ),
          submissionPlain: await fetchCode(
            "https://2022.shinra-project.info/sample-code/link/submission-plain.json",
            "json"
          ),
        },
      },
    },
  };
}
