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
        // YouTubeを埋め込んだ時に下に 5px の余白がなぜか挿入されるので対処
        aspectRatio: `${width}/${isYouTube ? height + 0.5 : height}`,
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
