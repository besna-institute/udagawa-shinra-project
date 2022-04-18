interface Props {
  code: string;
  language: "markup" | "javascript" | "csv" | "json" | "yaml" | "clike";
}

export const CodeBlock = (props: Props) => {
  return (
    <pre>
      <code className={`language-${props.language}`}>{props.code}</code>
    </pre>
  );
};
