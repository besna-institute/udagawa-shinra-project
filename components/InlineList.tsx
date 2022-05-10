interface Props {
  items: JSX.Element[];
}

export const InlineList = ({ items }: Props) => {
  const commitieItems = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <ul
      style={{
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "flex-start",
        listStyle: "none",
      }}
    >
      {commitieItems}
    </ul>
  );
};
