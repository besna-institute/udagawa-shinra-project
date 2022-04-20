import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Fragment } from "react";

interface Props {
  items: {
    title: string;
    time: string;
  }[];
}

export const ScheduleList = ({ items }: Props) => {
  const scheduleItems = items.map((item, index) => (
    <Fragment key={index}>
      <ListItem key={index} disablePadding>
        <ListItemText primary={item.title} secondary={item.time} />
      </ListItem>
      <Divider key={`${index}-divider`} component="li" />
    </Fragment>
  ));
  return <List>{scheduleItems}</List>;
};
