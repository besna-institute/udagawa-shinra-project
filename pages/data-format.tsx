import type { NextPage } from "next";
import { Divider, Paper } from "@mui/material";
import { CodeBlock, Code } from "../components";

interface Props {
  code: {
    endToEnd: {
      input: Code;
      output: Code;
      schema: Code;
    };
    classification: {
      input: Code;
      output: Code;
      schema: Code;
    };
    attributeExtraction: {
      input: Code;
      output: Code;
      schema: Code;
    };
    link: {
      input: Code;
      output: Code;
      schema: Code;
    };
  };
}

const ResultSubmission: NextPage<Props> = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gridGap: "2rem",
        gridTemplateAreas: `
          "data-format               data-format"
          "divider1                  divider1"
          "end-to-end-task           end-to-end-task-input"
          "end-to-end-task           divider1-1"
          "end-to-end-task           end-to-end-task-output"
          "end-to-end-task           divider1-2"
          "end-to-end-task           end-to-end-task-schema"
          "divider2                  divider2"
          "classification-task       classification-task-input"
          "classification-task       divider2-1"
          "classification-task       classification-task-output"
          "classification-task       divider2-2"
          "classification-task       classification-task-schema"
          "divider3                  divider3"
          "attribute-extraction-task attribute-extraction-task-input"
          "attribute-extraction-task divider3-1"
          "attribute-extraction-task attribute-extraction-task-output"
          "attribute-extraction-task divider3-2"
          "attribute-extraction-task attribute-extraction-task-schema"
          "divider4                  divider4"
          "link-task                 link-task-input"
          "link-task                 divider4-1"
          "link-task                 link-task-output"
          "link-task                 divider4-2"
          "link-task                 link-task-schema"
          "divider5                  divider5"
          "format-checker            format-checker"
          "divider6                  divider6"
          "faq                       faq"
        `,
      }}
    >
      <Divider sx={{ gridArea: "divider1" }} />
      <Divider sx={{ gridArea: "divider1-1" }} />
      <Divider sx={{ gridArea: "divider1-2" }} />
      <Divider sx={{ gridArea: "divider2" }} />
      <Divider sx={{ gridArea: "divider2-1" }} />
      <Divider sx={{ gridArea: "divider2-2" }} />
      <Divider sx={{ gridArea: "divider3" }} />
      <Divider sx={{ gridArea: "divider3-1" }} />
      <Divider sx={{ gridArea: "divider3-2" }} />
      <Divider sx={{ gridArea: "divider4" }} />
      <Divider sx={{ gridArea: "divider4-1" }} />
      <Divider sx={{ gridArea: "divider4-2" }} />
      <Divider sx={{ gridArea: "divider5" }} />
      <Divider sx={{ gridArea: "divider6" }} />
      <div
        style={{
          gridArea: "data-format",
        }}
      >
        <h2 id="data-format">データ形式</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "end-to-end-task",
        }}
      >
        <h2 id="end-to-end-task">End-to-endタスクのデータ形式について</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "end-to-end-task-input",
        }}
      >
        <h2>サンプルファイル（入力）</h2>
        <CodeBlock {...props.code.endToEnd.input} />
      </div>
      <div
        style={{
          gridArea: "end-to-end-task-output",
        }}
      >
        <h2>サンプルファイル（出力）</h2>
        <CodeBlock {...props.code.endToEnd.output} />
      </div>
      <div
        style={{
          gridArea: "end-to-end-task-schema",
        }}
      >
        <h2>スキーマファイル（出力）</h2>
        <CodeBlock {...props.code.endToEnd.schema} />
      </div>
      <div
        style={{
          gridArea: "classification-task",
        }}
      >
        <h2 id="classification-task">分類タスクのデータ形式について</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "classification-task-input",
        }}
      >
        <h2>サンプルファイル（入力）</h2>
        <CodeBlock {...props.code.classification.input} />
      </div>
      <div
        style={{
          gridArea: "classification-task-output",
        }}
      >
        <h2>サンプルファイル（出力）</h2>
        <CodeBlock {...props.code.classification.output} />
      </div>
      <div
        style={{
          gridArea: "classification-task-schema",
        }}
      >
        <h2>スキーマファイル（出力）</h2>
        <CodeBlock {...props.code.classification.schema} />
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task",
        }}
      >
        <h2 id="attribute-extraction-task">
          属性抽出タスクのデータ形式について
        </h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task-input",
        }}
      >
        <h2>サンプルファイル（入力）</h2>
        <CodeBlock {...props.code.attributeExtraction.input} />
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task-output",
        }}
      >
        <h2>サンプルファイル（出力）</h2>
        <CodeBlock {...props.code.attributeExtraction.output} />
      </div>
      <div
        style={{
          gridArea: "attribute-extraction-task-schema",
        }}
      >
        <h2>スキーマファイル（出力）</h2>
        <CodeBlock {...props.code.attributeExtraction.schema} />
      </div>
      <div
        style={{
          gridArea: "link-task",
        }}
      >
        <h2 id="link-task">リンクタスクのデータ形式について</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "link-task-input",
        }}
      >
        <h2>サンプルファイル（入力）</h2>
        <CodeBlock {...props.code.link.input} />
      </div>
      <div
        style={{
          gridArea: "link-task-output",
        }}
      >
        <h2>サンプルファイル（出力）</h2>
        <CodeBlock {...props.code.link.output} />
      </div>
      <div
        style={{
          gridArea: "link-task-schema",
        }}
      >
        <h2>スキーマファイル（出力）</h2>
        <CodeBlock {...props.code.link.schema} />
      </div>
      <div
        style={{
          gridArea: "format-checker",
        }}
      >
        <h2 id="format-checker">フォーマットチェッカーについて</h2>
        <p>TBA</p>
      </div>
      <div
        style={{
          gridArea: "faq",
        }}
      >
        <h2 id="faq">データ形式についてのFAQ</h2>
        <p>TBA</p>
      </div>
    </Paper>
  );
};

export default ResultSubmission;

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
        endToEnd: {
          input: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          output: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          schema: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
        },
        classification: {
          input: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          output: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          schema: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
        },
        attributeExtraction: {
          input: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          output: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          schema: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
        },
        link: {
          input: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          output: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
          schema: await fetchCode(
            "https://raw.githubusercontent.com/besna-institute/udagawa-shinra-project/main/tsconfig.json",
            "json"
          ),
        },
      },
    },
  };
}
