import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-csv";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-clike";
import { useEffect } from "react";

interface Props {
  code: string;
  language: "markup" | "javascript" | "csv" | "json" | "yaml" | "clike";
}

export const CodeBlock = (props: Props) => {
  useEffect(() => {
    console.log("aaa");
    Prism.highlightAll();
  }, [props.code]);

  return (
    <pre>
      <code className={`language-${props.language}`}>{props.code}</code>
    </pre>
  );
};
