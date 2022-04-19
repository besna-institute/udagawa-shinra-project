import { List, ListItem, ListItemText, Divider } from "@mui/material";

interface Props {
  items: JSX.Element[];
}

export const NewsList = ({ items }: Props) => {
  const newsItems = items.map((item, index) => (
    <>
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
      <Divider key={`${index}-divider`} component="li" />
    </>
  ));
  return <List>{newsItems}</List>;
};
