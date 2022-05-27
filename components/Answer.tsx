import { PropsWithChildren } from "react";

interface Props {}

export const Answer = ({ children }: PropsWithChildren<Props>) => {
  return (
    <dd
      style={{
        display: "flex",
        marginInlineStart: "1rem",
        marginBlockEnd: "1.5rem",
      }}
    >
      <span style={{ margin: "0 1rem 0 0", minWidth: "1rem" }}>A.</span>
      <span>{children}</span>
    </dd>
  );
};
