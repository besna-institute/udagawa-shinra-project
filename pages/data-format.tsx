import type { NextPage } from "next";
import { Card, CardContent, Paper } from "@mui/material";
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
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gridGap: "1rem",
      }}
    >
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "1 / span 1",
        }}
      >
        <CardContent>
          <h2>データ形式</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "2 / span 3",
        }}
      >
        <CardContent>
          <h2>End-to-endタスクのデータ形式について</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（入力）</h2>
          <CodeBlock {...props.code.endToEnd.input} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "3 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（出力）</h2>
          <CodeBlock {...props.code.endToEnd.output} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "4 / span 1",
        }}
      >
        <CardContent>
          <h2>スキーマファイル（出力）</h2>
          <CodeBlock {...props.code.endToEnd.schema} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "5 / span 3",
        }}
      >
        <CardContent>
          <h2>分類タスクのデータ形式について</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "5 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（入力）</h2>
          <CodeBlock {...props.code.classification.input} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "6 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（出力）</h2>
          <CodeBlock {...props.code.classification.output} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "7 / span 1",
        }}
      >
        <CardContent>
          <h2>スキーマファイル（出力）</h2>
          <CodeBlock {...props.code.classification.schema} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "8 / span 3",
        }}
      >
        <CardContent>
          <h2>属性抽出タスクのデータ形式について</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "8 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（入力）</h2>
          <CodeBlock {...props.code.attributeExtraction.input} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "9 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（出力）</h2>
          <CodeBlock {...props.code.attributeExtraction.output} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "10 / span 1",
        }}
      >
        <CardContent>
          <h2>スキーマファイル（出力）</h2>
          <CodeBlock {...props.code.attributeExtraction.schema} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "11 / span 3",
        }}
      >
        <CardContent>
          <h2>リンクタスクのデータ形式について</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "11 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（入力）</h2>
          <CodeBlock {...props.code.link.input} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "12 / span 1",
        }}
      >
        <CardContent>
          <h2>サンプルファイル（出力）</h2>
          <CodeBlock {...props.code.link.output} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "13 / span 1",
        }}
      >
        <CardContent>
          <h2>スキーマファイル（出力）</h2>
          <CodeBlock {...props.code.link.schema} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "14 / span 1",
        }}
      >
        <CardContent>
          <h2>フォーマットチェッカーについて</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "15 / span 1",
        }}
      >
        <CardContent>
          <h2>データ形式についてのFAQ</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
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
