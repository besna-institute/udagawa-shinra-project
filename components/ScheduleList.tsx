import { List, ListItem, ListItemText, Divider } from "@mui/material";

interface Props {
  items: {
    title: string;
    time: string;
  }[];
}

export const ScheduleList = ({ items }: Props) => {
  const scheduleItems = items.map((item, index) => (
    <>
      <ListItem key={index} disablePadding>
        <ListItemText primary={item.title} secondary={item.time} />
      </ListItem>
      <Divider key={`${index}-divider`} component="li" />
    </>
  ));
  return <List>{scheduleItems}</List>;
};
