import Prism, { Language } from "./Prism";
import { useEffect } from "react";

interface Props {
  code: string;
  language: Language;
}

export const CodeBlock = (props: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${props.language}`}>{props.code}</code>
    </pre>
  );
};
