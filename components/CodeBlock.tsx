import Prism, { Language } from "./Prism";
import { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { ContentCopy, Link } from "@mui/icons-material";

export interface Props {
  code: string;
  language: Language;
  link: string;
}

export const CodeBlock = (props: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <div>
      <pre>
        <code className={`language-${props.language}`}>{props.code}</code>
      </pre>
      <BottomNavigation>
        <BottomNavigationAction
          label="コピー"
          onClick={handleClick}
          icon={<ContentCopy />}
          showLabel
        />
        {/* <BottomNavigationAction
          label="リンク"
          icon={<Link />}
          href={props.link}
          showLabel
        /> */}
      </BottomNavigation>
    </div>
  );
};
