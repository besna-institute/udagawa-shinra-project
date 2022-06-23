import { CSSProperties } from "react";
import { MediaBox } from "./MediaBox";
import Carousel from "react-material-ui-carousel";

type Item =
  | {
      type: "youtube";
      url: string;
    }
  | {
      type: "image";
      url: string;
      alt: string;
    };
interface Props {
  height: number;
  items: Item[];
  style?: CSSProperties;
  width: number;
}

export const MediaCarousel = ({ height, items, style, width }: Props) => {
  return (
    <Carousel animation="slide" sx={style}>
      {items.map((item) => (
        <MediaBox
          key={item.url}
          width={width}
          height={height}
          style={{
            gridArea: "shinra-video",
          }}
          isYouTube
        >
          {item.type === "youtube" ? (
            <iframe
              loading="lazy"
              src={item.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              loading="lazy"
              alt={item.alt}
              src={item.url}
              style={{
                margin: 0,
              }}
            />
          )}
        </MediaBox>
      ))}
    </Carousel>
  );
};
