import { CSSProperties, PropsWithChildren } from "react";

interface Props {
  width: number;
  height: number;
  style?: CSSProperties;
}

export const MediaBox = ({
  children,
  width,
  height,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        aspectRatio: `${width}/${height}`,
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
