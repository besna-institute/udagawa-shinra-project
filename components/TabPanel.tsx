import { PropsWithChildren, useState, SyntheticEvent } from "react";

interface Props {
  index: number;
  value: number;
}

export const TabPanel = ({
  children,
  value,
  index,
}: PropsWithChildren<Props>) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index ? <div>{children}</div> : ""}
    </div>
  );
};
