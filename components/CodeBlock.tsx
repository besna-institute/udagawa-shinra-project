import Prism, { Language } from "./Prism";
import { useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
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

  return (
    <Box>
      <pre>
        <code className={`language-${props.language}`}>{props.code}</code>
      </pre>
      <BottomNavigation>
        <BottomNavigationAction label="Copy" icon={<ContentCopy />} />
        <BottomNavigationAction label="Link" icon={<Link />} />
      </BottomNavigation>
    </Box>
  );
};
