import { useState, SyntheticEvent } from "react";
import { TabPanel } from "./TabPanel";
import { Tabs, Tab } from "@mui/material";

export interface TabItem {
  label: string;
  panel: JSX.Element;
}

interface Props {
  ariaLabel: string;
  tabs: TabItem[];
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = ({ ariaLabel, tabs }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label={ariaLabel}>
          {tabs.map((item, index) => (
            <Tab label={item.label} key={index} {...a11yProps(index)} />
          ))}
        </Tabs>
      </div>
      {tabs.map((item, index) => (
        <TabPanel value={value} key={index} index={index}>
          {item.panel}
        </TabPanel>
      ))}
    </div>
  );
};
