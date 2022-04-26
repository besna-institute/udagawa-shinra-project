import { CSSProperties, PropsWithChildren } from "react";

type Theme = "white" | "green" | "gray";
interface Props {
  style?: CSSProperties;
  theme: Theme;
}
const defaultStyle: Record<Theme, CSSProperties> = {
  white: {
    backgroundColor: "white",
    padding: "0",
  },
  green: {
    backgroundColor: "#0e832612",
    borderRadius: "4px",
    padding: "0.75rem",
  },
  gray: {
    backgroundColor: "#f8f8f8",
    borderRadius: "4px",
    padding: "0.75rem",
  },
};

export const ContentBox = ({
  children,
  style,
  theme,
}: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        ...defaultStyle[theme],
        ...style,
      }}
    >
      {children}
    </div>
  );
};
