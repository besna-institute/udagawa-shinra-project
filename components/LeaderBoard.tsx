import { useEffect, useRef, useState, CSSProperties } from "react";

interface Props {
  regist?: boolean;
  style?: CSSProperties;
}

export const LeaderBoard = ({ regist, style }: Props) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [leaderboardStyle, setLeaderboardStyle] = useState<CSSProperties>(
    style
      ? {
          maxHeight: "318px",
          height: "318px",
        }
      : {}
  );

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      window.addEventListener("message", (event) => {
        if (event.origin !== "https://leaderboard2022.shinra-project.info")
          return;
        setLeaderboardStyle({
          height: event.data.height,
          maxHeight: event.data.height,
        });
        elem.height = event.data.height;
      });
    }
  });

  return (
    <iframe
      ref={ref}
      style={leaderboardStyle}
      id="leaderboard"
      src={`https://leaderboard2022.shinra-project.info/leaderboard/${
        regist ? "?regist=true" : ""
      }`}
    />
  );
};
