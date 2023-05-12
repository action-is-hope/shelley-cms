import * as IconList from "../../components/icons";

export const Icons = () => {
  const icons = Object.values(IconList);

  const widestIconNameWidth = "170px";

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${widestIconNameWidth}, 1fr))`,
    justifyItems: "center",
    gap: "12px",
    margin: "12px 0",
  };

  const iconWrapperStyles = {
    padding: "16px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={gridStyles}>
      {icons.map((Icon, index) => (
        <div style={iconWrapperStyles} key={index}>
          <Icon aria-hidden="true" />
          <div>{Icon.name}</div>
        </div>
      ))}
    </div>
  );
};
