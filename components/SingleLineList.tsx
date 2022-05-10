import { List, ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react";

interface Props {
  items: JSX.Element[];
  divider?: boolean;
  disablePadding?: boolean;
}

export const SingleLineList = ({ items, divider, disablePadding }: Props) => {
  const newsItems = items.map((item, index) => (
    <Fragment key={index}>
      <ListItem key={index} divider={divider} disablePadding={disablePadding}>
        <ListItemText primary={item} />
      </ListItem>
    </Fragment>
  ));
  return <List>{newsItems}</List>;
};
