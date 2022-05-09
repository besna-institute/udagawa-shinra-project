import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Fragment } from "react";

interface Props {
  items: JSX.Element[];
}

export const SingleLineList = ({ items }: Props) => {
  const lastIndex = items.length - 1;
  const newsItems = items.map((item, index) => (
    <Fragment key={index}>
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
      {lastIndex == index ? (
        ""
      ) : (
        <Divider key={`${index}-divider`} component="li" />
      )}
    </Fragment>
  ));
  return <List>{newsItems}</List>;
};
