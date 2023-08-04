import React from "react";

export const NumberedListElement = ({ attributes, children }) => (
  <ol {...attributes}>{children}</ol>
);
