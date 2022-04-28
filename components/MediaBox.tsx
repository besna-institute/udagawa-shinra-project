import { CSSProperties, PropsWithChildren } from "react";

interface Props {
  width: number;
  height: number;
  style?: CSSProperties;
  isYouTube?: boolean;
}

export const MediaBox = ({
  children,
  width,
  height,
  style,
  isYouTube,
}: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        aspectRatio: `${width}/${isYouTube ? height + 0.2 : height}`,
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
