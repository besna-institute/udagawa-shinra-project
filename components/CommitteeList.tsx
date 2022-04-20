interface Props {
  items: string[];
}

export const CommitteeList = ({ items }: Props) => {
  const commitieItems = items.map((item, index) => (
    <span key={index}>{item}</span>
  ));
  return (
    <p
      style={{
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "0 1rem",
        justifyContent: "flex-start",
      }}
    >
      {commitieItems}
    </p>
  );
};
