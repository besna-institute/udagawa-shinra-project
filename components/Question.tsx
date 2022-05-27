import { PropsWithChildren } from "react";

interface Props {
  prefix?: string;
}

export const Question = ({ children, prefix }: PropsWithChildren<Props>) => {
  return (
    <dt
      style={{
        display: "flex",
        marginInlineStart: "1rem",
        marginBlockEnd: "0.25rem",
      }}
    >
      <span style={{ margin: "0 1rem 0 0", minWidth: "1rem" }}>
        {typeof prefix === "string" ? prefix : "Q."}
      </span>
      <span>{children}</span>
    </dt>
  );
};
