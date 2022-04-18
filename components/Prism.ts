import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-csv";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-clike";

export type Language =
  | "markup"
  | "javascript"
  | "csv"
  | "json"
  | "yaml"
  | "clike";
export default Prism;
