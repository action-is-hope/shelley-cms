import SlateArea from "../../components/SlateArea/SlateArea";

export const BasicSlateArea = () => {
  return (
    <SlateArea
      defaultValue={[
        { type: "paragraph", children: [{ text: "Hello world!" }] },
      ]}
      name="basic-slate-area"
    />
  );
};
