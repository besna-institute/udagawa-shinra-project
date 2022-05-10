import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Fragment } from "react";

interface Props {
  items: JSX.Element[];
  divider?: boolean;
}

export const SingleLineList = ({ items, divider }: Props) => {
  const lastIndex = items.length - 1;
  const newsItems = items.map((item, index) => (
    <Fragment key={index}>
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
      {divider && lastIndex != index ? (
        <Divider key={`${index}-divider`} component="li" />
      ) : (
        ""
      )}
    </Fragment>
  ));
  return <List sx={{ marginInline: "0.5rem" }}>{newsItems}</List>;
};
